const axios = require('axios');
const albumArt = require( 'album-art' );
const prepareURL = require("../utils/prepareURL");
const ErrorHandler = require('../utils/errorHandler');
const GlobalTryCatchAsync = require('../utils/globalTryCatchAsync');

const createTrackObject = (track,cover) => {
    return {
        track_id: track.track_id,
        track_name: track.track_name,
        explicit: track.explicit,
        cover_image: cover,
        artist_name: track.artist_name
    }
}

const getCleanArtistName = async (artistId) => {
    const url = `${prepareURL("artist.get")}&artist_id=${artistId}`;
    const artist = await axios.get(url);
    const artistCreditsList = artist.data.message.body.artist.artist_credits.artist_list;

    return (artistCreditsList.length == 0)?artist.data.message.body.artist.artist_name : artistCreditsList[0].artist.artist_name;
}

const getAlbumCoverImage = async (artistID,album) => {
    try{
        const artistName = await getCleanArtistName(artistID);
        let cover = await albumArt(artistName,{album: album, size:'medium'});
        return (cover.name)?"":cover;
    } catch(error) {
        return "";
    }
};

exports.searchTracks = GlobalTryCatchAsync(async (req, res, next) => {
        const searchParams = req.query.search || "";
        const page = req.query.page || 1;
        const tracks = [];

        const url = `${prepareURL("track.search",page)}&q_track_artist=${searchParams}&f_has_lyrics=1&s_track_rating=desc`;

        const query = await axios.get(url);
        const result = query.data.message.body.track_list;

        for(const track of result){
            const albumCoverImage = await getAlbumCoverImage(track.track.artist_id, track.track.album_name);
            tracks.push(createTrackObject(track.track, albumCoverImage));
        }

        res.status(200).json({
            status: 'success',
            data: tracks
        });
    }
);

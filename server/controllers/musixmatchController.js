const axios = require('axios');
const albumArt = require( 'album-art' );

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

const getAlbumCoverImage = async (artist,album) => {
    let cover = await albumArt(artist,{album: album, size:'medium'});
    return cover;
};

exports.searchTracks = GlobalTryCatchAsync(async (req, res, next) => {
        const apiKey = process.env.MUSIXMATCH_API_KEY;
        const url = process.env.MUSIXMATCH_URL;
        const params = req.query;

        const tracks = [];

        const query = await axios.get(`${url}/track.search?apikey=${apiKey}&q=${params.search}&f_has_lyrics=1&s_track_rating=desc`);
        const result = query.data.message.body.track_list;

        for(const track of result){
            const albumCoverImage = await getAlbumCoverImage(track.track.artist_name, track.track.album_name)
            tracks.push(createTrackObject(track.track, albumCoverImage));
        }

        res.status(200).json({
            status: 'success',
            data: tracks
        });
    }
);

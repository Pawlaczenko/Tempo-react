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
        artist_name: track.artist_name,
        album_name: track.album_name,
        artist_id: track.artist_id
    }
}

const createLyricsObject = (lyricsObj) => {
    return {
        lyrics: getCleanLyrics(lyricsObj.lyrics_body),
        trackingUrl: lyricsObj.pixel_tracking_url,
        copyright: lyricsObj.lyrics_copyright
    }
}

const getCleanArtistName = async (artistId) => {
    const url = `${prepareURL("artist.get")}&artist_id=${artistId}`;
    const artist = await axios.get(url);
    const artistCreditsList = artist.data.message.body.artist.artist_credits.artist_list;

    return (artistCreditsList.length == 0)?artist.data.message.body.artist.artist_name : artistCreditsList[0].artist.artist_name;
}

const getCleanLyrics = (lyrics) => {
    const LYRICS_MESSAGE_LENGTH = -75;
    return lyrics.slice(0,LYRICS_MESSAGE_LENGTH);
}

const getAlbumCoverImage = async (artistID,album="") => {
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

        const url = `${prepareURL("track.search",page)}&q_track_artist=${searchParams}&f_has_lyrics=1&s_track_rating=desc`;

        const query = await axios.get(url);
        const result = query.data.message.body.track_list;

        const tracks = result.map(track => createTrackObject(track.track));

        res.status(200).json({
            status: 'success',
            data: tracks
        });
    }
);

exports.getTopUS = GlobalTryCatchAsync(async(req,res,next) => {
    const page = req.query.page || 1;
    const url = `${prepareURL("chart.tracks.get",page)}&f_has_lyrics=1`;

    const query = await axios.get(url);
    const result = query.data.message.body.track_list;

    const tracks = result.map(track => createTrackObject(track.track));

    res.status(200).json({
        status: 'success',
        data: tracks
    });
});

exports.getLyrics = GlobalTryCatchAsync(async(req,res,next)=>{
    const track_id = req.params.id;
    const url = `${prepareURL("track.lyrics.get")}&track_id=${track_id}`;

    const query = await axios.get(url);
    const result = createLyricsObject(query.data.message.body.lyrics);

    res.status(200).json({
        status: 'success',
        data: result
    });
});

exports.getAlbumCover = GlobalTryCatchAsync(async(req,res,next)=>{
    const albumName = req.query.album;
    const artistId = req.query.artist;

    const albumCoverImage = await getAlbumCoverImage(artistId, albumName);

    res.status(200).json({
        status: 'success',
        data: albumCoverImage
    });
});
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

const createLyricsObject = (lyricsObj, metaObj) => {
    console.log(metaObj);
    return {
        lyrics: getCleanLyrics(lyricsObj.lyrics_body),
        trackingUrl: lyricsObj.pixel_tracking_url,
        copyright: lyricsObj.lyrics_copyright,
        isExplicit: lyricsObj.explicit,
        track_name: metaObj.track_name,
        artist_name: metaObj.artist_name
    }
}

const getCleanArtistName = async (artistId) => {
    const url = `${prepareURL("artist.get")}&artist_id=${artistId}`;
    const artist = await axios.get(encodeURI(url));
    const artistCreditsList = artist.data.message.body.artist.artist_credits.artist_list;

    return (artistCreditsList.length == 0)?artist.data.message.body.artist.artist_name : artistCreditsList[0].artist.artist_name;
}

const getCleanLyrics = (lyrics) => {
    const LYRICS_MESSAGE_LENGTH = -75;
    return lyrics.slice(0,LYRICS_MESSAGE_LENGTH);
}

const getAlbumCoverImage = async (artistID,album="") => {
    try{
        const artistName = await getCleanArtistName(artistID) || "";
        let cover = await albumArt(artistName,{album: album, size:'medium'});
        return (cover.name) ? "" : cover;
    } catch(error) {
        return "";
    }
};

exports.searchTracks = GlobalTryCatchAsync(async (req, res, next) => {
        const searchParams = req.query.search || "";
        const page = req.query.page || 1;

        const url = `${prepareURL("track.search",page)}&q_track_artist=${searchParams}&f_has_lyrics=1&s_track_rating=desc`;

        const query = await axios.get(encodeURI(url));
        const result = query.data.message.body.track_list;
        let songsCount = query.data.message.header.available;

        //API error fix
        if(songsCount === 0){
            const error = new ErrorHandler("No results found",200);
            return next(error);
        }
        
        songsCount = (songsCount === 10000) ? 600 : songsCount;
        const tracks = result.map(track => createTrackObject(track.track));

        res.status(200).json({
            tracks: tracks,
            songsCount: songsCount
        });
    }
);

exports.getTopUS = GlobalTryCatchAsync(async(req,res,next) => {
    const page = req.query.page || 1;
    const url = `${prepareURL("chart.tracks.get",page)}&f_has_lyrics=1`;

    const query = await axios.get(encodeURI(url));
    const result = query.data.message.body.track_list;
    const songsCount = query.data.message.header.available;

    const tracks = result.map(track => createTrackObject(track.track));

    res.status(200).json({
        tracks: tracks,
        songsCount: songsCount
    });
});

exports.getLyrics = GlobalTryCatchAsync(async(req,res,next)=>{
    const track_id = req.params.id;
    const lyricsUrl = `${prepareURL("track.lyrics.get")}&track_id=${track_id}`;
    const metaUrl = `${prepareURL("track.get")}&track_id=${track_id}`;

    const lyricsQuery = await axios.get(encodeURI(lyricsUrl));
    const metaQuery = await axios.get(encodeURI(metaUrl));
    
    const result = createLyricsObject(lyricsQuery.data.message.body.lyrics, metaQuery.data.message.body.track);

    res.status(200).json({
        lyrics: result
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
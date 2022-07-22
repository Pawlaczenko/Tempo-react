const axios = require('axios');

exports.getSongs = async (req, res, next) => {
    try {
        const apiKey = process.env.MUSIXMATCH_API_KEY;
        const result = await axios.get(`https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&album_id=14250417`);
        res.status(200).json({
            status: 'success',
            data: result.data.message.body,
        });
    } catch (error) {
        console.log(error);
    }
}
const express = require('express');
const router = express.Router();

const {searchTracks, getTopUS, getLyrics, getAlbumCover} = require('../controllers/musixmatchController');

router.route('/searchTracks').get(searchTracks);
router.route('/getTopUS').get(getTopUS);
router.route('/getLyrics/:id').get(getLyrics);
router.route('/getAlbumCover').get(getAlbumCover);

module.exports = router;
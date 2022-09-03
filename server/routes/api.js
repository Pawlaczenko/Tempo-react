const express = require('express');
const router = express.Router();

const {searchTracks, getLyrics, getAlbumCover} = require('../controllers/musixmatchController');

router.route('/searchTracks').get(searchTracks);
router.route('/getLyrics/:id').get(getLyrics);
router.route('/getAlbumCover').get(getAlbumCover);

module.exports = router;
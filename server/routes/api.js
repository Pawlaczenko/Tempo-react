const express = require('express');
const router = express.Router();

const {searchTracks} = require('../controllers/musixmatchController');

router.route('/searchTracks').get(searchTracks);

module.exports = router;
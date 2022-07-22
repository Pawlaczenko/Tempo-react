const express = require('express');
const router = express.Router();

const {getSongs} = require('../controllers/song');

router.route('/').get(getSongs);

module.exports = router;
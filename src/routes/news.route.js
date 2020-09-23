const express = require('express');
const newsController = require('../app/controllers/news.controller');

const router = express.Router();

router.use('/', newsController.index);

module.exports = router;
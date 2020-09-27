const express = require('express');
const newsController = require('../app/controllers/news.controller');

const router = express.Router();

router.get('/', newsController.index);

module.exports = router;

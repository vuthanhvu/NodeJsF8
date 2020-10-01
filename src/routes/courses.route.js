const express = require('express');
const coursesController = require('../app/controllers/courses.controller');

const router = express.Router();

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);
router.put('/:id', coursesController.update);

module.exports = router;

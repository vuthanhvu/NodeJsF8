const express = require('express');
const meController = require('../app/controllers/me.controller');

const router = express.Router();

router.get('/stored/courses', meController.storedCourses);
router.get('/:id/edit', meController.edit);

module.exports = router;

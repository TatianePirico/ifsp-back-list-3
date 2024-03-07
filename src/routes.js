const express = require('express');
const router = express.Router();

const CourseController = require('./controllers/CourseController');

router.get('/students', CourseController.getAllStudents);
router.get('/courses', CourseController.getAllCourses);

module.exports = router;
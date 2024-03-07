const express = require('express');
const router = express.Router();

const CourseController = require('./controllers/CourseController');

router.get('/students', CourseController.getAllStudents);
router.get('/student/:id', CourseController.getStudentById);
router.get('/courses', CourseController.getAllCourses);
router.get('/course/:id', CourseController.getCourseById);
router.get('/enrollments', CourseController.getAllEnrollments );
router.get('/enrollment/:id', CourseController.getEnrollmentByIdCourse);

module.exports = router;
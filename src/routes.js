const express = require('express');
const router = express.Router();

const CourseController = require('./controllers/CourseController');

router.get('/students', CourseController.getAllStudents);
router.get('/student/:id', CourseController.getStudentById);
router.post('/student', CourseController.insertStudent);
router.put('/student/:id', CourseController.updateStudentById);

router.get('/courses', CourseController.getAllCourses);
router.get('/course/:id', CourseController.getCourseById);
router.post('/course', CourseController.insertCourse);
router.put('/course/:id', CourseController.updateCourseById);

router.get('/enrollments', CourseController.getAllEnrollments );
router.get('/enrollment/:id', CourseController.getEnrollmentByIdCourse);
router.post('/enrollment', CourseController.insertEnrollment);
router.put('/enrollment/:id', CourseController.updateEnrollmentById);

module.exports = router;
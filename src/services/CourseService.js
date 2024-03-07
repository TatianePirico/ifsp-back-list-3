const db = require('../db');

module.exports = {
	getAllStudents: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM students', (error, results) => {
				if(error) { reject(error); return; }
				resolve(results);
			});
		});
	},
	getStudentById:  (id) => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM students WHERE id = ?', [id], (error, results) => {
				if(error) { reject(error); return; }
				if(results.length > 0) {
					resolve(results[0]);
				} else {
					resolve(false);
				}
			});
		});
	},
	getAllCourses:  () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM courses', (error, results) => {
				if(error) { reject(error); return; }
				resolve(results);
			});
		});
	},
	getCourseById:  (id) => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM courses WHERE id = ?', [id], (error, results) => {
				if(error) { reject(error); return; }
				if(results.length > 0) {
					resolve(results[0]);
				} else {
					resolve(false);
				}
			});
		});
	},
	getAllEnrollments:  () => {
		return new Promise((resolve, reject) => {
			db.query(`
				SELECT
				students.name,
				students.id,
				courses.description AS description
			FROM students
			INNER JOIN school_enrollment ON school_enrollment.student_id = students.id
			INNER JOIN courses ON courses.id = school_enrollment.course_id`
		,(error, results) => {
				if(error) { reject(error); return; }
				resolve(results);
			});
		});
	},
	getEnrollmentByIdCourse:  (id) => {
		return new Promise((resolve, reject) => {
			db.query(`
					SELECT
					students.name,
					students.id,
					courses.description AS description
				FROM students
				INNER JOIN school_enrollment ON school_enrollment.student_id = students.id
				INNER JOIN courses ON courses.id = school_enrollment.course_id
				WHERE  school_enrollment.course_id = ?`, [id], 
				(error, results) => {
					if(error) { reject(error); return; }
					resolve(results);
			});
		});
	},
};
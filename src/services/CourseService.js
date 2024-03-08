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
	insertStudent: (name, birth_date, nationality, gender, publicPlace, number, city, state, zipCode, type) => {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO students
			(name, birth_date, nationality, gender, publicPlace, number, city, state, zipCode, type)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			[name, birth_date, nationality, gender, publicPlace, number, city, state, zipCode, type],
			(error, results) => {
				if(error) { reject(error); return; }
				resolve(results.insertStudent);
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
	insertCourse: (description) => {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO courses (description) VALUES (?)`, [description], (error, results) => {
				if(error) { reject(error); return; }
				resolve(results.insertCourse);
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
	insertEnrollment: (student_id, course_id, enrollment_date) => {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO school_enrollment (student_id, course_id, enrollment_date) VALUES (?, ?, ?)`, [student_id, course_id, enrollment_date], (error, results) => {
				if(error) { reject(error); return; }
				resolve(results.insertEnrollment);
			});
		});
	},
};
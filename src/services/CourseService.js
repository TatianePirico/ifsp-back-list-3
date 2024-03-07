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

	getAllCourses:  () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM courses', (error, results) => {
				if(error) { reject(error); return; }
				resolve(results);
			});
		});
	}
};
const CourseService = require('../services/CourseService');

module.exports = {

	getAllStudents: async (req, res) => {
		let json = { error:'', result: [] };
		let students = await CourseService.getAllStudents();

		for (let i in students) {
			json.result.push({
				id: students[i].id,
				name: students[i].name,
				birth_date: students[i].birth_date,
				nationality: students[i].nationality,
				gender: students[i].gender,
				publicPlace: students[i].publicPlace,
				number: students[i].number,
				city: students[i].city,
				state: students[i].state,
				zipCode: students[i].zipCode,
				type: students[i].type
			});
		}
		res.json(json);
	},
	getStudentById: async (req, res) => {
		let json = { error:'', result: {} };
		let id = req.params.id;
		let student = await CourseService.getStudentById(id);

		if(student) {
			json.result = student;
		}

		res.json(json);
	},
	getAllCourses: async (req, res) => {
		let json = { error:'', result: [] };
		let courses = await CourseService.getAllCourses();

		for (let i in courses) {
			json.result.push({
				id: courses[i].id,
				description: courses[i].description
			});
		}
		res.json(json);
	},
	getCourseById: async (req, res) => {
		let json = { error:'', result: {} };
		let id = req.params.id;
		let course = await CourseService.getCourseById(id);

		if(course) {
			json.result = course;
		}

		res.json(json);
	},
	getAllEnrollments: async (req, res) => {
		let json = { error:'', result: [] };
		let enrollments = await CourseService.getAllEnrollments();

		for (let i in enrollments) {
			json.result.push({
				id: enrollments[i].id,
				name: enrollments[i].name,
				description: enrollments[i].description
			});
		}
		res.json(json);
	},
	getEnrollmentByIdCourse: async (req, res) => {
		let json = { error:'', result: [] };
		let id = req.params.id;
		let enrollments = await CourseService.getEnrollmentByIdCourse(id);

		for (let i in enrollments) {
			json.result.push({
				id: enrollments[i].id,
				name: enrollments[i].name,
				description: enrollments[i].description
			});
		}
		res.json(json);
	},
}
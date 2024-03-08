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
	insertStudent: async (req, res) => {
		let json = { error:'', result: {} };

		let name = req.body.name;
		let birth_date = req.body.birth_date;
		let nationality = req.body.nationality;
		let gender = req.body.gender;
		let publicPlace = req.body.publicPlace;
		let number = req.body.number;
		let city = req.body.city;
		let state = req.body.state;
		let zipCode = req.body.zipCode;
		let type = req.body.type;

		if(name && birth_date && nationality && gender && publicPlace && number && city && state && zipCode && type) {
			let studentId = await CourseService.insertStudent(
				name, birth_date, nationality, gender, publicPlace, number, city, state, zipCode, type
			);
			json.result = {
				id: studentId, name, birth_date, nationality, gender, publicPlace, number, city, state, zipCode, type
			};
		} else {
			json.error = "Campos não enviados";
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
	insertCourse: async (req, res) => {
		let json = { error:'', result: {} };

		let description = req.body.description;

		if(description) {
			let courseId = await CourseService.insertCourse(description);
			json.result = { id: courseId, description };
		} else {
			json.error = "Campos não enviados";
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
	insertEnrollment: async (req, res) => {
		let json = { error:'', result: {} };

		let student_id = req.body.student_id;
		let course_id = req.body.course_id;
		let enrollment_date= req.body.enrollment_date;

		if(student_id && course_id && enrollment_date) {
			let enrollmentId = await CourseService.insertEnrollment(student_id, course_id, enrollment_date);
			json.result = { id: enrollmentId, student_id, course_id, enrollment_date};
		} else {
			json.error = "Campos não enviados";
		}

		res.json(json);
	},
}
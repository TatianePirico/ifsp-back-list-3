create database dbSchool;

use dbSchool;

create table students(
	id int primary key auto_increment,
	name varchar(100),
	birth_date date,
	nationality varchar(45),
	gender varchar(1)
);

create table adresses(
	id int primary key auto_increment,
	publicPlace  varchar(100),
	number varchar(10),
	city varchar(45),
	state varchar(2),
	zipCCode varchar(9),
	type varchar(10)
);

create table courses(
	id int primary key auto_increment,
	description varchar(100)
);

create table school_enrollment (
	id int primary key auto_increment,
	student_id int not null,
	course_id int not null,
	enrollment_date date,
    FOREIGN KEY (student_id) REFERENCES students (id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
);

create table student_address (
	id int primary key auto_increment,
	student_id int not null,
	address_id int not null,
    FOREIGN KEY (student_id) REFERENCES students (id) ON DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES adresses (id) ON DELETE CASCADE
);

insert into students (name, birth_date, nationality, gender) 
	values ("Tatiane Pirico Oyakawa", "1995-10-23", "brasileira", "F");
insert into students (name, birth_date, nationality, gender) 
	values ("Ana", "2000-10-05", "brasileira", "F");
insert into students (name, birth_date, nationality, gender) 
	values ("Laura", "2002-03-23", "brasileira", "F");
insert into students (name, birth_date, nationality, gender) 
	values ("Amanda", "1995-01-21", "brasileira", "F");
insert into students (name, birth_date, nationality, gender) 
	values ("José", "1995-10-10", "brasileira", "M");
    
insert into adresses (publicPlace, number, city, state, zipCCode, type)
	values ("Rua das borboletas psicodelicas", "10", "São Paulo", "SP", "04313110", "Casa");
insert into adresses (publicPlace, number, city, state, zipCCode, type)
	values ("Rua das borboletas psicodelicas", "30", "São Paulo", "SP", "04313110", "Trabalho");
insert into adresses (publicPlace, number, city, state, zipCCode, type)
	values ("Travessa Nave-Mãe", "7", "São Paulo", "SP", "08345-000", "Casa");
insert into adresses (publicPlace, number, city, state, zipCCode, type)
	values ("Travessa Nave-Mãe", "80", "São Paulo", "SP", "08345-000", "Trabalho");
insert into adresses (publicPlace, number, city, state, zipCCode, type)
	values ("Travessa Maravilha Tristeza", "203", "São Paulo", "SP", "05574310", "Casa");
    
insert into courses (description) values ("Desenvolvimento backend");
insert into courses (description) values ("Desenvolvimento frontend");

insert into school_enrollment (student_id, course_id, enrollment_date) values (1, 1, "2024-02-10");
insert into school_enrollment (student_id, course_id, enrollment_date) values (2, 1, "2024-02-10");
insert into school_enrollment (student_id, course_id, enrollment_date) values (3, 2, "2024-02-10");
insert into school_enrollment (student_id, course_id, enrollment_date) values (4, 2, "2024-02-10");
insert into school_enrollment (student_id, course_id, enrollment_date) values (5, 2, "2024-02-10");

insert into student_address (student_id, address_id) values (1, 1);
insert into student_address (student_id, address_id) values (2, 2);
insert into student_address (student_id, address_id) values (3, 3);
insert into student_address (student_id, address_id) values (4, 4);
insert into student_address (student_id, address_id) values (5, 5);
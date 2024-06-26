#! /user/bin/env node
"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registorforcourses(courses) {
        this.courses.push(courses);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(salary, name, age) {
        super(name, age);
        this.salary = salary;
    }
    assigncourse(courses) {
        this.courses.push(courses);
    }
}
let student1 = new Student("huzaifa", 22, "2334");
let student2 = new Student("Hamzah", 25, "3849");
let Instructor1 = new Instructor(60000, "sirZia", 60);
let Instructor2 = new Instructor(5000, "missMehwisj", 40);
class Course {
    id;
    name;
    student = [];
    Instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.student.push(std);
    }
    addInstructor(ins) {
        this.Instructor.push(ins);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    setCourse(course) {
        this.courses.push(course);
    }
}
let course1 = new Course(7, "blockchange");
let course2 = new Course(5, "markiting");
course1.addStudent(student1);
course2.addStudent(student1);
course2.addStudent(student2);
course1.addInstructor(Instructor1);
course2.addInstructor(Instructor2);
console.log(course1.student);
console.log(student1.courses);
let Dept = new Department("markiting");
Dept.setCourse(course1);
console.log(Dept.courses[0]);

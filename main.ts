#! /user/bin/env node
class Person {
    name:string;
    age:number;
    
    constructor(name:string , age:number) {
        this.name=name;
        this.age=age;

    }
}

class Student extends Person{
    rollNumber:string;
    courses:Course[]=[];
    constructor(name:string , age:number , rollNumber:string ){
        super(name,age)
        this.rollNumber=rollNumber
    }
    registorforcourses(courses:Course){
        this.courses.push(courses);
    }
}

class Instructor extends Person{
    salary:number;
    courses:Course[]=[];
    constructor(salary:number , name:string , age:number){
        super(name,age)
        this.salary=salary;
    }
    assigncourse(courses:any){
        this.courses.push(courses);
    }
}


let student1 = new Student("huzaifa" , 22 ,"2334" )
let student2 = new Student("Hamzah" , 25 , "3849")
let Instructor1 = new Instructor(60000 , "sirZia" , 60)
let Instructor2 = new Instructor(5000 , "missMehwisj" , 40)

class Course{
    id:number;
    name:string;
    student:Student[]=[]
    Instructor:Instructor[]=[]
    constructor(id:number ,name:string){
        this.id=id;
        this.name=name;
    }
    addStudent(std:Student){
        this.student.push(std)
    }
    addInstructor(ins:Instructor){
        this.Instructor.push(ins)
    }
}

class Department{
    name:string;
    courses:Course[]=[];
    constructor(name:string){
        this.name=name
    }
    setCourse(course:Course){
        this.courses.push(course)
    }
}


let course1 =new Course(7 , "blockchange")
let course2 =new Course(5 , "markiting")
course1.addStudent(student1)
course2.addStudent(student1)
course2.addStudent(student2)

course1.addInstructor(Instructor1)
course2.addInstructor(Instructor2)


console.log(course1.student)
console.log(student1.courses)

let Dept = new Department("markiting");
Dept.setCourse(course1)
console.log(Dept.courses[0])
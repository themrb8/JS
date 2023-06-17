const { Guardian, Student, Teacher } = require('./person');
const { Contact, Address } = require('./contact');
const { Department, Subject} = require('./university');

/**
*Guardian ID 1
*/
const guardian = new Guardian(1, 'Mr. Faruk', 'Doctor', 655000);
guardian.blood = '0v+';
guardian.contact = new Contact({ id: 1, email: 'office@example.com', phone: '768277626876',});

guardian.contact.address = new Address({
    id: 1,
    roadNo: '98E',
    city: 'P city',
    region: 'Rajshahi',
    country: 'Bangladesh',
    postalCode: 8323,
});

// console.log(guardian);
// console.log(guardian.contact.address.country);
console.log('Guardian Phone Number: ' + guardian.contact.phone);

/**
 * Student ID
 */
const student = new Student(1, 'Mr. R', 'SE1', guardian);
student.blood = 'AB+';
student.contact = new Contact({
    id: 2,
    email: 'test@gj.com',
    phone: '873467836837223',
    alternativePhone: student.guardian.contact.phone,
    address: student.guardian.contact.address,
})


/**
 * Department ID
*/
const department = new Department({
    id: 1,
    name: 'cse',
});

student.department = department;

department.subjects = [
    new Subject(1, 'Fundamentals', 4),
    new Subject(2, 'Architechture', 2),
    new Subject(3, 'Programming', 3),
];
const credit = student.department.subjects.reduce((a, b) => {
    a += b.credit;
    return a;
}, 0);
console.log('Total Credit:', credit);


/**
 * Teachers
*/

const dean = new Teacher(1, 'Mr. Teacher', department.subjects[0], 'DJE5');
dean.blood = 'Ove+';
dean.department = department;
dean.salary = 5000;
dean.contact = new Contact({
    id: 3,
    email: 'hello@g.com',
    phone: '847897438948934',
    address: new Address({
        id: 2,
        roadNo: '42W',
        city: 'Raj City',
        region: 'Raj',
        country: 'BD',
        postalCode: '9922',
    })
})
const teacher1 = new Teacher(2, 'mR. jair', department.subjects[1], 'FWWQ3');
teacher1.department = department;
teacher1.blood = 'ab-';
teacher1.salary = 980;
teacher1.contact = new Contact({
    id: 3,
    email: 'teacher1@g.com',
    phone: '847897438948934',
    address: new Address({
        id: 2,
        roadNo: '42W',
        city: 'Raj City',
        region: 'Raj',
        country: 'BD',
        postalCode: '9922',
    })
})
const teacher2 = new Teacher(3, 'Jakir', department.subjects[2], 'FWQ1');
teacher1.department = department;
teacher1.blood = 'ab-';
teacher1.salary = 866;
teacher1.contact = new Contact({
    id: 3,
    email: 'teacher2@g.com',
    phone: '847897438948934',
    address: new Address({
        id: 2,
        roadNo: '42W',
        city: 'Raj City',
        region: 'Raj',
        country: 'BD',
        postalCode: '9922',
    })
})

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

student.department.teachers.forEach((teacher, index) => {
    console.log(`${index + 1}. ${teacher.name} (${teacher.subject.name})`);
});

guardian.addChild(student);
console.log(guardian);

const teachersSalary = guardian.children[0].department.teachers.reduce((acc, cur) => {
    acc += cur.salary
    return acc;
}, 0);

console.log(teachersSalary);

let count = 0;
if(student.blood == 'AB+') count++;
if(student.guardian.blood == 'AB+') count++;
student.department.teachers.forEach(teacher => {
    if(teacher.blood == 'AB+') count++;
});

console.log(count);
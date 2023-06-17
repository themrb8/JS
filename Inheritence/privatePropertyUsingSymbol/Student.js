const Person = require('./Person');
const _subjects = Symbol('subjects');
const _tuitionFee = Symbol('tuitionFee');

class Student extends Person {
    constructor(name, email, subjects, tuitionFee) {
        super(name, email);
        this[_subjects] = subjects;
        this[_tuitionFee] = tuitionFee;
    }

    get subjects() {
        return this[_subjects];
    }
    
    set subjects(value) {
        this[_subjects] = value;
    }

    get tuitionFee() {
        return this[_tuitionFee];
    }
    
    set tuitionFee(value) {
        this[_tuitionFee] = value;
    }

    print() {
        super.print();
        console.log(`Subjects: ${this[_subjects]}, tuitionFee: ${this[_tuitionFee]}`);
    }
}

module.exports = Student;
const _name = Symbol('name');
const _email = Symbol('email');

class Person {
    constructor(name, email) {
        this[_name] = name;
        this[_email] = email;
    }

    get name() {
        return this[_name];
    }

    set name(value) {
        this[_name] = value;
    }

    get email() {
        return this[_email];
    }

    set email(value) {
        return this[_email] = value;
    }

    print() {
        console.log(this + '');
    }

    toString() {
        return `Name: ${this[_name]}, Email: ${this[_email]}`;
    }

    static isValid(age) {
        return age >= 18;
    }

    static equal(p1, p2) {
        if(p1.name !== p2.name) return false;
        if(p2.email !== p2.email) return false;

        return true;
    }
}

module.exports = Person;
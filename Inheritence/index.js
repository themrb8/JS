const Person = require('./Person.js');
const Teacher = require('./Teacher');
const Student = require('./Student');

const p = new Person('Mohammad Roman Biswas', 'officialroman786@example.com');
const t = new Teacher('Roman', 'hello@example.com', 'Computer 101', 95000);
const s = new Student('rafid', 'rafid@gmail.com', ['Computer 101', 'Programming Books', 'Data Structur & Algorithm'], 10000);

p.print();
t.print();
s.print();
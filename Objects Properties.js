let person = {
    name: "Emon",
    age: 23,
    profession: 'Developer',
    skills: ['HTML', 'CSS', 'JavaScript'],
    salary: 30000,
    isMarried: true,
}

// To see all properties of person
console.log(person);

// To see single property using dot notation
console.log(person.name);

// To see single property using bracket notation
// Most preferable
console.log(person['age']);

// You can also change or update any of the property values

// Using dot notation
person.salary += 5000;

// Using bracket notation
person['age'] += 3;

console.log(person);
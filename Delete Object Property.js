let person = {
    name: 'John',
    age: 25,
    city: 'New York',
    country: 'USA',
    occupation: 'Developer',
    skills: ['JavaScript', 'HTML', 'CSS']
}

console.log(person);

// Delete information of any specified property
delete person.city;
console.log(person);
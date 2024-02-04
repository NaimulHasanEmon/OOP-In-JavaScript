let person = {
    name: 'John',
    age: 25,
    city: 'New York',
    country: 'USA',
    occupation: 'Developer',
    skills: ['JavaScript', 'HTML', 'CSS']
}

// Total objects print
// console.log(person);

// Using object iteration
for (let key in person) {
    console.log(key,':', person[key]);
}

// Using array iteration
// let keys = Object.keys(person);
// for (let key of keys) {
//     console.log(key, ":", person[key]);
// }
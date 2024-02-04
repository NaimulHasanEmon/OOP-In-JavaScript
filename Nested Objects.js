let college = {
    name: "BCPSC",
    class: [11, 12],
    events: ['Science fair', '16 December', '21 February'],
    specialty: {
        passRate: '99%',
        result: {
            GPA: 5
        }
    }
}

console.log(college);
console.log(college.specialty);
console.log(college.specialty.passRate);
console.log(college.specialty.result.GPA);

// You can change of update the value of the field if needed with the same calling process
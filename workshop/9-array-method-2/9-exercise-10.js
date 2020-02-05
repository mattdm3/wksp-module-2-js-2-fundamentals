// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function letterGrade(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum = sum + grade;
    })
    let average = sum / grades.length;
    if (average < 60) {
        return "F"
    } else if (average < 70) {
        return "D"
    } else if (average < 80) {
        return "C"
    } else if (average < 90) {
        return "B"
    } else return "A"
}

console.log(letterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well



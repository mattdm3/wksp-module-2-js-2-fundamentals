// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

let isPresent;

function itemIsPresent(array, item) {
    array.forEach(function (word) {
        if (word === item) {
            isPresent = true;
        } else {
            isPresent = false;
        }
    })
    console.log(isPresent);
}


// Test case
const myArray = ['bacon', 'purple', 'door', 'window', 'exist', 'code', 'program', 'funky'];

itemIsPresent(myArray, 'funky');

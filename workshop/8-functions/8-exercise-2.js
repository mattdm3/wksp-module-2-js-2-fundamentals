// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

function returnMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else return num2;


}

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp





// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?

// by calling the function within the function; 

console.log(returnMax(returnMax(1, 2), returnMax(3, 4)));


// Q2c
// Would this work with more integers? 

// NO
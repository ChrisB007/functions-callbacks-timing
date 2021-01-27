/*  //  //  //  //  //  //  //  //
1.
declare a variable in the global scope and assign it a value of 'Hello' 
write a function that concatenates the string ' World' with the variable 
invoke the function
log the variable's value after you invoke the function 
*/  //  //  //  //  //  //  //  //

let x = "Hello";
function y(){
    return  x + " World";
}

console.log(y());

/*  //  //  //  //  //  //  //  //
2. 
write a function that assigns a numerical value to number1 and number2
write a second function that multiplies number1 by number2 and assigns the product to the variable result
write a third function that prints result's value in the console
invoke the three functions in order
*/  //  //  //  //  //  //  //  //

let number1
let number2
let result

function addNum(number1, number2) {
    result = number1 * number2;
    return result;
}

console.log(addNum(12, 7))

/*  //  //  //  //  //  //  //  //
3. 
write a function that accepts a number as a parameter, squares it (multiplies it by itself) and returns the square
invoke the function and assign its return to a new variable
print the variable
*/  //  //  //  //  //  //  //  //

function myFunc(x){
    return x * x;
}

console.log(myFunc(5));

/*  //  //  //  //  //  //  //  //
4. 
write a function that accepts two integers as parameters
convert the two integers to strings and concatenate them, return the result
invoke the function and assign its return to a new variable
print the variable
example input: 5, 4
output: "54"
example input: 67, 1
output: "671"
*/  //  //  //  //  //  //  //  //

function intFunc(a, b) {
    return a.toString() + b.toString();
}

console.log(intFunc(67,1));

/*  //  //  //  //  //  //  //  //
5. 
write a function that accepts two numbers as parameters, compares them and returns the number that is larger
invoke the function and assign its return to a new variable
print the variable
example input: 3, 15
output: 15
*/  //  //  //  //  //  //  //  //

function twoNum(a,b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}

console.log(twoNum(3,15));



/*  //  //  //  //  //  //  //  //
6. 
create an object with several key: value pairs and assign it to a variable
write a function that accept an object as an parameter, loop over the object and print out the value of every key
*/  //  //  //  //  //  //  //  //

let obJ = {
    name: "Jack",
    work: true,
    age: 25
}

function acceptObj(a) {
    for (let i in a){
        console.log(a[i]);
    }
}

console.log(acceptObj(obJ));


/*  //  //  //  //  //  //  //  //
7. 
write a function that accepts an array of numbers as a parameter, loops over the array and finds the average of all the values in the array and returns it
invoke the function and assign its return to a new variable
print the variable
*/  //  //  //  //  //  //  //  //

// let s = [1,2,3,4,5,6];

// function accRay(arr) {
//     for (var i = 0; i < arr.length; i++){
//         var average = average + arr[i];
//         // console.log(average);
//     }

//     return average / arr.length;
// }

// console.log(accRay(s));


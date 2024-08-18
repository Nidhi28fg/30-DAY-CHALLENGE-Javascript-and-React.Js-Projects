//Syntax of Javascript
// 1. Variables
// Variables are used to store data. In JavaScript, you declare variables using var, let, or const.
let name = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function-scoped

// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log
 
const favoriteColor = "Blue"; // favorite color is unlikely to change
let heightInCm = 165; // height is generally fixed, but 'let' allows reassignment if needed
var likesPizza = true; // using var for broader scope, though 'let' is usually better

// Logging the variables to the console
console.log("Favorite Color:", favoriteColor);
console.log("Height in cm:", heightInCm);
console.log("Likes Pizza:", likesPizza);

// 2. Data types
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

// 3. Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

// 4. Functions
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"


// var: Function-scoped, hoisted with undefined, allows re-declaration.
// let: Block-scoped, hoisted without initialization (temporal dead zone), no re-declaration in the same scope.

function sum(a, b) {
    return a + b;
}

// Function call
let result = sum(5, 10); // 15
console.log(result);
//Side Quest: Passing a string instead of a number:

let resultWithString = sum(5, "10"); // "510"
console.log(resultWithString);

//canVote function that checks if the user's age is greater than 18:

function canVote(age) {
    return age > 18;
}

// Function call
let isEligible = canVote(20); // true
console.log(isEligible);

isEligible = canVote(16); // false
console.log(isEligible);

//If/Else
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

let num = 7; // You can change this value to test different numbers

if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// For 6 loop
for (let i = 0; i < 5; i++) {
    //i=0 0<5 then nummber will be console after that number will be add
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

//Write a function called sum that finds the sum from 1 to a number

function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        //i=1 1<=5 con =1 1++ 2
        // i= 2 2<=5 con 2 (1+2=3) 2++ 3
        //i=3 3<=5 con 3 (3+3=6) 3++ 4
        //i=4 4<=5 con 4 (4+6 =10) 4++ 5
        //i=5 5<=5 con 5 (10+5 = 15) 5++ 6
        //i=6 6<=5 loop will stop here
        total += i;
        //total =15

    }
    return total;
}

// Function call
let result1 = sum(5); // 1 + 2 + 3 + 4 + 5 = 15
console.log(result1); // Outputs: 15



const users = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}]; // Added closing square bracket and semicolon

const user1 = users[0]; 
const user1Age = users[0].age;

//Assignment #1: Greet the User with Their Name and Age

function greetUser(user) {
    console.log("Hi " + user.name + ", you are " + user.age + " years old.");
}

// Example usage:
let user = {
    name: "Harkirat",
    age: 10
};

greetUser(user); // Output: Hi Harkirat, you are 19 years old.


//Assignment #2: Greet the User with Their Gender
function greetUserWithGender(user) {
    let salutation;

    if (user.gender === 'male') {
        salutation = "Mr.";
    } else if (user.gender === 'female') {
        salutation = "Mrs.";
    } else {
        salutation = "Mx.";
    }

    console.log("Hi " + salutation + " " + user.name + ", your age is " + user.age + ".");
}

// Example usage:
let newUser = {
    name: "Harkirat",
    age: 21,
    gender: "male"
};

greetUserWithGender(newUser); // Output: Hi Mr. Harkirat, your age is 21.


//Assignment #3: Check if the User is Legal to Vote
function checkVotingEligibility(user) {
    if (user.age >= 18) {
        console.log("Hi " + user.name + ", you are legal to vote.");
    } else {
        console.log("Hi " + user.name + ", you are not legal to vote.");
    }
}

// Example usage:
checkVotingEligibility(user); // Output: Hi Harkirat, you are legal to vote.


//Putting It All Together
function greetAndCheckEligibility(user) {
    // Greet the user with their name and age
    greetUser(user);

    // Greet the user with their gender
    greetUserWithGender(user);

    // Check if the user is legal to vote
    checkVotingEligibility(user);
}

// Example usage:
let userWithDetails = {
    name: "Harkirat",
    age: 21,
    gender: "male"
};

greetAndCheckEligibility(userWithDetails);

//object of object
const user10 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user10.address.city;
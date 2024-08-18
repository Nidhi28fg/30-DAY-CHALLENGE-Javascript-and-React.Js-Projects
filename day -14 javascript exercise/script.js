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


// var: Function-scoped, hoisted with undefined, allows re-declaration.
// let: Block-scoped, hoisted without initialization (temporal dead zone), no re-declaration in the same scope.

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

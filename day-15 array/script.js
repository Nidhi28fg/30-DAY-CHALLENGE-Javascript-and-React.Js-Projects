function getEvenNumbers(numbers) {
    // numbers=numbersarray.... elements of each numbers is number 
    return numbers.filter(function(number) {
        return number % 2 === 0; //12345678
    });
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = getEvenNumbers(numbersArray); // filter number can be store in new variable 

console.log(evenNumbers); // Output: [2, 4, 6, 8]

// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function solve(arr) {
    // filter in js array
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].gender === "male" && arr[i].age > 18) {
        arr2.push(arr[i]);
      }
    }
  
    return arr2;
  }
  
  const users = [
    {
      name: "harkirat",
      age: 21,
      gender: "male",
    },
    {
      name: "priya",
      age: 21,
      gender: "female",
    },
    {
      name: "raman",
      age: 20,
      gender: "male",
    },
  ];
  
  const ans = solve(users);
  
  console.log(ans);
  
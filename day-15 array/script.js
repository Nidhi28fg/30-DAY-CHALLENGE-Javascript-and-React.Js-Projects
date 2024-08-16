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

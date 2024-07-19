// Generate a random color
const randomColor = function () {  // Define a function named randomColor
    const hex = '0123456789ABCDEF';  // Create a string of all possible hex characters
    let color = '#';                 // Initialize color string with '#'
    for (let i = 0; i < 6; i++) {    // Loop 6 times to generate 6 random characters
      color += hex[Math.floor(Math.random() * 16)]; // Append a random hex character to color
    }
    return color;                    // Return the generated color string
  };
  
  console.log(randomColor());        // Call the function and log the result
  
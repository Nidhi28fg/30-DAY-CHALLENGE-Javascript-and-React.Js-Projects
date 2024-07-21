const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const buttonValue = e.target.innerText;

    if (buttonValue === '=') {
      try {
        string = String(eval(string)); // Use a safer alternative like a calculator library for better security
      } catch (error) {
        // Handle invalid expressions gracefully, e.g., display an error message
        input.value = "Error: Invalid expression";
      }
    } else if(buttonValue === 'AC' ) {
        string= ' '

    } else if (buttonValue === 'DEL'){
        string = string.substring(0, string.length-1)
    }
    else if(e.target.id == 'pluseMinus'){
        string = String(-eval(string))
    }
    else {
      string += buttonValue;
    }
    input.value = string;
  });
});
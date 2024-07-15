const forms = document.querySelectorAll("form");
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultElement = document.querySelector(".result");
    const note = document.querySelector(".note");


    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    if (isNaN(height) || height <= 0 || height === " ") {
      resultElement.textContent = "Please enter a valid height.";
    } else if (isNaN(weight) || weight <= 0 || weight === " ") {
      resultElement.textContent = "Please enter a valid weight.";
    } else {
      const bmi = (weight / (height * height / 10000)).toFixed(2);
      resultElement.textContent = `Your BMI is: ${bmi}`;

      if (bmi < 18.5) {
        note.textContent = `You are Underweight because your BMI is ${bmi} which is lower than 18.5`;
      } else if (bmi >= 18.5 && bmi < 24.9) {
        note.textContent = `Your weight is Normal`;
      } else if (bmi >= 25 && bmi < 29.9) {
        note.textContent = `You are Overweight because your BMI is ${bmi} which is between 25 and 29.9`;
      } else {
        note.textContent = `You are Obese because your BMI is ${bmi} which is 30 or greater`;
      }
    }
  });
});

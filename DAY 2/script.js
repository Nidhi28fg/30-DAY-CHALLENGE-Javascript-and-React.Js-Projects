const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const heightInput = document.getElementById("height");
        const weightInput = document.getElementById("weight");
        const resultElement = document.querySelector(".result");

        const height = parseInt(heightInput.value);
        const weight = parseInt(weightInput.value);

        if (isNaN(height) || height <= 0 || height === " ") {
            resultElement.textContent = "Please enter a valid height.";
        } else if (isNaN(weight) || weight <= 0 || weight === " ") {
            resultElement.textContent = "Please enter a valid weight.";
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            resultElement.textContent = `Your BMI is: ${bmi}`;
        }
    });
});

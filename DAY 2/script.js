const forms = document.querySelectorAll("form")

forms.addEventLister('submit', function(e) {
    e.preventDefault();

    const height = document.getElementsByClassName(".height");
    const weight = document.getElementsByClassName(".weight");
    const result = document.getElementsByClassName(".result");

    if (heightInput.value ==="" || heightInput.value <= 0 || isNaN(heightInput.value)){
        return Please put valid number
    }else if (weightInput.value ==="" || weightInput.value <= 0 || isNaN(weightInput.value)){
        return Please put valid number
    } else {
        const finalresult = (weight / {height / height} x 10000) toFixed(2);;
        return result.innerHtml = finalresult
    }


}

)
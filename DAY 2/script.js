const forms = document.querySelectorAll("form");

forms.addEventLister('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector(".height").value);
    const weight = parseInt(document.querySelector(".weight").value);
    const result = document.querySelector(".result");

    if (height === "" || height <= 0 || isNaN(height)){
        result.innerHTML=` Please put valid number ${height};
    }else if (weightInput.value ==="" || weightInput.value <= 0 || isNaN(weightInput.value)){
        result.innerHTML=` Please put valid number ${weight};
    } else {
        const finalresult = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML=` <span> ${finalresult} </span>`;
    }


});
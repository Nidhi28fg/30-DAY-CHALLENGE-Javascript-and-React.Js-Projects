const clock = document.getElementById("clock");
setInterval(function () {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


// setInterval function used to play action in every section 

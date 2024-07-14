const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const color = e.target.id;
        if (['blue', 'aqua', 'pink', 'yellow'].includes(color)) {
            body.style.backgroundColor = color;
        }
    });
});



// OR 
// document.getElementById('yellow').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'yellow';
// });

// document.getElementById('blue').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
// });

// document.getElementById('skyblue').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'aqua';
// });

// document.getElementById('pink').addEventListener('click', function() {
//     document.body.style.backgroundColor = 'pink';
// });


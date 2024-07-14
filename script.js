const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const color = e.target.id;
        if (['blue', 'skyblue', 'pink', 'yellow'].includes(color)) {
            body.style.backgroundColor = color;
        }
    });
});

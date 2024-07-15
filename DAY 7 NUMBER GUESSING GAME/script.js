let randowNumber = parseInt((Math.random()*100) + 1);

const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const previousValue = document.querySelector(".previousValue");
const remaineAttemp = document.querySelector(".remaineAttemp");

let p = document.createElement("p");

let playgame = true;

let inputArray = [];
let attemp = 1;

if (playgame) {
    submit.addEventListener("click", function(e){
        e.preventDefault;
        const guess = input.value;
        checkNumber(guess)
    } )
}

function checkNumber(guess){
    if (isNaN(guess)){
        alert(`Please entre valid Number`);
    } else if (guess < 1) {
        alert(`Please entre a valid Number`);
    } else if ( guess > 100){
        alert(`Your number ${guess} is greater than 100`);
    } else (){
        
    }
};

function correctNumber(guess){
    
}

function attempreamain() {

}

function endgame(guess){

};

function newgame(guess){

}
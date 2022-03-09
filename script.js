let displayValue;
function operate(num1,num2,callback){
    displayValue=callback(num1,num2);
    console.log(displayValue); 
}

function add(x,y){
    return x+y;
}
    
function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2){
    return Number((num1/num2).toFixed(7));
}

const buttons=document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
    console.log(button.textContent);
});
})

// buttons
// -numbers & operators
// -enter
// -clear

// return screen

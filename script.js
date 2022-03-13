var firstOperand='';
var secondOperand='';
var callback=null;
var shouldResetDisplay=false;
var decClicked=false;

//establishes the buttons with specified functions actionable by clicking
const display=document.getElementById('calculation');
const opDisplay=document.querySelector('#operations');
const numButtons=document.querySelectorAll('.number');
const opButtons=document.querySelectorAll('.operator');
const delButton=document.querySelector('.delete');
const decButton=document.querySelector('.decimal');
const equalsButton=document.getElementById('enter');
const clearButton=document.getElementById('clear');

window.addEventListener('keydown',clickToKey);

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', ()=> numInput(numButton.value));
});

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => selectOp(opButton.value));
});

delButton.addEventListener('click', deleteNum);

decButton.addEventListener('click', addDecimal);
   
equalsButton.addEventListener('click', evaluate);

clearButton.addEventListener('click', reset);

//allows number to be input into calculator and displayed on screen.  the screen is cleared if the calculator displays zero (standard on 
//display) or screen reset is prompted (when the first operand has been entered)
function numInput(number){
    if(display.textContent==='0'||shouldResetDisplay){
        resetDisplay();
    }
    display.textContent+=number; 
//disables decimal button if a decimal point has already been added; resets for each operand
    if(number==="."){
      decClicked=true;
    }
}
//if the number that is entered is the first operand (no operation has been assigned yet), it will be assigned to firstOperand and the operation will be 
//assigned as the callback.  opDisplay will change to reflect the current operation.  Display is reset for next input for second operand.  Decimal button
// is also re-enabled.
function selectOp(perfOp) {
    if(callback!==null){
        evaluate();
    }
    firstOperand=display.textContent;
    opDisplay.textContent=perfOp;
    callback=perfOp;
    decButton.disabled=false;
    shouldResetDisplay=true;
}
//why is this not the same as if(callback===null execute 58-62 else evaluate??)
 
//this function saves the value on the display as secondOperand.  If another operation is performed, the opDisplay reflects the operation;
//otherwise, if ENTER is clicked, the opDisplay shows "=".  The operate function is performed based on the values assigned to firstOperand, 
//secondOperand and callback.  The value on display with show the resulting value.  Callback is assigned the value of null
//which means the result is saved as the firstOperand and the next input will following this same code
function evaluate(e){
    secondOperand=display.textContent;    
    if(this.textContent==="ENTER"){
        opDisplay.textContent="=";
    }
    if (callback==='÷'&&display.textContent==='0') {
        display.textContent="invalid operation";
        return;
    }
    else{
        opDisplay.textContent=callback;
    };
    display.textContent=roundResult(operate(firstOperand,secondOperand,callback));
    callback=null;
}
//determines the callback function to be performed on the inputs
  function operate(x, y, callback) {
    x = Number(x)
    y = Number(y)
    if(callback === '+') {
        return add(x, y);
    } else if(callback === '−') {
        return subtract(x,y);
    } else if(callback === '×') {
        return multiply(x,y);
    } else if(callback === '÷') {
        if(y === 0) {
            return 'lmao';
        } else {
        return divide(x,y);
        }
    }
}

function add(a, b) {
    return a + b
  }
  
  function subtract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }

//deletes last digit each click 
  function deleteNum(){
    display.textContent=display.textContent.slice(0,-1);
}
//resets the display when needed (After first operand has been inputted)
 function resetDisplay(){
    opDisplay.textContent='';
    display.textContent='';
    shouldResetDisplay=false;
 } 
//adds decimal point to value on display
 function addDecimal() {
    display.textContent+='.';
    decButton.disabled=true;
}
//resets all values wen CLEAR is clicked
 function reset(){
    opDisplay.textContent='';
    display.textContent='0';
    callback=null;
    firstOperand=null;
    secondOperand=null;
    decButton.disabled=false;
}
//rounds the results to the millionth decimal (6 places)
function roundResult(number) {
    return Math.round(number * 1000000) / 1000000;
  }

//allows for highlighting of the numbers and operators that are being keyed
function highlight(e){
    const el = document.querySelector(`button[data-key="${e.keyCode}"]`);
    const original = el.style.backgroundColor;
    if(!el) return;
    el.style.backgroundColor='rgb(169, 238, 255)';
    setTimeout(function() { el.style.backgroundColor = original; }, 100);
}

document.addEventListener('keydown', function (e) {   
        highlight(e);
    });

//assigns click functions to keydown events
function clickToKey(e) {
console.log(e);
    if((e.keyCode==="+")||(e.key==="-")||(e.key==="*")||(e.key==="/")){
        selectOp(convertOperator(e.key));
    }
    if(e.key==="Enter"){evaluate();
    }
    if(e.key>=0&&e.key<=9){numInput(e.key);
    }
    if(e.key==='.'){addDecimal();}
    if(e.key==="Backspace"){deleteNum();}
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator==='/') return '÷'
    if (keyboardOperator==='*') return '×'
    if (keyboardOperator==='-') return '−'
    if (keyboardOperator==='+') return '+'
  }
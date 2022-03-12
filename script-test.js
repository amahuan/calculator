var displayValue;
var firstOperand;
var secondOperand;
var currentResult;
var num1string='';
var num2string='';
var callback;
var opFunc;


const display=document.getElementById('calculation');
const opDisplay=document.querySelector('#operations');
const numButtons=document.querySelectorAll('.number');
const delButton=document.querySelector('.delete');
const decButton=document.querySelector('.decimal');
const opButtons=document.querySelectorAll('.operator');
const equalsButton=document.getElementById('enter');
const clearButton=document.getElementById('clear');

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', numInput);
});

delButton.addEventListener('click', (e)=> {
    numstring=numstring.slice(0,-1);
    display.textContent=numstring;
});

decButton.addEventListener('click', (e)=> {
    
    decButton.disabled=true;
});
//need to append decimal

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => selectOp(opButton.value));
 });
   
equalsButton.addEventListener('click', evaluate);

clearButton.addEventListener('click', reset);

function reset(){
        opDisplay.textContent='';
        display.textContent='';
        numArray=[];
        callback='';
        console.log(numArray);
        num1string;
        num1;
        num2;
        decButton.disabled=false;
}

function evaluate(){
    if(callback){       
        secondOperand=num2string;    
        opDisplay.textContent="=";
        currentResult=operate(firstOperand,secondOperand,callback);
        display.textContent=currentResult;
        firstOperand=currentResult;
    }
}
//     displayValue=callback(number1,number2);
//     display.textContent=displayValue.substring(0,10);
//     numArray.unshift(displayValue);
//     numArray=[numArray.shift()];
//     // numArray.pop();
//     // numArray.pop();
//     // numArray.pop();
//     numstring=String(numArray[0]);
//     num2=0;
//     decButton.disabled=false;
// }

// function operate(firstOperand,callback,secondOperand){
//     displayValue=callback(firstOperand,secondOperand);
//     display.textContent=displayValue;
//     currentResult=displayValue;
    
//     return displayValue;
// }

//when ENTER is clicked, operation is performed on the number inputs
//the value displayed is the result, which also becomes stored as the 1st element in the array, becoming num1
//num1string is set to be equal to the 1st element, as a string
//num2string is cleared for the next number input


// function operate(a, b, callback) {
//     a = Number(a)
//     b = Number(b)


//     switch (callback) {
//       case '+':
//         return add(a, b)
//       case '−':
//         return substract(a, b)
//       case '×':
//         return multiply(a, b)
//       case '÷':
//         if (b === 0) return null
//         else return divide(a, b)
//       default:
//         return null
//     }
//   }

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


// function operate(operator, a, b) {
//     a = Number(a)
//     b = Number(b)
//     switch (operator) {
//       case '+':
//         return add(a, b)
//       case '−':
//         return substract(a, b)
//       case '×':
//         return multiply(a, b)
//       case '÷':
//         if (b === 0) return null
//         else return divide(a, b)
//       default:
//         return null
//     }
// }

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



//when a number button is clicked, it creates a string of numbers and is displayed on the screen
//if the number entered is the first number (indicated by array[0]===undefined, it will be stored as num1. 
//Otherwise, if there already is a num1 from a prior calculation, the new number is stored as num2. num1 is assigned the value stored in the first element of the array

var isClicked=false;
function numInput(e){
    if(firstOperand===undefined||firstOperand===0||firstOperand==="0"){
        num1string+=this.value;
        display.textContent=num1string;
        // firstOperand=num1string;
        console.log(`num1string: ${num1string}`);
    }
    else{
        num2string+=this.value;
        display.textContent=num2string;
        // num2=numArray[1];
        console.log(`num2string: ${num2string}`);
    }
  if(this==="."){
      console.log('hello');
      isClicked=true;
    }
  }  




//when the operator button is clicked, it changes the opDisplay to reflect the operation being performed. It also assigns the corresponding function as the callback to be called
//it also assigns numArray[0] the num1string input as a number
    //if there is already a previous value for num1string from the previous calculation, numArray[0] is assigned that

 
 function selectOp(perfOp) {
        // console.log(button.textContent);
        // if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
    if(callback===undefined||callback===null){
            // firstOperand=numstring;
            firstOperand=num1string;
            // currentResult=firstOperand
            opDisplay.textContent=perfOp;
            callback=perfOp;
            num1string='';
            decButton.disabled=false;
    }
    else {
            secondOperand=Number(num2string);
            opDisplay.textContent=perfOp;
            callback=perfOp;
            display.textContent=currentResult;
            num2string='';
            decButton.disabled=false;
            console.log(`num1string: ${num1string}`);
            console.log(`firstOperand=${firstOperand}`);
            console.log(`currentResult=${currentResult}`);
            console.log(`secondOperand=${secondOperand}`);
        }
    
      

        console.log(firstOperand);
        console.log(secondOperand);
//when ENTER is clicked, numArray[1] is assigned num2string as a number, and num2 is assigned the 2nd element in the array
//operate function is called with num1 and num2 are parameters and the operator function
    if(this.textContent==="ENTER"){
        // numArray.push(Number(secondOperand));
        // num2=numArray[2];
        opDisplay.textContent="=";
        operate(firstOperand,callback,secondOperand);
    }
//when the CLEAR button is clicked, all variables are cleared and displays are cleared as well.

}


// const enterButton=document.querySelector('#Enter');
//     enterButton.addEventListener('click', function (e) {
//         // console.log(button.textContent);
//         // if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
//         operate(num1,callback,num2);
//     });   
            


        //     if(num1===undefined){
        //         num1=Number(button.textContent);
        //     }
        //     else{
        //         num2=Number(button.textContent);
        //  }
    
        // if(e.key==="+"){
        //     callback=add;
        //     num1=0;
        // }
        // else if(e.key==="-"){
        //     operate(num1,subtract,num2);
        //     num1=0;
        // }
        // else if(e.key==="*"){
        //     callback=multiply;
        //     num1=0;
        // }
        // else if (e.key==="/"){
        //     callback=divide;
        //     num1=0;
        // }    
        // if(e.key!=="Enter"){
        //     operate(num1,callback,num2);
        // }

// })

// document.addEventListener('keydown', function (e) {
//     if((e.key==="0")||(e.key==="1")||(e.key==="2")||(e.key==="3")||(e.key==="4")||(e.key==="5")||(e.key==="6")||(e.key==="7")||(e.key==="8")||(e.key==="9")||(e.key==="+")||(e.key==="-")||(e.key==="*")||(e.key==="/")||(e.key===".")||(e.key==="Backspace")||(e.key==="Enter")){
//         console.log(e);
//         num1=e.key;
//         highlight(e);
//     }
// });

function highlight(e){
    var el = document.getElementById(`${e.key}`);
    var original = el.style.backgroundColor;
    el.style.backgroundColor='rgb(169, 238, 255)';
    setTimeout(function() { el.style.backgroundColor = original; }, 100);
}

// function inputs(e){
//     if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
//         if(num1===null){
//             num1=e.key;
//         }
//         else{
//             num2=e.key;
//         }
//     if(e.key==="+"){
//         callback=add;
//         num1=0;
//     }
//     else if(e.key==="-"){
//         callback=subtract;
//         num1=0;
//     }
//     else if(e.key==="*"){
//         callback=multiply;
//         num1=0;
//     }
//     else if (e.key==="/"){
//         callback=divide;
//         num1=0;
//     }    
//     if(e.key!=="Enter"){
//         operate(num1,callback,num2);
//     }
// }
// }


// function numbers(e){
//     if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
//         if(num1===undefined){
//             num1=Number(e.key);
//         }
//         else{
//             num2=Number(e.key);
//         }    
//     }
// }

// function operator(e){
//         if(e.key==="+"){
//             callback=add;
//         }
//         else if(e.key==="-"){
//             operate(num1,subtract,num2);
//         }
//         else if(e.key==="*"){
//             callback=multiply;
//         }
//         else if (e.key==="/"){
//             callback=divide;
//         }      
//     }

// [num1,function,num2]

// array.reduce(callback(num1,num2))


//enter number
    //if array is empty -> num1 (array[0])
//enter operation 
    //saves num1 as array element 0
    //stores callback based on sign as array element 1
        //if array isn't empty, stores as array element 2, then assigns to num2
//either hit enter
    //performs calculation, updates display, removes elements from array other than result which will be used as num1 in next calculation
//or hit operation to continue with calculation
    //push to array (array1)
    //updates display with current total
        //enter num which will be stored as num2/array[2]
    
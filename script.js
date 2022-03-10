var displayValue;
var numArray=[];
var num1;
var num2;
var num1string='';
var num2string='';
var callback;
var display=document.getElementById('calculation');
var opDisplay=document.getElementById('operations');


//when ENTER is clicked, operation is performed on the number inputs
//the value displayed is the result, which also becomes stored as the 1st element in the array, becoming num1
//num1string is set to be equal to the 1st element, as a string
//num2string is cleared for the next number input
function operate(number1,callback,number2){
    displayValue=callback(number1,number2);
    display.textContent=displayValue;
    numArray[0]=displayValue;
    num1string=String(numArray[0]);
    num2string='';
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
//when a number button is clicked, it creates a string of numbers and is displayed on the screen
//if the number entered is the first number (indicated by array[0]===undefined, it will be stored as num1. 
//Otherwise, if there already is a num1 from a prior calculation, the new number is stored as num2. num1 is assigned the value stored in the first element of the array
const numButtons=document.querySelectorAll('.number');
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', numInput)
});

function numInput(e){
    if(numArray[0]===undefined){
        num1string+=this.textContent;
        display.textContent=num1string;
        console.log(`num1string: ${num1string}`);
    }
    else{
        num2string+=this.textContent;
        display.textContent=num2string;
        // num2=numArray[1];
        num1=numArray[0];
        console.log(`num2string: ${num2string}`);
    }
}

//when the operator button is clicked, it changes the opDisplay to reflect the operation being performed. It also assigns the corresponding function as the callback to be called
//it also assigns numArray[0] the num1string input as a number
    //if there is already a previous value for num1string from the previous calculation, numArray[0] is assigned that
const opButtons=document.querySelectorAll('.operator');
opButtons.forEach((opButton) => {
    opButton.addEventListener('click', selectOp)
 });
 
 function selectOp(e) {
        // console.log(button.textContent);
        // if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
        numArray[0]=Number(num1string);
        if(this.textContent==="+"){
            opDisplay.textContent="+";
            callback=add;
        }
        else if(this.textContent==="-"){
            opDisplay.textContent="-";
            callback=subtract;
        }
        else if(this.textContent==="×"){
            opDisplay.textContent="×";
            callback=multiply;
        }
        else if (this.textContent==="÷"){
            opDisplay.textContent="÷";
            callback=divide;
        }     
        
        // num2=numArray[1]; 
        console.log(num1);
        console.log(num2);
//when ENTER is clicked, numArray[1] is assigned num2string as a number, and num2 is assigned the 2nd element in the array
//operate function is called with num1 and num2 are parameters and the operator function
    if(this.textContent==="ENTER"){
        numArray[1]=Number(num2string);
        num2=numArray[1];
        opDisplay.textContent="=";
        operate(num1,callback,num2);
    }
//when the CLEAR button is clicked, all variables are cleared and displays are cleared as well.
    if(this.textContent==="CLEAR"){
        opDisplay.textContent='';
        display.textContent='';
        numArray=[];
        callback='';
        console.log(numArray);
        num2string='';
        num1string='';
    }
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

document.addEventListener('keydown', function (e) {
    if((e.key==="0")||(e.key==="1")||(e.key==="2")||(e.key==="3")||(e.key==="4")||(e.key==="5")||(e.key==="6")||(e.key==="7")||(e.key==="8")||(e.key==="9")||(e.key==="+")||(e.key==="-")||(e.key==="*")||(e.key==="/")||(e.key===".")||(e.key==="Backspace")||(e.key==="Enter")){
        console.log(e);
        num1=e.key;
        highlight(e);
    }
});

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

function operator(e){
        if(e.key==="+"){
            callback=add;
        }
        else if(e.key==="-"){
            operate(num1,subtract,num2);
        }
        else if(e.key==="*"){
            callback=multiply;
        }
        else if (e.key==="/"){
            callback=divide;
        }      
    }

// [num1,function,num2]

// array.reduce(callback(num1,num2))
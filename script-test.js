var displayValue;
var numArray=[];
var num1;
var num2;
var num1string='';
var num2string='';
var numstring='';
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
    numArray.unshift(displayValue);
    numArray=[numArray.shift()];
    // numArray.pop();
    // numArray.pop();
    // numArray.pop();
    numstring=String(numArray[0]);
    num2=0;
    decButton.disabled=false;
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
    return Number((num1/num2).toFixed(15));
}
//when a number button is clicked, it creates a string of numbers and is displayed on the screen
//if the number entered is the first number (indicated by array[0]===undefined, it will be stored as num1. 
//Otherwise, if there already is a num1 from a prior calculation, the new number is stored as num2. num1 is assigned the value stored in the first element of the array
const numButtons=document.querySelectorAll('.number');
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', numInput)
});
var isClicked=false;
function numInput(e){
    if(numArray[0]===undefined){
        numstring+=this.textContent;
        display.textContent=numstring;
        num1=numstring;
        console.log(`num1string: ${numstring}`);
        console.log(e.target);
    }
    else{
        numstring+=this.textContent;
        display.textContent=numstring;
        num2=numstring;
        // num2=numArray[1];
        num1=numArray[0];
        console.log(`num2string: ${numstring}`);
    }
  if(this==="."){
      console.log('hello');
      isClicked=true;
    }
  }  


const delButton=document.querySelector('.delete');
delButton.addEventListener('click', (e)=> {
    numstring=numstring.slice(0,-1)
    display.textContent=numstring;
});

const decButton=document.querySelector('.decimal');
decButton.addEventListener('click', (e)=> {
    decButton.disabled=true;
});
   

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
    if(!numArray[0]){
        if(this.textContent==="+"){
            numArray.push(Number(num1));
            opDisplay.textContent="+";
            callback=add;
            numArray.push(callback);
            numstring='';
            decButton.disabled=false;
        }
        else if(this.textContent==="-"){
            numArray.push(Number(num1));
            opDisplay.textContent="-";
            callback=subtract;
            numArray.push(callback);
            numstring='';
            decButton.disabled=false;
        }
        else if(this.textContent==="??"){
            numArray.push(Number(num1));
            opDisplay.textContent="??";
            callback=multiply;
            numArray.push(callback);
            numstring='';
            decButton.disabled=false;
        }
        else if (this.textContent==="??"){
            opDisplay.textContent="??";
            numArray.push(Number(num1));
            callback=divide;
            numArray.push(callback);
            numstring='';
            decButton.disabled=false;
        }   
    }
    else if(numArray[0]){
        if(this.textContent==="+"){
            numArray.push(Number(num2));
            opDisplay.textContent="+";
            callback=add;
            numArray.push(callback);
            numArray[0]=callback(numArray[0],numArray[numArray.length-2]);
            display.textContent=numArray[0];
            numstring='';
            numArray.splice(1,numArray.length-2);
            decButton.disabled=false;
        }
        else if(this.textContent==="-"){
            numArray.push(Number(num2));
            opDisplay.textContent="-";
            callback=subtract;
            numArray.push(callback);
            numArray[0]=callback(numArray[0],numArray[numArray.length-2]);
            display.textContent=numArray[0];
            numstring='';
            numArray.splice(1,numArray.length-2);
            decButton.disabled=false;
        }
        else if(this.textContent==="??"){
            numArray.push(Number(num2));
            opDisplay.textContent="??";
            callback=multiply;
            numArray.push(callback);
            numArray[0]=callback(numArray[0],numArray[numArray.length-2]);
            display.textContent=numArray[0];
            numstring='';
            numArray.splice(1,numArray.length-2);
            decButton.disabled=false;
        }
        else if (this.textContent==="??"){
            numArray.push(Number(num2));
            opDisplay.textContent="??";
            callback=divide;
            numArray.push(callback);
            numArray[0]=callback(numArray[0],numArray[numArray.length-2]);
            display.textContent=numArray[0];
            numstring='';
            numArray.splice(1,numArray.length-2);
            decButton.disabled=false;
        }
    }  

        console.log(num1);
        console.log(num2);
//when ENTER is clicked, numArray[1] is assigned num2string as a number, and num2 is assigned the 2nd element in the array
//operate function is called with num1 and num2 are parameters and the operator function
    if(this.textContent==="ENTER"){
        console.log('hi');
        numArray.push(Number(num2));
        num2=numArray[2];
        opDisplay.textContent="=";
        operate(numArray[0],numArray[1],numArray[2]);
    }
//when the CLEAR button is clicked, all variables are cleared and displays are cleared as well.
    if(this.textContent==="CLEAR"){
        opDisplay.textContent='';
        display.textContent='';
        numArray=[];
        callback='';
        console.log(numArray);
        numstring='';
        decButton.disabled=false;
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
    
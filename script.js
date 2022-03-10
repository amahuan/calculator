var displayValue;
var numArray=[];
var num1;
var num2;
var callback;
var display=document.getElementById('calculation');
var opDisplay=document.getElementById('operations');

//enter/click a number --> num1
//select operation (clicking button or pressing key invokes specific function)
//enter/click second number --> num2
//result is displayValue
//if additional operation performed, displayValue is stored as num1
    
function operate(num1,callback,num2){
    displayValue=callback(num1,num2);
    display.textContent=displayValue;
    numArray[0]=displayValue;
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

const numButtons=document.querySelectorAll('.number');
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', numInput)
});

function numInput(e){
    if(numArray[0]===undefined){
        numArray[0]=Number(this.textContent);
        display.textContent=numArray[0];
    }
    else{
        numArray[1]=Number(this.textContent);
        display.textContent=numArray[1];
    }
    // console.log(`num1: ${numArray[0]}`);
    // console.log(`num2: ${numArray[1]}`);
    // console.log(`displayValue: ${displayValue}`);
    // console.log(`num1: ${num1}`);
    // console.log(`num2: ${num2}`);
    // console.log(numArray);
}



//         if(typeof num1!=='number'){
//             num1=Number(numButton.textContent);
//             display.textContent=num1;
//         }
//         else{
//             num1=displayValue;
//             num2=Number(numButton.textContent);
//             display.textContent=num2;
//         }
//         console.log(`num1: ${num1}`);
//         console.log(`num2: ${num2}`);
//         console.log(typeof num1);
//     });
//     console.log(`displayValue: ${displayValue}`);
//     console.log(`num1: ${num1}`);
// })

const opButtons=document.querySelectorAll('.operator');
opButtons.forEach((opButton) => {
    opButton.addEventListener('click', selectOp)
 });
 
 function selectOp(e) {
        // console.log(button.textContent);
        // if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
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
        num1=numArray[0];
        num2=numArray[1]; 
        console.log(num1);
        console.log(num2);
    if(this.textContent==="ENTER"){
        opDisplay.textContent="=";
        operate(numArray[0],callback,numArray[1]);
    }
    if(this.textContent==="CLEAR"){
        opDisplay.textContent='';
        display.textContent='';
        numArray=[];
        callback='';
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
var displayValue;
var num1;
var num2;
var callback;
var temp;
// input(num1);
var display=document.getElementById('calculation');
// display.textContent=num1;
var opDisplay=document.getElementById('operations');

//enter/click a number --> num1
//select operation (clicking button or pressing key invokes specific function)
//enter/click second number --> num2
//result is displayValue
//if additional operation performed, displayValue is stored as num1
    




function operate(num1,callback,num2){
    displayValue=callback(num1,num2);
    display.textContent=displayValue;
    num1=displayValue;
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
    numButton.addEventListener('click', function (e) {
        // console.log(button.textContent);
        // if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
        if(num1===undefined){
            num1=Number(numButton.textContent);
            display.textContent=num1;
        }
        else{
            num2=Number(numButton.textContent);
            display.textContent=num2;
        }
        console.log(num1);
        console.log(num2);
        console.log(displayValue);
        //num1 = 1, num2=2, temp=3, display=3, num1=3, num2=3, display=6

    });

})

const opButtons=document.querySelectorAll('.operator');
opButtons.forEach((opButton) => {
    opButton.addEventListener('click', function (e) {
        // console.log(button.textContent);
        // if((e.key!=="+")||(e.key!=="-")||(e.key!=="*")||(e.key!=="/")||(e.key!==".")||(e.key!=="Backspace")||(e.key!=="Enter")){
        if(opButton.textContent==="+"){
            opDisplay.textContent="+";
            callback=add;
        }
        else if(opButton.textContent==="-"){
            opDisplay.textContent="-";
            callback=subtract;
        }
        else if(opButton.textContent==="×"){
            opDisplay.textContent="×";
            callback=multiply;
        }
        else if (opButton.textContent==="÷"){
            opDisplay.textContent="÷";
            callback=divide;
        }      
    if(opButton.textContent==="ENTER"){
        opDisplay.textContent="=";
        operate(num1,callback,num2);
    }
    });   
            
});

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
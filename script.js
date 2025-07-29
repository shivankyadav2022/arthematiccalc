// define add function 
function add(a,b){
    let sum = a+b;
    return sum;
}

//define subtract function 
function subtract(a,b){
    let subtract = a-b;
    return subtract;
}

//define multiple function 
function multiply(a,b){
    let multiply = a*b;
    return multiply;
}

//define divide function 
function divide(a,b){
    if(b===0)
        return "Can't Divide By Zero";
    let divide = a/b;
    return divide;
}

// operate function that takes operands and operators as parameters 
function operate (a,b,operation){
    let result=0;
    console.log("inside operate");
    switch(operation) {
        case "+":
            result =add(a,b);
            break;
        case "-":
            result=subtract(a,b);
            break;
        case "*":
            result=multiply(a,b);
            break;
        case "/":
            result=divide(a,b);
            break;
        case "=":
            
        default:
            result =0;

    }
    return result;
}

// make reset and backspace button

const resetPanel = document.querySelector("#resetPanel");
const resetButton = document.createElement("button");
const backspaceButton = document.createElement("button");

// name the buttons and assign them id name 
resetButton.textContent='Reset';
resetButton.id ='resetButton';
backspaceButton.textContent = 'Delete';
backspaceButton.id='backspaceButton';


//attach them to calc master container
resetPanel.appendChild(resetButton);
resetPanel.appendChild(backspaceButton);

//function to display button 

function createButton(displayText,idName,parent){
    const name = document.createElement("button");
    name.textContent = displayText;
    name.id = idName;
    name.className='numAndSym';
    parent.appendChild(name);
    return name;

}
//buttons on the left side panel
const numsAndSyms = document.querySelector("#numbersAndSymbols");

const sevenButton = createButton('7','sevenButton',numsAndSyms);
const eightButton = createButton('8','eightButton',numsAndSyms);
const nineButton = createButton('9','nineButton',numsAndSyms);
const addButton = createButton('+','addButton',numsAndSyms);

const fourButton = createButton('4','fourButton',numsAndSyms);
const fiveButton = createButton('5','fiveButton',numsAndSyms);
const sixButton = createButton('6','sixButton',numsAndSyms);
const minusButton = createButton('-','minusButton',numsAndSyms);

const oneButton = createButton('1','oneButton',numsAndSyms);
const twoButton = createButton('2','twoButton',numsAndSyms);
const threeButton = createButton('3','threeButton',numsAndSyms);
const decimalButton= createButton('.','decimalButton',numsAndSyms);

const multiplyButton = createButton('*','multiplyButton',numsAndSyms);
const zeroButton = createButton('0','zeroButton',numsAndSyms);
const divideButton = createButton('/','divideButton',numsAndSyms);
const equalButton = createButton('=','equalButton',numsAndSyms);

//select display container 
const calcDisplay = document.querySelector("#display");


// display calculator content
function displayValue (resultDisplay){
    calcDisplay.textContent=resultDisplay;

}
//let finalResult = operate(12233333333.33,2222222,"add")
//displayValue(finalResult);

//event listeners for buttons 

resetButton.addEventListener("click",() => {
    displayValue("");
    firstOperand="";
    secondOperand="";
});
backspaceButton.addEventListener("click",()=>{
    console.log("inside backspace")
    if(calcDisplay.textContent===firstOperand){
        firstOperand=firstOperand.slice(0,-1);
        displayValue(firstOperand);
    }
    else{
        secondOperand=secondOperand.slice(0,-1);
        displayValue(secondOperand);
    }
});


// Define operands and result variables 
let firstOperand="";
let secondOperand="";
let operationResult;
console.log(firstOperand);

// add event listener to all buttons to store values 
const allNumAndSyms = document.querySelectorAll(".numAndSym")
allNumAndSyms.forEach((bttn)=>{
    bttn.addEventListener("click",function(){
    switch (bttn.id){
        case "oneButton":
            numEventHandling("1");
            console.log(secondOperand);
            break;
        case "twoButton":
            numEventHandling("2");
            break;
        case "threeButton":
            numEventHandling("3");
            break;
        case "fourButton" :
            numEventHandling("4");
            break;
        case"fiveButton":
            numEventHandling("5");
            break;
        case "sixButton":
            numEventHandling("6");
            break;
        case "sevenButton":
            numEventHandling("7");
            break;
        case "eightButton":
            numEventHandling("8");
            break;
        case "nineButton": 
            numEventHandling("9");
            break;
        case "zeroButton":
            numEventHandling("0");
            break;
        case "addButton":
            symEventHandling("+");
            break;
        case "minusButton":
            symEventHandling("-");
            break;
        case "multiplyButton":
            symEventHandling("*");
            break;
        case "divideButton":
            symEventHandling("/");
            break;
        case "equalButton":
            symEventHandling("=");
            break;
        default:
            displayValue(0);
    };
});
});

//add event listener to buttons for results 


// function for numbers event handling 

function numEventHandling(num){
    //if last letter is symbol 
    const lastLetter = firstOperand.charAt(firstOperand.length-1);
    if(["+","-","*","/"].includes(lastLetter)){
    //start new string oin second operator 
        secondOperand=secondOperand+num;
        // add number and display 
        displayValue(secondOperand);
    }
    else{
    //else add number to last of string
        if(calcDisplay.textContent===firstOperand){
            firstOperand=firstOperand+num;
            displayValue(firstOperand);
        }

        else{
            secondOperand=secondOperand+num;
            displayValue(secondOperand);
        }
        // display the string 

    }


}
//functions for symbols event handling
function symEventHandling(sym){
    console.log("Inside sym event handler");
//if second operand is empty
if(secondOperand===""){
     //check if last letter is a symbol 
     let lastChar = firstOperand.charAt(firstOperand.length-1);
     if(lastChar==="+" || lastChar==="-" || lastChar==="*" || lastChar==="/"|| lastChar==="="){
        if (lastChar ==="="){
            firstOperand=firstOperand.slice(0,-1);
        }
        else{
            // if yes - replace the earlier symbol with the current symbol 
            if(sym !=="="){
            firstOperand = firstOperand.slice(0,-1) + sym;
            }
        }
     }
     else{
        if(sym !=="="){
        firstOperand = firstOperand+sym;}
        console.log(firstOperand);
     }
     displayValue(firstOperand);
}
       
    // if second operand is not null 
    else{
        //compute the result of earlier expression 
        let firstOperandNum = +(firstOperand.slice(0,-1));
        console.log(firstOperandNum);
        let secondOperandNum = +secondOperand;
        let operator = firstOperand[firstOperand.length-1];
        console.log(operator);
        finalResult=operate(firstOperandNum,secondOperandNum,operator);
        // display the result 
        displayValue(finalResult);
        //store the result in first operand variable 
        firstOperand = finalResult.toString();
        secondOperand ="";
        console.log("inside else of sym event handler");
        console.log(`first : ${firstOperand}`);
        console.log(`second : ${secondOperand}`);

    }
        
}
 let finalResult=0;

 //keyboard support for the calculator
document.addEventListener("keydown",(event)=>{
    switch(event.key){
        case 'Backspace':
            if(calcDisplay.textContent===firstOperand){
                firstOperand=firstOperand.slice(0,-1);
                displayValue(firstOperand); 
             }
            else{
                secondOperand=secondOperand.slice(0,-1);
                displayValue(secondOperand);
            }
            break;
        case "1":
            numEventHandling("1");
            console.log(secondOperand);
            break;
        case "2":
            numEventHandling("2");
            break;
        case "3":
            numEventHandling("3");
            break;
        case "4" :
            numEventHandling("4");
            break;
        case"5":
            numEventHandling("5");
            break;
        case "6":
            numEventHandling("6");
            break;
        case "7":
            numEventHandling("7");
            break;
        case "8":
            numEventHandling("8");
            break;
        case "9": 
            numEventHandling("9");
            break;
        case "0":
            numEventHandling("0");
            break;
        case "+":
            symEventHandling("+");
            break;
        case "-":
            symEventHandling("-");
            break;
        case "*":
            symEventHandling("*");
            break;
        case "/":
            symEventHandling("/");
            break;
        case "Enter":
            event.preventDefault();
            symEventHandling("=");
            break;
        

    }
})


    
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
    switch(operation) {
        case "add":
            result =add(a,b);
            break;
        case "sub":
            result=subtract(a,b);
            break;
        case "mul":
            result=multiply(a,b);
            break;
        case "div":
            result=divide(a,b);
            break;
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
const leftSide = document.querySelector("#leftSide");

const oneButton = createButton('1','oneButton',leftSide);
const twoButton = createButton('2','twoButton',leftSide);
const threeButton = createButton('3','threeButton',leftSide);

const fourButton = createButton('4','fourButton',leftSide);
const fiveButton = createButton('5','fiveButton',leftSide);
const sixButton = createButton('6','sixButton',leftSide);

const sevenButton = createButton('7','sevenButton',leftSide);
const eightButton = createButton('8','eightButton',leftSide);
const nineButton = createButton('9','nineButton',leftSide);

const multiplyButton = createButton('*','mutiplyButton',leftSide);
const zeroButton = createButton('0','zeroButton',leftSide);
const divideButton = createButton('/','divideButton',leftSide);

//buttons on the right side of panel 

const rightUpper = document.querySelector("#rightUpper");

const addButton = createButton('+','addButton',rightUpper);
const minusButton = createButton('-','minusBUtton',rightUpper);

// button on the right side lower part 

const rightLower = document.querySelector("#rightLower");

const equalButton = createButton('=','equalButton',rightLower);



//select display container 
const calcDisplay = document.querySelector("#display");


// display calculator content
function displayResult (resultDisplay){
    calcDisplay.textContent=resultDisplay;

}

displayResult(operate(12233333333,2222222,"add"));
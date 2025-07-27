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
    parent.appendChild(name);
    return name;

}

const numberPanel = document.querySelector("#numbersAndSymbols");

const oneButton = createButton('1','oneButton',numberPanel);
const twoButton = createButton('2','twoButton',numberPanel);
const threeButton = createButton('3','threeButton',numberPanel);
const addButton = createButton('+','addButton',numberPanel);
const fourButton = createButton('4','fourButton',numberPanel);
const fiveButton = createButton('5','fiveButton',numberPanel);
const sixButton = createButton('6','sixButton',numberPanel);
const minusButton = createButton('-','minusBUtton',numberPanel);
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

console.log(operate(1,0,"div"));
console
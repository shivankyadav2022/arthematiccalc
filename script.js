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

console.log(add(2,4));
console.log(subtract(5,8));
console.log(multiply(3,4));
console.log(divide(10,5));
console.log(divide(10,0));
//read operator
const operator = prompt("please enter operator you want to perform(+, -, *, /) ");
//read numbers in the program
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));


if(operator == '+'){
    result = num1 + num2;
}else if(operator == '-'){
    result = num1 - num2;
}else if(operator == '*'){
    result = num1 * num2;
}else  if(operator == '/'){
    result = num1 / num2;
}

alert(num1 + operator + num2+ ' = ' + result);

    
    
    
    
    
    
    
    
    
    
    
    
    
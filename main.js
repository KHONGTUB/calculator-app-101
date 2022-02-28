// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
let firstNum = null
let secondNum = null
let operation = null





// this function takes in the number you type in the input field and saves it to the "firstNum" variable
const saveFirstNumber = (num) => {
  if (firstNum === null){
    firstNum = parseInt(num) 
  } else {
    saveSecondNumber(num)
  }
   
}

// this function takes in the number you type in the 2nd input field and saves it to the "secondNum" variable
const saveSecondNumber = (num) => {
  // "parseInt" is a built in function in JS that converts a string/word into a number
  if( secondNum === null)
  {
    secondNum = parseInt(num)
  }
  else
  {
    firstNum = null
    secondNum = null
    saveFirstNumber(num)
  }
    
}


// this function takes in two argument/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

// this function takes in two argument/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const difference = numA - numB
  return difference
}

// These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:

const multiply = (numA, numB) => {
  console.log(numA, numB)
  const product = numA * numB
  return product
  // * to get a product then return it
  // Open up the inspector tool in Chrome and select the Console tab to see what this functions is "logging out" to the console.
  
}

const divide = (numA, numB) => {

  if (numB === 0){
    const quotient = "You can't divide by zero"
    console.log(quotient)
    return quotient
  }
  else{
    const quotient = numA / numB
    console.log(quotient)
    return quotient
  }

}

const modulus = (numA, numB) => {

  const remainder = numA % numB
  return remainder

}
// and % to get a remainder.

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  // Use your Chrome Inspector Tool > Console Tab to see the "operation" that's logged
  console.log(operation)
}

// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("display").innerHTML = firstNum + " " + operation + " " + secondNum  +  " = " + operationResults

  // Remember, each element has built in properties like "innerHTML" which we can change to anything we like. 
  // Here we give it a string: "Results: " and add the value of the operation to it.
}


// The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
const equals = () => {
  switch (operation) {
    case "+":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "-": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "*": putResultInElement(multiply(firstNum, secondNum))
    break;
    case "/": putResultInElement(divide(firstNum, secondNum)) 
    break;
    case "%": putResultInElement(modulus(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}
const reset = () =>{
  console.log(6)
  firstNum = " "
  operation = " "
  secondNum = 0
  document.getElementById("display").innerHTML = firstNum + " " + operation + " " + secondNum
}
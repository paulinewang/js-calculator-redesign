// Selectors
var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
var displayValElement = document.getElementById("display__numbers");
var btnNumbers = document.getElementsByClassName("btn--number");
var btnOperators = document.getElementsByClassName("btn--operator");

// Value that is being shown. The default value is 0. The eval() method will take a string and run it. Our array will hold the buttons we are clicking, and we will later convert it to a string.
var displayVal = '0';
var pendingVal;  
var evalStringArray = []; 
  
// Updating the display field. If the value is currently equal to 0, we will reset the value so that our input does not start with a 0.
function updateDisplayVal(e) {
    var btnText = e.target.innerText;
    if(displayVal === "0") { 
      displayVal = ""; 
    }

    // Append the content of the button we clicked to our displayVal variable and display it
    displayVal += btnText; 
    displayValElement.innerText = displayVal;
} 

// Perform the mathematical operations
function performOperation(e) {
  var operator = e.target.innerText;  
  
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '×':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + ''; 
            displayValElement.innerText = displayVal;
            evalStringArray = []; // clear the array
            break;
        default:
            break;
    }
}

// Event listeners for the number and operator buttons
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal) 
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation);
}

// On clicking the clear button, all values and the display are being reset 
clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

// Not allowing two decimal points in input
decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}


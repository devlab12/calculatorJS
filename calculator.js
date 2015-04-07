// =======
// Functionality block
// =======

// This keeps the object of a display block
var displayValue = document.getElementById("calcDisplay");

// This is needed to keep a previous value and an operator for calculations
var operatorType = false;
var previousValue = 0;
var currentValue = 0;

// === EVENTS HANDLING ===

// Reset button click event
document.getElementById("reset").addEventListener("click", function () {
    displayValue.innerHTML = "0";
    previousValue = 0;
});

// Backspace button event
document.getElementById("backspace").addEventListener("click", function () {
    if (displayValue.innerHTML.length > 1) {
        displayValue.innerHTML = displayValue.innerHTML.substr(0, displayValue.innerHTML.length - 1);
    } else {
        displayValue.innerHTML = "0";
    }
});

// Number mouse click event handling
document.getElementById("num1").addEventListener("click", numberClick);
document.getElementById("num2").addEventListener("click", numberClick);
document.getElementById("num3").addEventListener("click", numberClick);
document.getElementById("num4").addEventListener("click", numberClick);
document.getElementById("num5").addEventListener("click", numberClick);
document.getElementById("num6").addEventListener("click", numberClick);
document.getElementById("num7").addEventListener("click", numberClick);
document.getElementById("num8").addEventListener("click", numberClick);
document.getElementById("num9").addEventListener("click", numberClick);
document.getElementById("num0").addEventListener("click", numberClick);

// Dot mouse click event handling
document.getElementById("numDot").addEventListener("click", dotClick);

// Operator selection event handling
document.getElementById("plus").addEventListener("click", operatorClick);
document.getElementById("minus").addEventListener("click", operatorClick);
document.getElementById("multiply").addEventListener("click", operatorClick);
document.getElementById("divide").addEventListener("click", operatorClick);

// Sum operator click event handling
document.getElementById("sum").addEventListener("click", operatorSum);


// === FUNCTIONALITY IMPLEMENTATION ===

// Number click functionality implementation   
function numberClick(){  
    var currentValue = this.innerHTML;
    operatorIsDisplayed = false;
    
    if(displayValue.innerHTML == 0){
        displayValue.innerHTML = currentValue;
    }else if(displayValue.innerHTML.length == 20){
        alert('Too many symbols!');
    }else{
        //displayValue.innerHTML += currentValue;
        displayValue.innerHTML = currentValue;
    };
    
    console.log("Number - previous value is " + previousValue);
    console.log("Number - current value is " + currentValue);
    
};

// Dot click functionality implementation
function dotClick(){
    if(displayValue.innerHTML.search(",") == -1){
       displayValue.innerHTML += ",";
    };
};

// Operator click functionality implementation
function operatorClick(){
    operatorType = this.innerHTML;
    
    if (operatorType == "+"){
        previousValue += +displayValue.innerHTML;
    }else if(operatorType == "-"){
        previousValue -= +displayValue.innerHTML;
    }else if(operatorType == "/"){
        previousValue /= +displayValue.innerHTML;
    }else{
        // multiply operator goes the last to avoid the comparison with its symbol
        previousValue *= +displayValue.innerHTML;
    };
    
    // Clearing the display to collect different variables to be operated
    displayValue.innerHTML = operatorType;
    
    console.log("Operator - previous value is " + previousValue);
    console.log("Operator - current value is " + currentValue);
    
};

// Sum operator click functionality implementation
function operatorSum(){
    if (operatorType == "+"){
         displayValue.innerHTML = +displayValue.innerHTML + previousValue;
    }else if(operatorType == "-"){
        displayValue.innerHTML = +displayValue.innerHTML - previousValue;
    }else if(operatorType == "/"){
        displayValue.innerHTML = +displayValue.innerHTML / previousValue;
    }else{
        // multiply operator goes the last to avoid the comparison with its symbol
        displayValue.innerHTML = +displayValue.innerHTML * previousValue;
    };
    
    console.log("Sum - previous value is " + previousValue);
    console.log("Sum - current value is " + currentValue);
    
};

// =======
// Visualisation block
// =======

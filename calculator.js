// =======
// Functionality block
// =======

// This keeps the object of a display block
var displayScreen = document.getElementById("calcDisplay");

// This is needed to keep a previous value and an operator for calculations
var operationType = false;
var previousValue = 0;


// === EVENTS HANDLING ===

// Reset button click event
document.getElementById("reset").addEventListener("click", function () {
    displayScreen.innerHTML = "0";
    previousValue = 0;
});

// Backspace button event
document.getElementById("backspace").addEventListener("click", function () {
    if (displayScreen.innerHTML.length > 1) {
        displayScreen.innerHTML = displayScreen.innerHTML.substr(0, displayScreen.innerHTML.length - 1);
    } else {
        displayScreen.innerHTML = "0";
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
    var currentNum = this.innerHTML;

    if(displayScreen.innerHTML == 0){
        displayScreen.innerHTML = currentNum;
        return;
    }else if(displayScreen.innerHTML.length == 20){
        alert('Too many symbols!');
    }else{
        displayScreen.innerHTML += currentNum;
        return;
    };
};

// Dot click functionality implementation
function dotClick(){
    if(displayScreen.innerHTML.search(",") == -1){
       displayScreen.innerHTML += ",";
    };
};

// Operator click functionality implementation
function operatorClick(){
    operationType = this.innerHTML;
    
    if (operationType == "+"){
        previousValue += +displayScreen.innerHTML;
    }else if(operationType == "-"){
        previousValue -= +displayScreen.innerHTML;
    }else if(operationType == "/"){
        previousValue /= +displayScreen.innerHTML;
    }else{
        // multiply operator goes the last to avoid the comparison with its symbol
        previousValue *= +displayScreen.innerHTML;
    };
    
    // Clearing the display to collect different variables to be operated
    displayScreen.innerHTML = "0";
    
    console.log("previous value is " + previousValue);
    console.log(operationType);
};

// Sum operator click functionality implementation
function operatorSum(){
    if (operationType == "+"){
         displayScreen.innerHTML = +displayScreen.innerHTML + previousValue;
    }else if(operationType == "-"){
        displayScreen.innerHTML = +displayScreen.innerHTML - previousValue;
    }else if(operationType == "/"){
        displayScreen.innerHTML = +displayScreen.innerHTML / previousValue;
    }else{
        // multiply operator goes the last to avoid the comparison with its symbol
        displayScreen.innerHTML = +displayScreen.innerHTML * previousValue;
    };
    
    console.log("previous value is " + previousValue);
    console.log(operationType);
};

// =======
// Visualisation block
// =======

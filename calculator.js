// =======
// Functionality block
// =======

// This keeps the object of a display block
var displayValue = document.getElementById("calcDisplay");

// This is needed to keep a previous value and an operator for calculations
var operatorType, categoryType, globalSum;
var previousValue = 0;
var currentValue = 0;

// === EVENTS HANDLING ===

// Reset button click event
document.getElementById("reset").addEventListener("click", function () {
    displayValue.innerHTML = "0";
    previousValue = 0;
    currentValue = 0;
    categoryType = 0;
    globalSum = 0;
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
    currentValue = this.innerHTML;

    if(categoryType == "sum"){
        //previousValue = 0;
        globalSum = 0;
    };
    
    if(displayValue.innerHTML == 0){
        if(displayValue.innerHTML.indexOf(".") != -1){
            console.log(123123123);
            displayValue.innerHTML += currentValue;
        }else{
            displayValue.innerHTML = currentValue;
        }
    }else if(displayValue.innerHTML.length == 20){
        alert('Too many symbols!');
    }else{
        if(categoryType == "number"){    
            displayValue.innerHTML += currentValue;
            //previousValue = displayValue.innerHTML; 
        }else{
            //previousValue
            displayValue.innerHTML = currentValue;
        };
    };
    
    categoryType = "number";
};

// Dot click functionality implementation
function dotClick(){
    if(displayValue.innerHTML.indexOf(".") == -1){
        displayValue.innerHTML += ".";
    
        categoryType = "number";
    };
};

// Operator click functionality implementation
function operatorClick(){
    previousValue = displayValue.innerHTML; 
    
    if(operatorType){
        if (this.innerHTML == "+"){
            displayValue.innerHTML = Number(previousValue) + Number(currentValue);
        }else if(operatorType == "-"){
            
            displayValue.innerHTML = Number(previousValue) - Number(currentValue);
        }else if(operatorType == "/"){
            displayValue.innerHTML = Number(previousValue) / Number(currentValue);
        }else{
            displayValue.innerHTML = Number(previousValue) * Number(currentValue);
        };
    };
    
    operatorType = this.innerHTML;
    categoryType = "operator";
};

// Sum operator click functionality implementation
function operatorSum(){
    if (operatorType == "+"){
        globalSum = displayValue.innerHTML = Number(previousValue) + Number(currentValue);
    }else if(operatorType == "-"){
        globalSum = displayValue.innerHTML = Number(previousValue) - Number(currentValue);
    }else if(operatorType == "/"){
        globalSum = displayValue.innerHTML = Number(previousValue) / Number(currentValue);
    }else{
        globalSum = displayValue.innerHTML = Number(previousValue) * Number(currentValue);
    };
    
    
    previousValue = displayValue.innerHTML;
    currentValue = 0;
    categoryType = "sum";
};

// =======
// Visualisation block
// =======

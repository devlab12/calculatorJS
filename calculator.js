// =======
// Functionality block
// =======


var displayScreen = document.getElementById("calcDisplay");

// Reset button click event
document.getElementById("reset").addEventListener("click", function () {
    displayScreen.innerHTML = "0";
});

// Bacspace button event
document.getElementById("backspace").addEventListener("click", function () {
    if (displayScreen.innerHTML.length > 1) {
        displayScreen.innerHTML = displayScreen.innerHTML.substr(0, displayScreen.innerHTML.length - 1);
    } else {
        displayScreen.innerHTML = "0";
    }
});


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


/*
// Plus event
document.getElementById("plus").onclick = function() {
    console.log('plus event');
};

document.getElementById("minus").addEventListener("click", function() {
    console.log('minus event');
});

//document.getElementById("sum").onclick = newScript();
    
function newScript(){
    console.log('It works');
}

*/

// =======
// Visualisation block
// =======

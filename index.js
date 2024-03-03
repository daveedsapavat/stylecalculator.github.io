document.addEventListener('DOMContentLoaded',function() {
 let historyDiv = document.querySelector('.history');
 let screen = document.querySelector('.screen');
 let buttons = document.querySelectorAll('.btn');
 let history = '';

buttons.forEach(function(button){
 button.addEventListener('click', function() {
    handleButtonClick(button.innerText) ;
  });
 });

 // Buttons handle function 
 function handleButtonClick(value) {
    if (value === 'C') {
        clearAll();
    }else if(value=== 'DEL') {
        deleteLastChar();
    }else if(value=== '=') {
        evaluateExpression();
    } else {
        appendToScreen(value);
    }
 }

// clear function 
 function clearAll() {
    screen.textContent = '';
    history = '';
    updateHistory();
 }

// Delete Last Char Function 
function deleteLastChar() { 
let currentText = screen.textContent;
screen.textContent = currentText.slice(0,-1);
} 

// Append Function 
function appendToScreen(value) {
screen.textContent += value;
}

// Evaluate Function
function evaluateExpression() { 
try {
    let expression = screen.textContent;
    let result = eval(expression);

    result = parseFloat(result.toFixed(5));

    history = expression + '=' + result;
    screen.textContent = result;
    updateHistory();
}

catch {
    screen.textContent = 'Error';
}
}

// Update History Function
function updateHistory() {
    historyDiv.textContent = history
}

});
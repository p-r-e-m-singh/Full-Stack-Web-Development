var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("output");

function performplus() {
    var value1 = parseFloat(num1.value);
    var value2 = parseFloat(num2.value);
    if (isNaN(value1) || isNaN(value2)) {
        console.log("Enter valid numbers for both inputs");
        return;
    }
    result.textContent = "Result: " + (value1 + value2);
} 

function performinus() {
    var value1 = parseFloat(num1.value);
    var value2 = parseFloat(num2.value);
    if (isNaN(value1) || isNaN(value2)) {
        console.log("Enter valid numbers for both inputs");
        return;
    }
    result.textContent = "Result: " + (value1 - value2);
} 

function performmul() {
    var value1 = parseFloat(num1.value);
    var value2 = parseFloat(num2.value);
    if (isNaN(value1) || isNaN(value2)) {
        console.log("Enter valid numbers for both inputs");
        return;
    }
    result.textContent = "Result: " + (value1 * value2);
} 

function performdiv() {
    var value1 = parseFloat(num1.value);
    var value2 = parseFloat(num2.value);
    if (isNaN(value1) || isNaN(value2) || value2 === 0) {
        alert("Enter valid numbers for both inputs and ensure the second number is not zero");
        return;
    }
    result.textContent = "Result: " + (value1 / value2);
} 
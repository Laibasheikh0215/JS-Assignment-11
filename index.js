// 1. Take two numbers from the user and display their sum.
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
console.log("Sum is:", num1 + num2);

// 2. Write a program to add three numbers entered by the user.
let i = parseFloat(prompt("Enter first number:"));
let j = parseFloat(prompt("Enter second number:"));
let k = parseFloat(prompt("Enter third number:"));
console.log("Sum of three numbers:", i + j + k);

// 3. Ask the user for two numbers, add them, and show the result using alert().
let x = parseFloat(prompt("Enter first number:"));
let y = parseFloat(prompt("Enter second number:"));
alert("The sum is: " + (x + y));

// 4. Take two numbers and display their sum, difference, product, and quotient.
let number1 = parseFloat(prompt("Enter first number:"));
let number2 = parseFloat(prompt("Enter second number:"));
console.log("Sum:", number1 + number2);
console.log("Difference:", number1 - number2);
console.log("Product:", number1 * number2);
console.log("Quotient:", number1 / number2);

// 5. Take the user’s name and two numbers, then greet the user with the message and result of addition.
//     Example: "Hello Afsah, the sum of 5 and 8 is 13"
let userName = prompt("Enter your name:");
let p = parseFloat(prompt("Enter first number:"));
let q = parseFloat(prompt("Enter second number:"));
console.log(`Hello ${userName}, the sum of ${p} and ${q} is ${p + q}`);

// 6. Take two numbers as input, convert them to integers, then add them and show the result in the console.
i1 = parseInt(prompt("Enter first number:"));
let i2 = parseInt(prompt("Enter second number:"));
console.log("Sum (as integers):", i1 + i2);

// 7. Take two numbers as input using prompt(), check if both are numbers, then add them. If not, show an error message.
let val1 = prompt("Enter first number:");
let val2 = prompt("Enter second number:");
if (!isNaN(val1) && !isNaN(val2)) {
    console.log("Sum:", Number(val1) + Number(val2));
} else {
    console.log("Error: Please enter valid numbers!");
}

// 8. Create a program where the user inputs a number and the program adds 10 to it and displays the result.
let num = parseFloat(prompt("Enter a number:"));
console.log("Result after adding 10:", num + 10);

// 9. Take two numbers and display whether their sum is even or odd.
let first = parseInt(prompt("Enter first number:"));
let second = parseInt(prompt("Enter second number:"));
let total = first + second;
if (total % 2 === 0) {
    console.log(`The sum (${total}) is Even`);
} else {
    console.log(`The sum (${total}) is Odd`);
}

// 10. Create a simple calculator using prompt() that takes two numbers and an operator (+, -, , /), and performs the correct operation.
let calc1 = parseFloat(prompt("Enter first number:"));
let calc2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

if (operator === "+") {
    console.log("Result:", calc1 + calc2);
} else if (operator === "-") {
    console.log("Result:", calc1 - calc2);
} else if (operator === "*") {
    console.log("Result:", calc1 * calc2);
} else if (operator === "/") {
    console.log("Result:", calc1 / calc2);
} else {
    console.log("Invalid operator!");
}
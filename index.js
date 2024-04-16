//Q1 : Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
var _a;
var greeting = "Hello world";
console.log(greeting);
//Q2: Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
console.log("Q2.Basic Math");
var num1 = 5, num2 = 2;
console.log("Addition", num1 + num2); //Or console.log(num1+num2);
console.log("Subtraction", num1 - num2);
console.log("Multiply", num1 * num2);
console.log("Division", num1 / num2);
console.log("Power", Math.pow(num1, num2));
console.log("%", num1 % num2);
//Q3. Swapping Values
//Instructions: Swap the values of two variables without using a third variable.
console.log("Q3.Swapping Values");
var A = 5;
var B = 6;
console.log("A", A);
console.log("B", B);
_a = [B, A], A = _a[0], B = _a[1];
console.log("A", A);
console.log("B", B);
// Q4. Type Annotation (TypeScript)
// Instructions: This applies to TypeScript. Create a string variable and try changing its type.
var message; // Now try assigning a number to it and see what happens.
//message = 42;  //error: Type 'number' is not assignable to type 'string'.
/* Q5. Modulus Operator
Instructions: Use the modulus operator to find the remainder of two numbers.*/
var num1$ = 13;
var num2$ = 3; // Use the modulus operator (%) to find the remainder.
console.log("Q No 5 Ans: Remainder is:", num1$ % num2$);
// 6. Increment Challenge
// Instructions: Increment a variable's value by 1 using two different methods.
var counter = 0;
counter++; // Increment by 1
console.log("increment", counter); // Output: 1
var count = 0;
count += 1; // Increment by 1
console.log("increment", count); // Output: 1
// 7. Logical Gates
// Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
var a = true, b = false, c = true;
// AND (&&)
console.log("Q7.First I try And gate");
console.log(a && b);
console.log(b && c);
console.log(a && c);
console.log(b && b);
// OR (||)
console.log("Q7.Now I try OR gate");
console.log(a || b);
console.log(b || c);
console.log(a || c);
console.log(b || b);
// NOT (!)
console.log("Q7.Now I try Not gate");
console.log(!a);
console.log(!b);
console.log(!c);
console.log(!(a && b));
console.log(!(b && c));
console.log(!(a && c));
// 8. Compound Assignment
// Instructions: Show examples of using compound assignment operators.
console.log("Q8 compound assignment operators");
var num = 10; // Use +=, -=, *=, and /= on this variable.
num += 5; // equal to:num=num+5 //output:15
console.log(num);
num -= 10; // equal to:num=num-10//output:5
console.log(num);
num *= 4; // equal to:num=num*4 //output:20
console.log(num);
num /= 2; // equal to:num=num/2 //output:10
console.log(num);
// 9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.
var n = 5; // Determine if this is even or odd.
console.log("Q9 Check Even or Odd Number and the Number is  ", n);
var result = n % 2; //equal to: 6%2 // remainder= 0
if (result == 0) {
    console.log("Result is: EVEN");
}
else {
    console.log("Result is: Odd");
}
// 10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.
console.log("Q 10. voting eligibility");
var age = 20; // Check if age is 18 or older to determine voting eligibility.
if (age >= 18) {
    console.log("Eligible");
}
else {
    console.log("ineligible");
}
// 11. Grading System
// Instructions: Assign a grade based on a numerical score.
console.log("Q No 11 Grading System ");
var score = 450; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score <= 799 && score >= 700) {
    console.log("A");
}
else if (score <= 699 && score >= 600) {
    console.log("B");
}
else if (score <= 599 && score >= 500) {
    console.log("C");
}
else if (score <= 499 && score >= 400) {
    console.log("D");
}
else {
    console.log("F");
}
// 12. Max of Three
// Instructions: Find the maximum of three numbers.
var x = 5, y = 16, z = 7; // Determine the largest among these by using if condition
if (x >= y && x >= z) {
    console.log(x);
}
else if (y >= x && y >= z) {
    console.log(y);
}
else {
    console.log(z);
}
// 13. Leap Year Checker
// Instructions: Check if a given year is a leap year.
// let year; // Determine if this is a leap year.
var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("".concat(year, " is a leap year."));
}
else {
    console.log("".concat(year, " is not a leap year."));
}
// 14. Fahrenheit to Celsius Converter
// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
var fahrenheit = 100; // Convert this to Celsius and print the result.
var celsius = ((fahrenheit - 32) * 5) / 9;
console.log("Q14. celsius scale value is", celsius);
// 15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.
var number = 3; // Determine the sign of this number
console.log("Q15.symbol of number", number);
if (number > 0) {
    console.log("symbol is:", "Positive");
}
else if (number < 0) {
    console.log("symbol is:", "Negative");
}
else {
    console.log("Zero");
}
// 16. Multiplication Table
// Instructions: Write a program that prints the multiplication table of a given number up to 10.
// Print the multiplication table for this number up to 10.
var table = 5;
console.log("5 * 1 = ", 5 * 1);
console.log("5 * 2 = ", 5 * 2);
console.log("5 * 3 = ", 5 * 3);
console.log("5 * 4 = ", 5 * 4);
console.log("5 * 5 = ", 5 * 5);
console.log("5 * 6 = ", 5 * 6);
console.log("5 * 7 = ", 5 * 7);
console.log("5 * 8 = ", 5 * 8);
console.log("5 * 9= ", 5 * 9);
console.log("5 * 10 = ", 5 * 10);

/*

Practice Problem #1

Exercise 1: Retrieve and Add Two Code Points
Objective: Extract the Unicode code points of the first two characters of a string,
add them together, and return the result.

Instructions:
Write a program that takes a string with at least two characters.
Use charCodeAt to get the Unicode code points of the first two characters.
Add the two code points together and assign the result to a variable named sumCodePoints.
Input:
let inputString = "Hi";

Expected Output:
sumCodePoints: 177 // 'H' = 72, 'i' = 105, 72 + 105 = 177

*/

console.log("Practice Problem #1 Exercise 1:");

let inputString = ("Hi");
let codePoint01 = inputString.charCodeAt(0);
let codePoint02 = inputString.charCodeAt(1);
console.log("H = " + codePoint01 + " and i = " + codePoint02);
let sumCodePoints = codePoint01 + codePoint02;
console.log(sumCodePoints);

/*

Exercise 2: Generate a String from Two Code Points
Objective: Take two numeric Unicode code points,
convert them to characters using String.fromCharCode,
and combine them into a single string.

Instructions:
Write a program that accepts two numeric Unicode code points.
Use String.fromCharCode to convert each code point to its corresponding character.
Combine the two characters into a single string and assign it to a variable named combinedString.
Input:
let codePoint1 = 65;
let codePoint2 = 66;

Expected Output:
combinedString: "AB" // 65 = 'A', 66 = 'B', combined = "AB"

*/

console.log(`\nPractice Problem #1 Exercise 2:`);

let codePoint1 = 65;
let codePoint2 = 66;
let combinedString = String.fromCharCode(codePoint1) + String.fromCharCode(codePoint2);
console.log(combinedString);

/*

Exercise 3: Find the Character Difference
Objective: Extract the Unicode code points of two given characters from a string
and calculate the absolute difference between them.

Instructions:
Write a program that takes a string with at least two characters and two specified indices.
Use charCodeAt to find the Unicode code points of the characters at the specified indices.
Calculate the absolute difference between the two code points and assign it to a variable named codePointDifference.
Input:
let inputString = "Cat";
let index1 = 0;
let index2 = 2;

Expected Output:
codePointDifference: 16 // 'C' = 67, 't' = 116, |67 - 116| = 16

*/

console.log(`\nPractice Problem #1 Exercise 1:`);

let inputString3 = "Cat";
let index1 = 0;
let index2 = 2;

let codePointDifference = Math.abs(inputString3.charCodeAt(index1) - inputString3.charCodeAt(index2));

console.log(codePointDifference);

/*

Practice Problem #2

Objective
Practice converting characters from strings to Unicode code points
using charCodeAt and converting Unicode code points back to characters
using String.fromCharCode.

Instructions:
You will complete three tasks to explore the relationship
between characters and their Unicode code points.
Write JavaScript code to complete each task,
ensuring you assign your results to the specified variables.
Log all results to the console.

Tasks:
Task 1: Extract Code Points from Characters
Take the string "Code".
Use charCodeAt to extract the Unicode code points of the first and third characters.
Assign the results to variables named firstCodePoint and thirdCodePoint.

Task 2: Create a Word from Code Points
Use the Unicode code points 72, 101, 108, and 108 (corresponding to the characters H, e, l, and l).
Use String.fromCharCode to create the word "Hell".
Assign the result to a variable named wordFromCodePoints.

Task 3: Swap First and Last Characters
Take the string "Launch".
Extract the Unicode code points of the first and last characters using charCodeAt.
Use String.fromCharCode to swap these characters and create a new string: "hauncL".
Assign the result to a variable named swappedString.

*/

//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);
let thirdCodePoint = inputString1.charCodeAt(2);

// Task 2
let wordFromCodePoints = String.fromCharCode(72) + String.fromCharCode(101) + String.fromCharCode(108) + String.fromCharCode(108);

// Task 3
let inputString2 = "Launch";
let codeTask31 = inputString.charCodeAt(0);
console.log(codeTask31);
let codeTask32 = inputString.charCodeAt(5);
console.log(codeTask32);
let swappedString = String.fromCharCode(Number(codeTask32)) + "aunc" + String.fromCharCode(Number(codeTask31));

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});

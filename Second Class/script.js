// `
// JavaScript if condition rule:

// Value	             Result

// 0	                 false

// empty string ""	   false

// null / undefined	   false

// 10	                 true

// koi bhi non-zero number	true
// `;

//************************************************* */

// First rule with 0

// var x = 5;
// if ((x = 0)) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//*************************************************** */

// Second rule with empty string " "

// var x = 5;
// if ((x = "")) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//*************************************************** */

// Third rule with null/udefined

// var x = 5;
// if ((x = null)) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//*************************************************** */

// Fourth Rule // koi bhi non-zero number	true
// var x = 5;
// if ((x = 20)) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//Questions Section

// ****************************************************************************************************************************************

// Question 1 : For Vote program
// let age = Number(prompt("Enter your age"));
// if (isNaN(age)) {
//   console.log("Wrong Input");
// } else {
//   if (age >= 18) {
//     console.log("You are eligible");
//   } else {
//     console.log("You are not eligible");
//   }
// }

// *********************************************************
// Question 2 : Shop Discount

// let amount = Number(prompt("Enter your amount"));
// if (amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - Math.floor((amount * 5) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - Math.floor((amount * 10) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((amount * 20) / 100));
// }

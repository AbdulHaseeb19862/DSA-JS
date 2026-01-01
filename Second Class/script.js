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

// *********************************************************

// Question 3 : Bijli Bill

// let unit = Number(prompt("Enter your bijli unit"));
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }

// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }

// amount += unit * 4;

// console.log("The total amount if your electricity bill ", amount);

// *********************************************************

// Question 4 : Find PKR

// let amount = Number(prompt("Enter your amount "));
let amount = 5001;
if (amount >= 500) {
  console.log("500 notes : ", Math.floor(amount / 500));
  amount = amount % 500;
}
if (amount >= 200) {
  console.log("200 notes : ", Math.floor(amount / 200));
  amount = amount % 200;
}

if (amount >= 100) {
  console.log("100 notes : ", Math.floor(amount / 100));
  amount = amount % 100;
}

if (amount >= 50) {
  console.log("50 notes : ", Math.floor(amount / 50));
  amount = amount % 50;
}

if (amount >= 20) {
  console.log("20 notes : ", Math.floor(amount / 20));
  amount = amount % 20;
}

if (amount >= 10) {
  console.log("10 notes : ", Math.floor(amount / 10));
  amount = amount % 10;
}

if (amount >= 5) {
  console.log("5 notes : ", Math.floor(amount / 5));
  amount = amount % 5;
}

if (amount >= 2) {
  console.log("2 notes : ", Math.floor(amount / 2));
  amount = amount % 2;
}

if (amount === 1) {
  console.log("1 notes : ", amount);
}

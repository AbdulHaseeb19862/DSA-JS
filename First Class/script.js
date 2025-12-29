// Importand notes

// Rules for string

//First One  => when you concatenate two string and how can you know this is string or number then will be blue if you add them and the string colors will be white (nichi example hain )

// for numbers
// a = 10;
// let b = 10;
// console.log("for number", a + b);

// for sting strings

// d = "10";
// e = 20;
// console.log("For string out ", d + e);

// ****************************************************************************************************************************************

// second rule  => agar app ke saath string hain or print bhi kar rahi hoon, two numbers ke additon ke saath concatenate kar rahii or additon jo hoga or wo last main hoga or message first print hoga thu or ye sarat string conisder keya jain ga

// a = 10;
// b = 10;
// console.log("for number" + a + b); // the anwers will "for number 1010"
// console.log("for number" + (a + b)); // solution for addtion properly of two numbers

// agar ap ke saath phili number or phir message thu phir additon perform hoga or baad main message bhi print ho jain ga

// a = 10;
// b = 10;
// console.log(a + b + "is result"); // this is work properly and no matterss

// **************************************************************************************************************************************
//Third rule

// agar hum subtraction/ multiplication and division ect ke baath karien thu wo performe hoga khuwa eik taraf string hoon or eik number or wo perform karien ga

// console.log("10" - 20);
// console.log("2" * 2 + 2);

// ***************************************************************************************************************************************

//Swipping of two numbera

// First way
// let a = 10;
// let b = 20;

// console.log("a and b : ", a, b);

// let c;
// c = a;
// a = b;
// b = c;

// console.log("Swipped of a and b ", a, b);

//second way wit calculations

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("Swipped of a and b ", a, b);

// third way on destructuring

// [a, b] = [b, a];
// console.log("Swipped of a and b ", a, b);

// ***************************************************************************************************************************************

// or idher humari saath bahot say opertor hotey hain lekin hum discuss kar dein gein siruf or siruf divsion ko or modulus ko

// %  or ye jaab humari sath hotey hain thu ye number return karthey hain yani point main vlaue nahi or remainder return kartha hain

// console.log(7 % 2); // or iss ney remainder return kar dia 1
// console.log(15560 % 10); // or iss ney 0 return kardia
// console.log(15564 % 10); // or iss ney 4 return kar dia
// console.log(15565 % 100); // or do number return kar dein 65 ko

// or abhi humber division hain or wo float main number ko retur karthe hain or eik baath or hain or ye qouetient ko return kartha hain diher

// console.log(7 / 2); // pr ye 3... something ko return kar dein or iss say ye bhi zahir hota hain keh 7 kitni dafa divide ho chuka hain

// ****************************************************************************************************************************************

// uniary operator
// Unary operation wo hoti hai jisme sirf ek operand (value) par operation perform hota hai.

// Example :1
// let a = 10;
// let b = a++;
// console.log("The value of a now is ", a); // 11
// console.log("The value of b is now ", b); // 10

// Example : 2

// let a = ++"10"
// console.log("The value of a is",a)  //Ye error is liye aata hai kyon ke ++ operator string par direct apply nahi hota, pehle variable chahiye hota hai, is liye "10" par increment allowed nahi.

// Example : 3
// let a = ++10;
// console.log("the value of a ",a)  // Ye is liye kaam nahi karta kyon ke ++ operator sirf variables par lagta hai, direct constant/value (10) par lagana JavaScript main allowed nahi hota.

// Question 1:

// let a = 11;
// let b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a is", a);
// console.log("b is", b);
// console.log("C is", c);

// ****************************************************************************************************************************************

// Math.round()
// Rounds a number to the nearest whole number
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// Math.ceil()
// Rounds a number UP to the next whole number

// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5

// Math.floor()
// Rounds a number DOWN to the previous whole number
// Math.floor(4.9); // 4
// Math.floor(4.1); // 4

// Math.trunc()
// Removes the decimal part (no rounding)

//console.log(Math.trunc(4.9)); // 4
//console.log(Math.trunc(4.1)); // 4

// Math.pow()
// Raises a number to a power
// console.log(Math.pow(2, 3)); // 8  (2 × 2 × 2)

// Math.sqrt()
// Gives the square root of a number
// console.log(Math.sqrt(16)); // 4

// Math.cbrt()
// Gives the cube root of a number
// console.log(Math.cbrt(27)); // 3

// Math.abs()
// Returns the positive value (removes minus sign)
// console.log(Math.max(3, 7, 2)); //7

// Math.min()

// Finds the smallest number
// console.log(Math.min(3, 7, 2)); // 2

// Math.random()
// Gives a random number between 0 and 1

// console.log(Math.trunc(Math.random() * 9000 + 1000));

// toFixed()

// Limits decimal places (returns a string)

// let num = 3.14159;
// num.toFixed(2); // "3.14"

// ****************************************************************************************************************************************

// And the last we have Four Questions

// ****************************************************************************************************************************************

// Calculate area and perimeter of rectangel
// let l = 2;
// let w = 20;
// console.log("The area of perimeter of reactangle", 2 * (l * w));

// *******************************************************************
// //  Generate OTP of 4 digits
// let otp = Math.random() * 9000 + 1000;
// console.log("Four Digit OTP", Math.trunc(otp));

// *******************************************************************

// Area of triangle by heron's formula

// let a = 6;
// let b = 4;
// let c = 3;

// let s = (a + b + c) / 2;
// console.log("S", s);

// let result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log("Area of trianlge by heron's formula is ", Math.trunc(result));

// *******************************************************************

// Circumference of circle
let r = 5;
console.log("The circuference of circle is ", Math.trunc(2 * Math.PI * r));

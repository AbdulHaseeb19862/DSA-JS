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

console.log(7 / 2); // pr ye 3... something ko return kar dein or iss say ye bhi zahir hota hain keh 7 kitni dafa divide ho chuka hain

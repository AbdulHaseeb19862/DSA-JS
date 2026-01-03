// while loop
// let pro = prompt("Enter propt here");
// while (pro !== "exit") {
//   pro = prompt("Enter propt here");
// }

// breek and continue

// sum of digit

// let pro = prompt("Enter a number");
// if (pro === null && pro.trim() === "") {
//   console.log("Cancelled");
// } else {
//   let n = Number(pro);

//   if (n > 0) {
//     let sum = 0;
//     while (n > 0) {
//       var rem = n % 10;
//       sum = sum + rem;
//       n = Math.floor(n / 10);
//     }
//     console.log(sum);
//   } else {
//     console.log("Number should be greater than 0 and not equal to zero");
//   }
// }

// Reverse Number

// let pro = prompt("Enter a number");
// if (pro === null && pro.trim() === "") {
//   console.log("Cancelled");
// } else {
//   let n = Number(pro);

//   if (n > 0) {
//     var rev = 0;
//     while (n > 0) {
//       var rem = n % 10;
//       rev = rev * 10 + rem;
//       n = Math.floor(n / 10);
//     }
//     console.log(rev);
//   } else {
//     console.log("Number should be greater than 0 and not equal to zero");
//   }
// }

// Find Strong Number

// let pro = prompt("Enter a number");
// if (pro === null && pro.trim() === "") {
//   console.log("Cancelled");
// } else {
//   let n = Number(pro);

//   if (n > 0) {
//     let sum = 0;
//     let copy = n;
//     while (n > 0) {
//       var rem = n % 10;
//       var fact = 1;
//       for (let i = 1; i <= rem; i++) {
//         fact = fact * i;
//       }
//       sum = sum + fact;
//       n = Math.floor(n / 10);
//     }
//     if (sum === copy) {
//       console.log("A Strong Number");
//     } else {
//       console.log("Not a Strong Number");
//     }
//   } else {
//     console.log("Number should be greater than 0 and not equal to zero");
//   }
// }

//Find prime numbers

// without function
// let pro = prompt("Enter a number");
// if (pro === null && pro.trim() === "") {
//   console.log("Cancelled");
// } else {
//   let n = Number(pro);
//   // let prime = true;
//   if (n > 0) {
//     // With loop
//     for (let i = 2; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         prime = false;
//       }
//     }

//     console.log(prime);
//   } else {
//     console.log("Number should be greater than 0 and not equal to zero");
//   }
// }

// *****************************************************

// with function

// let pro = prompt("Enter a number");
// if (pro === null && pro.trim() === "") {
//   console.log("Cancelled");
// } else {
//   let n = Number(pro);

//   if (n > 0) {
//     console.log(primeNumber(n));
//   } else {
//     console.log("Number should be greater than 0 and not equal to zero");
//   }
// }

// function primeNumber(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

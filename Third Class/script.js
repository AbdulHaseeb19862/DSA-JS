// Here we will discuss for loop, while loop, do while loop

// Questions 1: Find n of  sum of natural numbers

// let input = prompt("Enter number here");

// if (input === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(input);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else if (n > 0) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum = sum + i;
//     }
//     console.log("The sum of natural numbers is ", sum);
//   } else {
//     console.log("The number should be positive and not zero");
//   }
// }

// Questions 2: Find n of natural number of factorials

let input = prompt("Enter number here");

if (input === null) {
  console.log("Prompt cancelled....");
} else {
  let n = Number(input);
  if (isNaN(n)) {
    console.log("Wrong Input");
  } else if (n > 0) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    console.log("Factorial is", fact);
  } else {
    console.log("Input should be positive and not zero");
  }
}

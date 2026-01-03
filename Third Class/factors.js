// Find Factors of number

let pro = prompt("Enter a number");
if (pro === null && pro.trim() === "") {
  console.log("Cancelled");
} else {
  let n = Number(pro);
  if (n > 0) {
    for (let i = 1; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        console.log(n, "Factor", i);
      }
    }
    console.log(n, "Itself");
  } else {
    console.log("Number should be greater than 0 and not equal to zero");
  }
}

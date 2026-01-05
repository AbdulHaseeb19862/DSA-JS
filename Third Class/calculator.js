let run = true;
while (run) {
  let a = Number(prompt("Enter value for a"));
  let b = Number(prompt("Enter value for b"));

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter only numbers");
    continue;
  }
  let result;
  let pro = prompt(`Enter a opertor : +, - , * and /`);
  if (pro === "+") {
    result = a + b;
  } else if (pro === "-") {
    result = a - b;
  } else if (pro === "*") {
    result = a * b;
  } else if (pro === "/") {
    result = a / b;
  } else {
    alert("Invalid Operator");
    continue;
  }
  alert("The result is" + result);

  let again = prompt("Type Yes to continue, no to stop");
  if (again !== "yes") {
    run = false;
  }
}

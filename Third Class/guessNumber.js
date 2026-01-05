let random = Math.floor(Math.random() * 100 + 1);

var guess = -1;
while (guess !== random) {
  guess = Number(prompt("Enter your guess number"));
  if (isNaN(guess) || guess > 100 || guess <= 0) {
    alert("The Number should be 1 to 100");
    continue;
  }

  if (guess > random) {
    alert("the number is to high");
  } else if (guess < random) {
    alert("the number is too low");
  } else {
    console.log("The number is ok now");
  }
}

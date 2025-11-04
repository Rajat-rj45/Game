const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const a = Math.floor(Math.random() * 100); // random number 0–99
let count = 1;

console.log("Guess the number between 0 and 100!");

function ask() {
  rl.question("Enter your guess: ", (input) => {
    const b = parseInt(input);

    if (isNaN(b)) {
      console.log("Please enter a valid number!");
      return ask();
    }

    if (a === b) {
      console.log("🎉 You won!");
      console.log("Total tries = " + count);
      rl.close();
    } else if (a > b) {
      console.log("Guess a bigger number");
      console.log("Try again!");
      count++;
      ask();
    } else if (a < b) {
      console.log("Guess a smaller number");
      console.log("Try again!");
      count++;
      ask();
    }
  });
}

ask();

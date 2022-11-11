var prompt = require("prompt-sync")();

function validatePalin(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

const string = prompt("Enter a string or number: ");

const value = validatePalin(string);

console.log(value);

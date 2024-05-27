/*
FizzBuzz

Write a programme that prints out, using the console.log function, all numbers from 1 to 100 with two exceptions. Instead of numbers divisible by 3 print the word Fizz, and instead of numbers divisible by 5 print the word Buzz.
Once you have managed to write such a program, change it so that it prints the word FizzBuzz instead of numbers divisible by both 3 and 5 (and still prints the words Fizz and Buzz for numbers divisible by only one of them).
(This is a task used in job interviews for programmers by which a large percentage of candidates are reportedly dropped. So if you managed to solve it, you have reason to be happy).
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else {
    if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

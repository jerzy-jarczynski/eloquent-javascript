/*
CHECKERBOARD

Write a program that creates a string representing an 8 X 8 grid of elements, using new line characters to separate the individual lines. There can be either a space or a # character at each grid position. These characters should form a chessboard.
Passing this string to the console.log function should produce a result similar to the following:

# # # # 
 # # # #
# # # # 
 # # # #
# # # #
 # # # #
# # # #
 # # # #

 Once you have created a program that generates such a pattern, define the constraint size = 8 and modify the program so that for any value of this constraint it prints a board of the specified dimensions. 
*/

let size = 8;
let row = '';
for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < size; j++) {
      if (j % 2 === 0) row += '#';
      else row += ' ';
    }
    console.log(row);
    row = '';
  } else {
    for (let j = 0; j < size; j++) {
      if (j % 2 === 0) row += ' ';
      else row += '#';
    }
    console.log(row);
    row = '';
  }
}

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

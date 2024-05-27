# II
## Program structure

### Expressions and instructions

**expression** - a piece of code that produces some value

> expressions can be nested in a similar way to how sentences are nested in natural language.

**instruction** - comparing a phrase to part of a sentence, the instruction will be the whole sentence. A program is a list of instructions.

The simplest instruction is an expression ended with a semicolon:

```js
1;
!false;
```

**side effects** - effects of executing instructions that are visible in the surrounding world:
display on the screen, change in the internal state of the machine that affect the operation of further instructions, etc.

> In some cases it is permissible to omit a semicolon at the end of an instruction, but due to the complexity of the rules, care must be taken not to make a mistake when doing so.

### Bindings

**bindings** or **variables** - JavaScript constructs that are used to store values.

```js
let saved = 5 * 5
```

> The *keyword* `let` denotes the definition of a binding.
> The `let` is followed by the name of the binding and optionally the operator `=` with an expression,
> which is used to assign a value.

The name of the defined binding can be used as an expression.

```js
let ten = 10;
console.log(ten * ten);
// --> 100
```

The operator `=` can be used to change the value indicated by a binding.

```js
let mood = "light";
console.log(mood);
// --> light
mood = "dark";
console.log(mood);
// --> dark
```

Bindings are better imagined as tentacles, not boxes.
Bindings do not contain values, but connect to them.
Two bindings can refer to the same value.

```js
let LudwigsDebt = 140;
LudwigsDebt = LudwigsDebt - 35;
console.log(LudwigsDebt);
// --> 105
```

Attempting to check the value of a binding that has not been assigned a value will end up with and `undefined` result.

Multiple bindings separated by commas can be defined in a single let instruction.

```js
let one = 1, two = 2;
console.log(one + two);
// --> 3
```

Alternativelt, bindings can be created using the `var` and `const` keywords.

```js
var name = "Anna";
const greeting = "Welcome, ";
console.log(greeting + name);
// --> Welcome, Anna
```

`var` is how bindings were declared in pre-2015 JavaScript.
Using `var` can lead to confusion (better to use `let`, the differences are minor).

`const` defines a permanent bond (one value throughout its existence). It is used to name values.

### Binding names

The name of the binding may:
- be any word
- include numbers (but not on the beginning)
- include `$` or `_` sign (other special characters are not permitted)
- not be a keyword fex `let`

The list of JavaScript keywords:

```js
break case catch class const continue debugger default delete
do else enum export extends false finally for function if implements
import interface in instanceof
let new package private
protected public return static super switch this throw
true try typeof var void while with yield
```

### Environment

**environment** - the set of vindings and their values existing at a certain time

### Functions

**function** - programme excerpt packaged in value

An example of a binding that stores a function in the browser environment is a `prompt` that displays a dialog box with a prompt to enter text.

```js
prompt("Enter the password");
```

Function **call** or **usage** - the execution of a function

To call a function, enter the paranthesis after the expression that forms the function value.
The values from the parenthesis are passed to the program inside the function.

Function **arguments** - values passed to the function

### console.log function

`console.log` is not a simple binding. It is an expression that takes the `log` property from the value referenced by the `console` binding.

`console.log` sends its arguments to some textual output device, e.g. in a JavaScript console in a web browser.

### Return values

Displaying a dialog box and printing text on the screen are **side effects**.
Futhermore, functions can create values, which makes them useful even without causing side effects.

Example: the `Math.max` function returns the largest number among the fiven arguments:

```js
console.log(Math.max(2, 4));
// --> 4
```

If a function creates a value, it is said to **return** it.
In JavaScript, anything that creates a value is and expression, so functions can be used in larger expressions.

```js
console.log(Math.min(2, 4) + 100);
// --> 102
```

### Control of programme execution

The basic way to execute a programme that contains more that one instruction is from top to bottom.

```js
let theNumber = Number(prompt("Enter the number"));
console.log("Your number is the square root of " + theNumber * theNumber);
```

> The `Number()` function converts a value into a number.
> The use of this conversion is necessary because the `prompt()` function returns a string.
> Similar functions of this type are `String()` and `Boolean()`, which convert values to string and logical type.

Illustration of the described method of controlling programme execution:

```
                                                                     \
======================================================================\
======================================================================/
                                                                     /
```

### Conditional execution

**conditional execution** - the manner of execution of the programme in which the branch was created

```
     \  //======================================\\                   \
======\//                                        \\===================\
======/\\                                        //===================/
     /  \\======================================//                   /
```

The `if` keyword is used to crete conditional constructions.
It allows part of the code to be executed if a condition is met.

```js
let theNumber = Number(prompt('Enter a number'));
if (!Number.isNaN(theNumber)) {
  console.log('Your number is the square root of the number ' + theNumber * theNumber);
}
```

The `if` keyword causes an instruction to be executed or omitted depending on the value of the logical expression.

The `{}` brackets are used to group any number of instructions into a single instruction called a **block**.

> If there is only one instruction, the brackets can be omitted.

```js
if (1 + 1 == 2)
  console.log('To prawda');
```

You can use the keyword `else` in combination with `if` to specify an alternative path for program execution.

```js
let theNumber = Number(prompt('Enter a number'));
if (!Number.isNaN(theNumber)) {
  console.log('Your number is the square root of the number ' + theNumber * theNumber);
} else {
  alert('Hey, there was supposed to be a number!');
}
```

In the case of a larger number of paths, an `else if` instruction may be used.

```js
let num = Number(prompt('Enter a number'));

if (num < 10) {
  console.log('Small');
} else if (num < 100) {
  console.log('Medium');
} else {
  console.log('Large')
}
```

Conditions are checked in order from top to bottom.

```
           //==========================\\
       \  //                            \\           \
========\//                              \\===========\
========/\\                   //=======>>=============/
       /  \\                 //         //           /
           \\=============>>//=========//

```

### While and do loops

Program printing all even numbers between 0 and 12:

```js
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
```

Printing all even numbers up to 1,000 in this way would be impracticable.

**loops** - constructions allowing multiple execution of code fragments

```
                          \                          \
===========================\/=========================\
===========================/\=========================/
                         ^^  \\                      /
                        //    \\
                       //      \\
                       \\      //
                        \\    //
                         \\==//
```

Loop allows you to go back to a particular point in the programme code and execute it again.
Combined with a binding acting as a counter, we get the following structure:

```js
let number = 0;
while (number <=12) {
  console.log(number);
  number = number + 2;
}
// --> 0
// --> 2
// ... itd.
```

The keyword `while` starts the loop.
This is followed by an expression in brackets.
This must be followed by an instruction to be executed (similar to the `if` keyword).

Below is an example of a programme that counts and displays the value 2^10.
The first binding is used to keep track of the result.
The second binding is used to count the operations performed multiplying this result by 2.

```js
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// --> 1024
```

A **do** loop is a control structure similar to a while loop.
The main difference is that a do loop will always execute at least once, and checking the result is only done after the first execution.

```js
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```

The above program requests a name from the user and repeats the request until it receives anything that is not an empty string.
The use of the ! operator converts the value to a logical type before negating it.
The loop will run until it receives a non-empty value.

### Use of indentation in code

Spaces and line breaks do not matter to the computer.

The role of indentation in code blocks is to reveal the structure of the code.

The indentation can be on 2 spaces, 4 spaces, tabs etc but the most important thing is to consistently use the same spacing size.

```js
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise.");
  }
}
```

### for loops

The pattern: a binding acting as a counter, a while loop with a condition and modifying the counter at the end of the loop block is so common that a shorter and more concise form of loop called **for** has been created.

```js
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// --> 0
// --> 2
// ... itd.
```

This programme has an identical operation to the earlier one printing even numbers. The difference is that all the instructions of the 'state' of the loop are grouped together in one place.

There must be two semicolons in the brackets after the `for` keyword.
Before the first one, loops are **initialised**, usually by defining a binding. Then a **check expression** is placed. Finally, a loop **state update** is added after each iteration.

> In most cases, a loop in this form is shorter and clearer that the corresponding `while` construction.

Calculating 2^10 using a for loop instead of a while loop:

```js
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// --> 1024
```

### Coming out of the loop

**break** - a special instruction that causes an immediate exit from the loop directly containing it

Example of the use of break. The program finds the first number that is both not less that 20 and divisible by 7:

```js
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// ! 21
```

> The % operator can be used to check whether one number is divisible by another. If the number is divisible, the remainder of the division is zero.

In the example above, the checking condition is omitted. If the `break` statement was not used or the condition was set to always return true, an **infinite loop** would be obtained. In most cases, this is not desirable.

**continue** - keyword, which causes the current iteration of the loop block to exit and the next iteration to start.

### Concise bond modification

In loops, it is often necessary to update the value of a binding:

```js
counter = counter + 1;
```

The abbreviated notation for writing such instructions is as follows:

```js
counter += 1;
```

This shortens the example with even numbers:

```js
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
```

There are similar abbreviations for other operators: `*=`, `-=`, etc.

The instructions counter += 1, counter -= 1 can be written even shorter: counter++, counter--.

### Separation of tasks using switch instructions

The following code is frequently encountered:

```js
if (X == "value1") activity1();
else if (X == "value2") activity2();
else if (X == "value3") activity3();
else defaultActivity();
```

The **switch** instruction is used to express this type of instruction in a more direct way.
The syntax is inherited from the C and Java languages.

```js
switch (prompt("What is the weather?")) {
  case "rainy":
    console.log("Do not forget to take your umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type occurred!");
    break;
}
```

Any number of `case` labels can be entered in the block below the `switch` statement.

The program will start from the label corresponding to the value passed from the `switch` statement, or execute the `default` clause if no match is found.

It then continues, even through other labels until a `break` instruction is encountered. Sometimes this can be used as in a clause with the label 'sunny'.

### Use of capital letters

Bond names must not contain spaces, but are often made up of a few words.

Here are some possibilities for writing the name of such a bond:

```js
littlecleverturtle
little_clever_turtle
LittleCleverTurtle
littleCleverTurtle
```

The names of the first type are illegible.

Standard JavaScript functions have names formed according to the last formula.

> In a few cases, such as the `Number` function, the first word is also written in capital letters. This means that the function is a **constructor**.

### Comments

Comments are used to provide additional information to the code, explanations, thoughts, etc.

A comment is text within a programme that is completely ignored by the computer.

JavaScript allows comments to be written in two ways. Two slashes `//` are used to create single-line comments.

```js
let accountBalance = calculateBalance(account);
// Some things in life are bad
accountBalance.adjust();
// They can really make you mad
let report = new Report();
// Other things just make you swear and curse
addToReport(accountBalance, report);
// When you're chewing on life's gristle
```

Text betweem the `/*` and `*/` is ignored in its entirety and may contain line breaks.

```js
/*
I first came across this number a few years ago on the cover of an old notebook.
Since then, I have encountered it many times in the telephone numbers and serial numbers of various products. It apparently took a liking to me, so I decided to keep it for myself.

*/
const myNumber = 11213;
```

### Summary

A programme consists of instructions that can themselves contain instructions.
Instructions consist of expressions, which can be constructed from expressions.
Several instructions form a programme that is executed from top to bottom.
This method of execution can be disrupted with conditional statements and loops.
Using bindings, information can be stored under specific names.
An environment is a collection of defined bindings.
JavaScript systems add a number of useful standard bindings to the environment.
Functions are special values that contain a program fragment.
They can be called using the notation nameFunction(argument1, argument2).
Such a function call is an expression that can return a value.
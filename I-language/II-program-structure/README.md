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

### Conditional execution


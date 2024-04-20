# I
## Values, types and operators

The representation of number 13 in binary

```
  0  0  0  0 1 1 0 1
128 64 32 16 8 4 2 1
```

The sum of non-zero digits is equal to 13.

The ocean of bits in modern computers (2019) consists of more than 30 billion in the non-volatile memory.
There are several orders of magnitude more in the hard disk space.

**Values** - portions of bits represanting various information in JavaScript.

### primitive types of values
### Numbers

```
13
// integer
```

There are 64-bit space for single numerical values in JavaScript.
It gives 2^64 possibilites of number representation. (~18 quintilion)

Due to the need to represent negative numbers (sign bit) and fractional numbers (the decimal point), the maximum integer that can be stored is in the range of 9 quadrillion.

```
9.81
// float number (gravity constant)
```

```
2.998e8
// scientific notation for very large or very small numbers
```

> For integer values less that 9 quadrillion, arithmetic operations are always accurate.
> The representation of fractional numbers depends on the precision adopted.
> Note that these are approximate values.

```
100 + 4 * 11
// JavaScript example for arithetical operations
```

**+** and __*__ are operators. (addition and multiplication)

> The order of execution in JavaScript follows the mathematical order.
> The order of execution of actions can be influenced by using round brackets.

```
(100 + 4) * 11
// addition calculated before multiplications example
```

**-** - subtraction operator
**/** - division operator

**hierarchy** - mechanism that decides the order in which actions are performed (in the absence of paratheses).

> Equivalent operators are / and *, as well as + and -.
> Multiplication and division have a higher position in the hierarchy than addition and subtraction.
> In the case of several operators with the same level in the hierarchy, actions are perdformed from left to right.

**%** - modulo operator (returns the remainder of the division)

### Special numbers

```js
Infinity
-Infinity
NaN
```

> Calculations using `Infinity` are not mathematically precise.
> `NaN` is derived from *Not a number*.
> `NaN` can be obtained, for example, as a result of `0 / 0` or `Infinity - Infinity`.

### Strings

Strings serve as the represantion of text values.

```js
'It is fun'
"So cool"
`So what is the matter?`
// 3 ways of represanting strings
```

**\\** - a backslash between quotes is used for adding special characters (*substitute symbol for signs*)

```js
"This is the first line.\nAnd this is the second line."
// \n for line break example
```

output result:

```
This is the first line.
And this is the second line
```

double backslash for representing the backslash in the string

```js
"The new line sign has the form of \\n."
```

output result:

```
The new line sign has the of \n.
```

> Strings are represented as a series of bits using **Unicode** standard.
> JavaScript allocate 16 bits for every sign in the string. (2^16 possible values)
>> Unicode standard has approximately twice as much values so some of them use 2 character units.

**+** - concatenation operator for adding strings

```js
"con" + "ca" + "te" + "na" + "tion"
// concatenation example
```

**template literals** - the gravis string notation, that gives more action possiblities

```js
`The half of 100 is ${ 100 / 2 }.`
// template literal example with calculated value inside the string
```

> In the template literal, everything what is located in the `${}` construction is interpreted in the purpose of calculate the result.
> The result is converted into string and put in the place of calculation.

result

```
The half ofd 100 is 50.
```

### unary operators

The **typeof** operator is an example of unary operators.
It returns string value specifying the name of value type.

```js
console.log(typeof 4.5);
// --> number
console.log(typeof "x");
// --> string
```

Operators that performing actions on 2 values are called binary operators.

> The minus operator can be used in the form of unary or binary operator.

```js
console.log(- (10 - 2));
// --> -8
```

### Logical values


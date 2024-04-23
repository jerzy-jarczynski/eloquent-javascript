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

**logical type** - is used to represent the value "yes/no" or "on/off". It has only two values `true` and `false`.

#### Comparison

```js
console.log(3 > 2);
// --> true
console.log(3 < 2);
// --> false
```

**>** and **<** - comparison operators (greater than and less than, binary).

```js
console.log("Aardvark" < "Zoroaster");
// --> true
```

Other operators:
**>=** - greater or equal to
**<=** - less or equal to
**==** - equal to
**!=** - not equal to

```js
console.log("Itchy" != "Scratchy");
// --> true
console.log("Apple" == "Orange");
// --> false
```

> `NaN` is not equal to itself.

```js
console.log(NaN == NaN);
// --> false
```

#### logical operators

There are 3 logical operators in JavaScript: *and*, *or* and *not*, which can be applied to logical values.

**&&** - represents logical *and*. It returns `true` if and only if both arguments have `true` value.

```js
console.log(true && false);
// --> false
console.log(true && true);
// --> true
```

**||** - represents logical *or*. It returns `true` if at lease one argument is `true`.

```js
console.log(false || true);
// --> true
console.log(false || false);
// --> false
```

**!** - represents logical *not*. It is unary operator that reverses the passed value.

**ternary operator** or conditional operator. The value to the left of the `?` determines which of the other values will be selected.

```js
console.log(true ? 1 : 2);
// --> 1
console.log(false ? 1 : 2);
// --> 2
```

#### nullish values

**null** and **undefined** - special values for meaninglessness, which do not convey any information.

> `null` and `undefined` values can be used interchangeably.
> In principle, there is no difference between them.

### Automatic type conversion

Examples of code generating strange results

```js
console.log(8 * null);
// --> 0
console.log("5" - 1);
// --> 4
console.log("5" + 1);
// --> 51
console.log("five" * 2);
// --> NaN
console.log(false == 0);
// --> true
```

**type conversion** - the conversion behaviour to the correct type when an operator is applied to a value of an incorrect type.

When the `==` operator is applied to values of different types, in most cases JavaScript attempts to convert one type of value into another.
For `null` and `undefined`, the value `true` can only be obtained if there is a `null` or `undefined` on both sides.

```js
console.log(null == undefined);
// --> true
console.log(null == 0);
// --> false
```

**===** and **!==** - three-character operators that denote identity check (`===`) and exact difference (`!==`). These operators prevent automatic coversion.

#### Abbreviated method of determining the value of logical expressions

**||** and **&&** - applied to values od different types attempt to convert the value on the left into a logical type. Depending on this conversion, they return the original value on the left or the value on the right.

```js
console.log(null || "user");
// --> user
console.log("Carol" || "user");
// --> Carol
```

> the `&&` operator works in similar way, only the reverse of `||`

**short-circuit evaluation** - a mechanism whereby the expressuib to the right of the `&&` and `||` operators will be executed only when necessary.

### Summary

4 types of values in JavaScript: numbers, strings, logical values, undefined values.

Operators are used to combine and transform values:
- binary arithmetical operators: +, -, *, /, %;
- concatenation: +
- comparison: ==, !=, ===, !==, <, >, <=, >=;
- logical: &&, ||;
- unary: numerical negation -, logical negation !, typeof;
- ternary operator: ?:
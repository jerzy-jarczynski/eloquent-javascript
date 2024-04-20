# eloquent-javascript

> *When action stops paying off, gather information. When information becomes unprofitable, go to sleep.*
>
> -- Ursula K. Le Guin, The Left Hand of Darkness

### evolution of code logic

the beginning of the computer era program form

```
00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000
```

> the program above sums numbers from 1 to 10 and then prints the result
>
> every single line of above program includes one instruction

the natural language version

```
1. Record number 0 in a memory cell with the number 0.
2. Record number 1 in a memory cell with the number 1.
3. Record the value of number 1 memory cell in the memory cell of number 2.
4. Subtract number 11 from the value stored in the memory cell of number 2.
5. If the value located in the number 2 memory cell is 0, go to instruction number 9.
6. Add the value of the number 1 memory cell to the value of number 0 memory cell.
7. Add the number 1 to the value stored in the number 1 memory cell.
8. Go to instruction number 3.
9. Send the value of the number 0 memory cell to the output.
```

improvement of the above form by using keywords (pseudocode)

```
Set "sum" as 0.
Set "counter" as 1.
[loop]
Set "compare" as "counter".
Subtract 11 from "compare".
If "compare" is 0, go to [end].
Add "counter" to "sum".
Add 1 to "counter".
Go to [loop].
[end]
Return "sum".
```

the JavaScript form

```js
let sum = 0, counter = 1;
while (counter <= 10) {
  sum += counter;
  counter += 1;
}
console.log(sum);
// --> 55
```

> no need for go to instuctions, while instead
> no need for temporary value to compare with 0

the same program but using convenient operations of `range` and `sum`

```js
console.log(sum(range(1, 10)));
// --> 55
```

> `range` creates a collection of number from given range
> `sum` calculates sum of given collection

#### conclusion

Programs can be written in many different ways, from completely unreadable to similar to natural language.
The last form looks like a sentence: *log the sum of the range of numbers from 1 to 10*

## JavaScript

The language was invented in 1995 as a technology enabling adding programs to webpagesa in the **Netscape Navigator** web browser. Then it was implemented in other web browsers.

There is no connections between JavaScript and Java. The name similarity is a marketing action.

After the implementation in web browsers other than **Netscape Navigator** the JavaScript standard was created and called **ECMAScript** (the name is coming from the Ecma International organisation). JavaScript and ECMAScript names are interchangeable.

JavaScript is not limited to web browsers usage. It is implemented as a script language of such databases as **MongoDB** or **CouchDB**. **Node.js** is an example of desktops and servers programming platform.
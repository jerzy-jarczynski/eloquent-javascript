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


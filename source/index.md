---
layout: home
title: Index
nav_order: 0
---

# BOOTS: Beginner Object-Oriented TypeScript

Let's learn how to write object-oriented TypeScript code!

1. [Introduction](text/1-introduction/index.md)
   1. [Welcome](text/1-introduction/welcome.md)
   2. [Setup](text/1-introduction/setup.md)
   3. [Variables](text/1-introduction/variables.md)
   4. [Functions](text/1-introduction/functions.md)
   5. [Conditionals](text/1-introduction/conditionals.md)
2. [Loops and Arrays](text/2-loops/index.md)
   1. [Loops](text/2-loops/loops.md)
   2. [Arrays](text/2-loops/arrays.md)


```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

console.log(new Greeter("world").greet());
```
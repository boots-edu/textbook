---
layout: home
title: Index
nav_order: 0
---

# BOOTS: Beginner Object-Oriented TypeScript

Let's learn how to write object-oriented TypeScript code!


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
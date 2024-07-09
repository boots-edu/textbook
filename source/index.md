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
   6. [Strings](text/1-introduction/strings.md)
2. [Loops and Arrays](text/2-loops/index.md)
   1. [Loops](text/2-loops/loops.md)
   2. [Arrays](text/2-loops/arrays.md)
3. [Data Classes](text/3-dataclass/index.md)
    1. [Introduction](text/3-dataclass/intro.md)
    2. [Basic Data Classes](text/3-dataclass/basic.md)
    3. [Data Class Constructors](text/3-dataclass/constructors.md)
    4. [Instances and References](text/3-dataclass/references.md)
    5. [This keyword](text/3-dataclass/this.md)
4. [Classes](text/4-classes/index.md)
    1. [Class Methods](text/4-classes/methods.md)
    2. [Data Hiding](text/4-classes/private.md)
    3. [Object Cloning](text/4-classes/clone.md)
5. [Composition and Inheritance](text/5-composition-inheritance/index.md)
    1. [Composition](text/5-composition-inheritance/composition.md)
    2. [Inheritance](text/5-composition-inheritance/inheritance.md)
    3. [Putting it all Together](text/5-composition-inheritance/summation.md)
6. [Overrides and Polymorphism](text/6-polymorphism/index.md)
    1. [Member Access](text/6-polymorphism/member_access.md)
    2. [Overrides](text/6-polymorphism/overrides.md)
    3. [Polymorphism](text/6-polymorphism/polymorphism.md)
    4. [Abstract Classes](text/6-polymorphism/abstract.md)
    5. [Polymorphism Notes](text/6-polymorphism/notes.md)
7. [Exceptions and Code Quality](text/7-exceptions_code_qual/index.md)
    1. [Exceptions](text/7-exceptions_code_qual/excedptions.md)
    2. [Comments](text/7-exceptions_code_qual/comments.md)
    3. [Naming](text/7-exceptions_code_qual/naming.md)
    4. [General Code Quality](text/7-exceptions_code_qual/general.md)
8. [Software Testing](text/8-testing/index.md)
    1. [Testing](text/8-testing/testing.md)
    2. [Testing in Jest](text/8-testing/jest.md)
    3. [Annoymous Functions](text/8-testing/anonymous.md)
9. [Webz Introduction](text/9-webz-intro/index.md)
    1. [Web Bascis](text/9-webz-intro/webbasics.md)
    2. [Beginning WebZ](text/9-webz-intro/beginning_webz.md)
10. [Advanced WebZ](text/10-webz-advanced/index.md)

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
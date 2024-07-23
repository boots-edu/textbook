---
layout: home
title: Index
nav_order: 0
---

# BOOTS: Beginner Object-Oriented TypeScript

Let's learn how to write object-oriented TypeScript code!
- [Introduction](text/0-introduction/index.md)
   - [Welcome](text/0-introduction/welcome.md)
   - [Setup](text/0-introduction/setup.md) 

1. [Introduction To Typescript](text/1-typescript/index.md)
   1. [Variables](text/1-typescript/variables.md)
   2. [Functions](text/1-typescript/functions.md)
   3. [Conditionals](text/1-typescript/conditionals.md)
   4. [Strings](text/1-typescript/strings.md)
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
    1. [Dynamic Components](text/10-webz-advanced/dynamic.md)
    2. [WebZ Events](text/10-webz-advanced/events.md)
    3. [WebZ Dialogs](text/10-webz-advanced/dialogs.md)
    4. [WebZ Timers](text/10-webz-advanced/timers.md)
11. [Advanced Typescript](text/11-Advanced%20Typescript/index.md)
    1. [Typescript Generics](text/11-Advanced%20Typescript/generics.md)
    2. [Typescript Interfaces](text/11-Advanced%20Typescript/interfaces.md)
    3. [Union Types](text/11-Advanced%20Typescript/unions.md)
12. [Higher Order Methods](text/12-high-order-methods/index.md)
    1. [Higher Order Array Methods](text/12-high-order-methods/arrays.md)
13. [Recursion](text/13-Recursion/index.md)
    1. [Description and Definition of Recursion](text/13-Recursion/recursion.md)
    2. [Trees](text/13-Recursion/trees.md)
{:start="0"}

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
let c:MyClass=new MyClass();
console.log(c.x);
```
{: .test-ts.test2-ts}

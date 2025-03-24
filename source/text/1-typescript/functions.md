---
layout: default
title: Functions
nav_order: 1.4
parent: Introduction To Typescript
---

# Functions

[&laquo; Return to the Chapter Index](index.md)

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Key Idea

A **function** is a collection of code which performs a specific task. It can take parameters and return a value.

## Functions Are Blocks of Code

For now, we will discuss functions as named blocks of code. Later we will learn how to create **anonymous functions** which do not have a name, but for this review, functions will have names.

We **declare** (or **define**) a function in typescript by specifying its:

-   **Name**: The name of the function
-   **Parameters**: Local variables that are set to the value of the **arguments** passed into the call
-   **Return type**: The expected type that this function will return
-   **Body**: The code that makes up the function and will be executed when the function is called.

Once declared, we can **call** (**use**) that function anywhere in our code to execute it without worrying about the code inside. As long as we know how to call it and the meaning of what it returns, we can use it.

{: .warning-title}

> "Call" Functions, "Use" Variables
>
> Remember, you should only use the verb "call" when you are talking about invoking a function. When you are talking about defining a function or variable, use the verb "declare" or "define". When you are talking about using a variable, use the verb "use", "access", or "get". You should never use the verb "call" when talking about accessing a variable (unless that variable is a function).

## Examples

### An Example Function

{:.no-run}

```typescript
function areaOfCircle(radius: number): number {
    const pi: number = 3.1415927;
    return pi * radius * radius;
}
```

In this example, we have a function named `areaOfCircle`. It takes one parameter, `radius`, which is a `number`. The function returns a `number`.

Notice that the parameter's type is specified after the parameter name, separated by a colon. The return type is specified after the parameter list, also separated by a colon.

The body of the function is enclosed in curly braces `{}`. The code that makes up the function goes inside the curly braces, on separate lines separated by semicolons.

The final line of the function is a **`return`** statement. This statement returns the value of the expression to the right of the `return` keyword. The function will exit at this point, and the value will be returned to the call site.

### Another Example Function

{:.no-run}

```typescript
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}
```

In this example, we have two parameters, `a` and `b`, both of which are `number`s. The function returns a `number`. The parameters are separated by commas.

### Example Function Calls

```typescript
function areaOfCircle(radius: number): number {
    const pi: number = 3.1415927;
    return pi * radius * radius;
}

let myArea: number = areaOfCircle(2);
console.log(myArea);
```

We can call this function from anywhere in our code by using its name.

This code will call our function `areaOfCircle` and substitute `2` for the parameter `radius`, then return the `calculation` and store the result `12.5663708` in the variable `myArea`.

## Printing with `console.log`

You may have noticed the use of `console.log` in our previous examples. `console.log` is a very important built-in function in TypeScript. This function takes any number of arguments and prints them to the console.

```typescript
console.log("Hello, world!");
```

This code will print `Hello, world!` to the console.

### Calling and Printing

{: .warning-title}
A common misconception is that functions print their return value. This is not true. Functions return a value, but they do not print it. If you want to see the value, you must print it.

```typescript
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

let sum: number = addTwoNumbers(2, 3);
console.log(sum);
```

You do not have to store the return value in a variable before printing it. You can print it directly.

```typescript
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addTwoNumbers(2, 3));
```

### Multiple Arguments to `console.log`

You can pass multiple arguments to `console.log`. It will print each argument separated by a space.

```typescript
console.log("The sum of", 2, "and", 3, "is", 5);
```

The output of this code will be `The sum of 2 and 3 is 5`.

## Testing Functions

```typescript
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

test("Test addTwoNumbers", () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
    expect(addTwoNumbers(0, 0)).toBe(0);
    expect(addTwoNumbers(-1, 1)).toBe(0);
});
```

We can test our functions by calling them with different arguments and checking the return value. Usually, testing in TypeScript is done with a **testing framework** like **Jest**. The tests will be placed in a separate file from the code being tested, and the testing framework will run the tests and report the results. These testing frameworks have built-in functions like `expect` and `toBe` that make it easy to write tests, and organize them into test suites using the `test` and `describe` functions. Much of these details are not important for now, but you should be aware that testing is an important part of software development.

## Documenting Functions

{:.no-run}

```typescript
/**
 * Compute the area of a circle
 * @param radius The radius of the circle
 * @returns The area of the circle
 */
function areaOfCircle(radius: number): number {
    let pi: number = 3.1415927;
    return pi * radius * radius;
}
```

We can document our functions by adding a **comment** above the function declaration. This comment should describe what the function does, what parameters it takes, and what it returns. This is called a **JSDoc** comment. It is a special type of comment that is used to document functions, variables, and classes in TypeScript. It is important to document your code so that others can understand it, and so that you can remember what you were thinking when you wrote it. We'll talk more about **documentation** later.

## Summary

Functions are blocks of code that perform a specific task. They can take parameters and return a value. We declare a function by specifying its name, parameters, return type, and body. We can call a function anywhere in our code to execute it.

# Next Step

Next we'll review [Conditionals &raquo;](../1-typescript/conditionals.md)

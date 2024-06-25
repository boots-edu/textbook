---
layout: default
title: Functions
nav_order: 1.4
parent: Introduction
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

# Key Idea

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

# Functions Are Blocks of Code

For now, we will discuss functions as named blocks of code. Later we will learn how to create  __anonymous functions__  which do not have a name. But for this review, functions will have names.

We  __declare__ (or __define__)  a function in typescript by specifying its:
* Name: The name of the function
* __Parameters__: Local variables that are set to the value of the __arguments__ passed into the call
* __Return type__: The expected type that this function will return
* __Body__: The code that makes up the function and will be executed when the function is called.

Once declared, we can __call__ (__use__) that function anywhere in our code to execute it without worrying about the code inside.  As long as we know how to call it and the meaning of what it returns, we can use it.

{: .warning-title}

Remember, you should only use the verb "call" when you are talking about invoking a function.  When you are talking about defining a function or variable, use the verb "declare" or "define". When you are talking about using a variable, use the verb "use", "access", or "get". You should never use the verb "call" when talking about accessing a variable (unless that variable is a function).

# An Example Function

```typescript
function areaOfCircle(radius: number): number{
    let pi: number = 3.1415927;
    return pi * radius * radius;
}
```

In this example, we have a function named `areaOfCircle`. It takes one parameter, `radius`, which is a `number`. The function returns a `number`.

Notice that the parameter's type is specified after the parameter name, separated by a colon. The return type is specified after the parameter list, also separated by a colon.

The body of the function is enclosed in curly braces `{}`. The code that makes up the function goes inside the curly braces, on separate lines separated by semicolons.

The final line of the function is a __`return`__ statement. This statement returns the value of the expression to the right of the `return` keyword. The function will exit at this point, and the value will be returned to the call site.

# Another Example Function

```typescript
function addTwoNumbers(a: number, b: number): number{
    return a + b;
}
```

In this example, we have two parameters, `a` and `b`, both of which are `number`s. The function returns a `number`. The parameters are separated by commas.

# Example Function Calls

```typescript
function areaOfCircle(radius: number): number{
    let pi: number = 3.1415927;
    return pi * radius * radius;
}

let myArea: number = areaOfCircle(2);
```

We can call this function from anywhere in our code by using its name.

This code will call our function `areaOfCircle` and substitute `2` for the parameter `radius`, then return the `calculation` and store the result `12.5663708` in the variable `myArea`.

# Printing with `console.log`

A very important built-in function in TypeScript is `console.log`. This function takes any number of arguments and prints them to the console.

```typescript
console.log("Hello, world!");
```

This code will print `Hello, world!` to the console.

# Calling and Printing

A common misconception is that functions print their return value. This is not true. Functions return a value, but they do not print it. If you want to see the value, you must print it.

```typescript
function addTwoNumbers(a: number, b: number): number{
    return a + b;
}

let sum: number = addTwoNumbers(2, 3);
console.log(sum);
```

You do not have to store the return value in a variable before printing it. You can print it directly.

```typescript
function addTwoNumbers(a: number, b: number): number{
    return a + b;
}

console.log(addTwoNumbers(2, 3));
```

# Multiple Arguments to `console.log`

You can pass multiple arguments to `console.log`. It will print each argument separated by a space.

```typescript
console.log("The sum of", 2, "and", 3, "is", 5);
```

The output of this code will be `The sum of 2 and 3 is 5`.

# Summary

Functions are blocks of code that perform a specific task. They can take parameters and return a value. We declare a function by specifying its name, parameters, return type, and body. We can call a function anywhere in our code to execute it.

# Next Step

Next we'll review [Conditionals &raquo;](../1-introduction/conditionals.md)
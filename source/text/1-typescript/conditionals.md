---
layout: default
title: Conditionals
nav_order: 1.5
parent: Introduction To TypeScript
---

# Conditionals

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

A **conditional** is a way to alter program flow based on the value (truthiness) of some boolean expression.

## The `if` Statement

In TypeScript, the most common conditional is the **`if`** statement.

-   The `if` statement evaluates a **conditional** (or **logical**) expression and executes the code inside the `if` statement only _if_ that expression is `true`.
-   The `if` statement can have an `else` branch. The `else` branch is only executed if the expression evaluates to `false`.

Using `if` statements we can execute different code based on the values of variables at run time, allowing us to create programs that are reactive to different states as the program runs.

### Example of an `if` Statement

```typescript
let year = "freshman";

if (year !== "senior") {
    console.log("You must register for classes");
}
```

Consider the case of a program that asks the user their year.

-   If they are not a senior, the program registers them for next semester.
-   If they are a senior then the program does nothing.

```typescript
let year = "senior";

if (year !== "senior") {
    console.log("You must register for classes");
}
```

### Example of an `if` Statement with an `else` Branch

Now suppose instead of doing nothing special when the user enters senior, we want to send them an invitation to graduation.
We can handle this with an **`else`** branch on our `if` statement.

```typescript
let year = "senior";

if (year !== "senior") {
    console.log("You must register for classes");
} else {
    console.log("Come to graduation");
}
```

### Nesting `if` inside of Functions

We can also nest `if` statements inside of functions.

```typescript
/**
 * Register for classes if not a senior
 * @param year The year of the student
 * @returns A message to the student
 */
function registerForClasses(year: string): string {
    if (year !== "senior") {
        return "You must register for classes";
    } else {
        return "Come to graduation";
    }
}

test("Test registerForClasses", () => {
    expect(registerForClasses("freshman")).toBe(
        "You must register for classes"
    );
    expect(registerForClasses("senior")).toBe("Come to graduation");
});
```

### The `else if` construct

The following code will execute the first block if `x` is greater than `4`, otherwise it will execute the second block. Inside of the second block, if `x` is greater than `2`, it will execute the third block, otherwise it will execute the fourth block.

{: .no-run}

```typescript
if (x > 4) { //first block
    //do something 
} else { //second block
    if (x > 2) { //third block
        //do something else
    } else { //fourth block
        //do a third thing
    }
}
```

Using the `else if` construct, we can rewrite this code to be more readable:

{: .no-run}

```typescript
if (x > 4) {
    //do something
} else if (x > 2) {
    //do something else
} else {
    //do a third thing
}
```

It turns out that if the block inside an `if` or `else` is only one statement long, we are allowed to drop the `{ }`. The compiler will then assume only the next statement is inside the block. Even though the `if` is multiple lines, it is a single `if` statement with body, so this still works.
We end up with something that does the same thing, but looks a lot better.
We have simply dropped the {} around the first else block, since the `if (x > 2) {...}` statement is the only thing inside of it.

## Comparison Operators for Equality and Ordering

As a reminder, there are six main comparison operators in TypeScript:

-   Equality:
    -   `X === Y`: `true` if `X` and `Y` are equal
    -   `X !== Y`: `true` if `X` and `Y` are not equal
-   Ordering:
    -   `X < Y`: `true` if `X` is less than `Y`
    -   `X > Y`: `true` if `X` is greater than `Y`
    -   `X >= Y`: `true` if `X` is greater than or equal to `Y`
    -   `X <= Y`: `true` if `X` is less than or equal to `Y`

All of these operators are comparison operators, but they are also either equality operators or ordering operators.

### Boolean Operators

We can use Boolean operators to combine boolean expressions:

-   **and** (`&&`): true when both conditions are true
-   **or** (`||`): true when at least one of the conditions is true, and also when both are true

```typescript
let happiness: number = 8;
let luckiness: number = 9;

let happyLucky: boolean = happiness >= 7 && luckiness > 7;
// Sets happyLucky to true when both conditions are true

let happyOrLucky: boolean = happiness >= 7 || luckiness > 7;
// Sets happyOrLucky to true when at least one of the conditions is true
console.log("Happy and Lucky: " + happyLucky);
console.log("Happy or Lucky: " + happyOrLucky);
```

Just think of this in words:

-   A and B implies both.
-   A or B implies either.

### The Not Operator (`!`)

An additional Boolean operator that we have available is the not (`!`) operator (also called the **negation operator**).
Unlike the other operators, this operator simply negates whatever comes next.

-   `!A && B`: `true` when `A` is `false` and `B` is `true`
-   `!(A && B)`: `true` when at least one of `A` and `B` are `false`
-   `!A || !B`: `true` when at least one of `A` and `B` are `false` (DeMorgan's Law)
-   `!(A && B) || C`: `true` when at least one of `A` and `B` are `false` or any time `C` is `true`

By using a combination of comparison operators, logical connectors, and *not*'s we can build complex logic to test state to use in conditionals and loops...

## A Complex Example

```typescript
/**
 * Bring an umbrella if it is not raining
 * @param raining True if it is raining
 * @param temperature The temperature in degrees Fahrenheit
 * @returns A message to the user
 */
function bringUmbrella(raining: boolean, temperature: number): string {
    if (!raining && temperature < 70) {
        return "Bring an umbrella";
    } else if (raining && temperature < 70) {
        return "Bring an umbrella and a jacket";
    } else if (!raining && temperature >= 70) {
        return "No need for an umbrella";
    } else {
        return "No need for an umbrella, but bring a jacket";
    }
}

test("Test bringUmbrella", () => {
    expect(bringUmbrella(false, 60)).toBe("Bring an umbrella");
    expect(bringUmbrella(true, 60)).toBe("Bring an umbrella and a jacket");
    expect(bringUmbrella(false, 80)).toBe("No need for an umbrella");
    expect(bringUmbrella(true, 80)).toBe(
        "No need for an umbrella, but bring a jacket"
    );
});
```

## Summary

-   An `if` statement is a way to alter program flow based on the value of some boolean expression.
-   An `else` branch can be added to an `if` statement to handle the case when the expression is `false`.
-   We can use comparison operators to compare values and logical operators to combine multiple conditions.
-   An `if` statement can be nested inside of a function to create complex logic.

# Next Up

Now onto the next chapter: [Strings &raquo;](../1-typescript/strings.md)

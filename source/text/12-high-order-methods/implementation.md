---
layout: default
title: Example Implementation of Higher Order Methods
nav_order: 12.2
parent: Higher Order Methods
---

# Example Implementation of HO Methods

[Return to the Chapter Index](index.md)

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Key Idea

A **_higher order function_** is a function that takes as an argument and/or returns a function.

## Overview

This page provides an example implementation of **_higher order methods_** in TypeScript. We will re-implement all of the higher-order array methods in our own custom `List` class.

Note that you do not have to implement these methods yourself - they are built into the JavaScript array class. This is just an explanation of _how_ they work. Examples of using them are at the bottom of the page.

For more information about the built-in array methods, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

{: .no-run}

```typescript
/**
 * Implementation of a "List", which will just be a wrapper around an array.
 * This is redundant to the built-in array; it is just a pedagogical example.
 *
 * The type variable `T` is a generic type, which means that it can be any type, but it
 * will be the same type for all the items in the List and the same type for the parameter
 * of the callback functions.
 */
class List<T> {
    private items: T[];
    constructor(items: T[]) {
        this.items = items;
    }

    // Methods will go here...
}
```

## `forEach` Method

{: .no-run}

```typescript
    /**
     * This method will call the callback function for each item in the List.
     *
     * @param callback The function to call for each item. It will be passed the current item, the index, and the array.
     *               The index is optional, and the array is the data inside of the List itself.
     */
    forEach(callback: (currentValue: T, index: number, array: T[]) => void): void {
        for (let i = 0; i < this.items.length; i++) {
            callback(this.items[i], i, this.items);
        }
    }
```

## `filter` Method

{: .no-run}

```typescript
    /**
     * This method will create a new List with only the items that pass the test in the callback function.
     *
     * @param callback The function to call for each item. It should return true if the item should be included in the new List.
     * @returns A new List with only the items that pass the test.
     */
    filter(callback: (currentValue: T, index: number, array: T[]) => boolean) {
        let result = new List<T>([]);
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                result.items.push(this.items[i]);
            }
        }
        return result;
    }
```

## `some` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and return if ANY of them return true.
     *
     * @param callback The function to call for each item. It should return true if the item passes the test.
     * @returns True if any of the items pass the test, false otherwise.
     */
    some(callback: (currentValue: T, index: number, array: T[]) => boolean) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                return true;
            }
        }
        return false;
    }
```

## `every` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and return if ALL of them return true.
     *
     * @param callback The function to call for each item. It should return true if the item passes the test.
     * @returns True if all of the items pass the test, false otherwise.
     */
    every(callback: (currentValue: T, index: number, array: T[]) => boolean) {
        for (let i = 0; i < this.items.length; i++) {
            if (!callback(this.items[i], i, this.items)) {
                return false;
            }
        }
        return true;
    }
```

## `map` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and returns a new List with the
     * transformed values. This can be used to change the type of the items in the List, or to modify each one.
     * Note that it returns a NEW list, it does not modify the original.
     *
     * @param callback The function to call for each item. It should return the new value for that item.
     * @returns A new List with the transformed values.
     */
    map<U>(callback: (currentValue: T, index: number, array: T[]) => U) {
        let result = new List<U>([]);
        for (let i = 0; i < this.items.length; i++) {
            result.items.push(callback(this.items[i], i, this.items));
        }
        return result;
    }
```

## `reduce` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element ALONG with an accumulator value,
     * and return the final value of the accumulator. This can be used to sum all the items, or to concatenate
     * them together, or to do any other kind of reduction. Note that the function ALSO takes an initial value
     * for the accumulator.
     *
     * @param callback The function to call for each item. It should return the new value for the accumulator.
     * @param initialValue The initial value for the accumulator.
     * @returns The final value of the accumulator.
     */
    reduce<U>(
        callback: (
            accumulator: U,
            currentValue: T,
            index: number,
            array: T[],
        ) => U,
        initialValue: U,
    ) {
        let accumulator = initialValue;
        for (let i = 0; i < this.items.length; i++) {
            accumulator = callback(accumulator, this.items[i], i, this.items);
        }
        return accumulator;
    }
```

## `rightReduce` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element ALONG with an accumulator value,
     * and return the final value of the accumulator. Unlike `reduce`, it will start from the right side of the
     * array and go to the left (aka backwards). This can be used to do the same things as `reduce`, but in reverse.
     * Note that the function ALSO takes an initial value for the accumulator.
     *
     * @param callback The function to call for each item. It should return the new value for the accumulator.
     * @param initialValue The initial value for the accumulator.
     * @returns The final value of the accumulator.
     */
    rightReduce<U>(
        callback: (
            accumulator: U,
            currentValue: T,
            index: number,
            array: T[],
        ) => U,
        initialValue: U,
    ) {
        let accumulator = initialValue;
        for (let i = this.items.length - 1; i >= 0; i--) {
            accumulator = callback(accumulator, this.items[i], i, this.items);
        }
        return accumulator;
    }
```

## `find` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and return the first item that
     * passes the test. If no item passes the test, it will return `undefined`.
     *
     * @param callback The function to call for each item. It should return true if the item passes the test.
     * @returns The first item that passes the test, or `undefined` if none do.
     */
    find(callback: (currentValue: T, index: number, array: T[]) => boolean) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                return this.items[i];
            }
        }
        return undefined;
    }
```

## `findIndex` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and return the index of the first item that
     * passes the test. If no item passes the test, it will return `-1`.
     *
     * @param callback The function to call for each item. It should return true if the item passes the test.
     * @returns The index of the first item that passes the test, or `-1` if none do.
     */
    findIndex(
        callback: (currentValue: T, index: number, array: T[]) => boolean,
    ) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                return i;
            }
        }
        return -1;
    }
```

## `findLast` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and return the last item that
     * passes the test. If no item passes the test, it will return `undefined`. This is the same as `find`,
     * but it starts from the end of the array and goes to the beginning.
     *
     * @param callback The function to call for each item. It should return true if the item passes the test.
     * @returns The last item that passes the test, or `undefined` if none do.
     */
    findLast(
        callback: (currentValue: T, index: number, array: T[]) => boolean,
    ) {
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (callback(this.items[i], i, this.items)) {
                return this.items[i];
            }
        }
        return undefined;
    }
```

## `findLastIndex` Method

{: .no-run}

```typescript

    /**
     * This method will call the apply the callback function to each element, and return the index of the last item that
     * passes the test. If no item passes the test, it will return `-1`. This is the same as `findIndex`,
     * but it starts from the end of the array and goes to the beginning.
     *
     * @param callback The function to call for each item. It should return true if the item passes the test.
     * @returns The index of the last item that passes the test, or `-1` if none do.
     */
    findLastIndex(
        callback: (currentValue: T, index: number, array: T[]) => boolean,
    ) {
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (callback(this.items[i], i, this.items)) {
                return i;
            }
        }
        return -1;
    }
```

## `sort` Method

{: .no-run}

```typescript

    /**
     * This method will sort the items in the List using the given callback function to compare them.
     * The callback function should return a negative number if `a` should come before `b`, a positive number
     * if `a` should come after `b`, and 0 if they are equal.
     *
     * Unlike the built-in `sort` method, this will modify the original List.
     *
     * @param callback The function to compare two items. It should return a negative number if `a` should come before `b`, a positive number if `a` should come after `b`, and 0 if they are equal.
     * @sideEffect This method will modify the original List.
     */
    sort(callback: (a: T, b: T) => number) {
        let len = this.items.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (callback(this.items[j], this.items[j + 1]) > 0) {
                    let temp = this.items[j];
                    this.items[j] = this.items[j + 1];
                    this.items[j + 1] = temp;
                }
            }
        }
    }
```

## Usage Examples

The following is an example of how you could use our new `List` class:

```typescript
 import { MyList } from "ch12/list";

let list = new MyList([1, 3, 4, 5, 2]);

list.forEach((item, index) => {
    console.log(item, index);
});

// Filter
let filtered = list.filter((item) => item % 2 === 0);
console.log(filtered);

// Map
let mapped = list.map((item) => item * item);
console.log(mapped);

// Reduce
let sum = list.reduce((acc, item) => acc + item, 0);
console.log(sum);

let joined = list.reduce((acc, item) => acc + " " + item, "");
console.log(joined);

joined = list.rightReduce((acc, item) => acc + " " + item, "");
console.log(joined);

// Some
console.log(list.some((item) => item > 3));

// Every
console.log(list.every((item) => item > 3));

// Find
console.log(list.find((item) => item > 3));

// Find Index
console.log(list.findIndex((item) => item > 3));

// Find Last
console.log(list.findLast((item) => item > 3));

// Find Last Index
console.log(list.findLastIndex((item) => item > 3));

// Sorting
list.sort((a, b) => b - a);
console.log(list);
list.sort((a, b) => a - b);
console.log(list);
```

### More Examples

```typescript
// Another set of more exotic examples
 import { MyList } from "ch12/list";

const myGrades = new MyList([90, 86, 97, 9]);
const myFruit = new MyList(["apple", "orange", "lychee", "banana"]);
class Pet {
    constructor(public name: string, public kind: string) {}
    clone(): Pet {
        return new Pet(this.name, this.kind);
    }
}
const myPets = new MyList([
    new Pet("Ada", "dog"),
    new Pet("Babbage", "dog"),
    new Pet("Captain", "cat"),
    new Pet("Domino", "cat"),
]);

function printPetName(pet: Pet) {
    console.log(pet.name);
}

// For Each
myGrades.forEach((grade) => console.log(grade));
myFruit.forEach((fruit) => console.log(fruit));
myPets.forEach(printPetName);

// Filter
console.log(
    "Filter Grades:",
    myGrades.filter((grade) => grade >= 90)
);
console.log(
    "Filter Fruit",
    myFruit.filter((fruit) => fruit[0] === "l")
);
console.log(
    "Filter Pets",
    myPets.filter((pet) => pet.kind === "cat")
);

// Map
console.log(
    "Map Grades",
    myGrades.map((grade) => {
        return grade + 10;
    })
);
console.log(
    "Eat Fruits",
    myFruit.map((fruit) => "I ate a " + fruit)
);
console.log(
    "Pet Names",
    myPets.map((pet) => pet.name)
);
console.log(
    "Fruit Pets",
    myFruit.map((fruit) => new Pet(fruit, "fruit"))
);
console.log(
    "Evil Clones",
    myPets.map((pet) => pet.clone())
);

// Reduce
console.log(
    myGrades.reduce(
        (currentTotal: number, grade: number) => currentTotal + grade,
        0
    ) / myGrades.length()
);
console.log(
    myFruit.reduce(
        (resultSoFar: string, fruit: string) => resultSoFar + ", " + fruit,
        ""
    )
);

// Reduce can be used to copy an array!
const copy = myFruit.reduce((arraySoFar: string[], fruit) => {
    arraySoFar.push(fruit);
    return arraySoFar;
}, []);
console.log(copy);
```

## Summary

There is nothing special about these built-in methods, except that they are conveniently provided for us. We can re-implement them with the existing control structures we already learned.

# Next Step

Next we'll learn about Recursion [Recursion](../13-Recursion/index.md)

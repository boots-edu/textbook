---
layout: default
title: Higher Order String Methods
nav_order: 12.1
parent: Higher Order Methods
---

# Higher Order String Methods

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

A **_higher order function_** is a function that takes as an argument and/or returns a function.

## Higher Order Methods in General

The term **_Higher Order Method_** simply refers to any method which takes a function as an argument, returns a function, or both.
This is nothing new for us. We have seen this before in the describe and test methods we use in our jest test code.

```typescript
describe("MainComponent", () => {
    describe("Constructor", () => {
        test("Create Instance", () => {});
    });
});
```

We also saw this in the Webz library with the Notifier class' subscribe method:

{: .no-run}

```typescript
child.elementAdded.subscribe((value: boolean) => {
    console.log(value);
});
```

In TypeScript, when passing a function as an argument, it is often convenient to use an **_anonymous function_** which we have talked about already. You can always spot this because it will have the => operator.

Since functions in TypeScript are **_first order objects_**, we can use them as parameters and return values.
We can specify the shape or signature of the expected parameter or return type when we declare the method.

{: .no-run}

```typescript
subscribe(callback: (value: T) => void, error?: (value: Error) => void):number
```

In this signature for the subscribe method, the parameter named callback is of type (value: T) => void and the parameter named error is of type (value:Error)=>void where T is a type parameter used when creating an instance of the class and Error is the error type provided by TypeScript.

This language feature of TypeScript (and many other languages where functions are **_first order objects_**) allows for some useful and interesting ways to write code and TypeScript (JavaScript) provides some built-in functions that take advantage of this.

Use of these built-in methods will make your code shorter, simpler and more readable. There is nothing these can do that we could not write in some other way, but they simplify things considerably. We will examine several methods that can be applied to arrays including map, filter, reduce, reduceRight, every, some, find, findIndex, findLastIndex, flatMap, forEach, and sort,

## Higher Order Array Methods

### The forEach Method

The simplest and most straight forward higher order array method is **_forEach_** which takes a function as its only argument and executes that function on each argument in the list. If we wanted to do this without using the forEach method, we could certainly do it with a simple for loop:

```typescript
const arr: string[] = ["a", "b", "c"];
for (let value of arr) {
    console.log(value);
}
```

We can use our new higher order **_forEach_** method to accomplish the same thing. Notice that the only difference is that we are passing a simple method to the **_forEach_** function which accomplishes whatever we want to do in the loop body by calling that function on each element of the array.

```typescript
class ArrayTest{
    arr: string[] = ["a", "b", "c"];
    test(val:string):void{
        console.log(val);
    }
    go(){
        arr.forEach((value) => {
            this.test(value);
        });
    }
}

new ArrayTest().go();
```

If we want to call a member function instead, we can simply call it in the body of the anonymous function.

```typescript
const arr: string[] = ["a", "b", "c"];
arr.forEach((value) => {
    console.log(value);
});
```

**This does not mutate the array in any way.**

### The every and some methods

The **_every_** and **_some_** method execute a function that returns a boolean on each element of the array and returns true if the passed function returns true for (every/some) of the elements in the array.

The **_every_** method:

-   Returns true if the function returns true on all of the elements
-   Returns false if the function is false on any single element

The **_some_** method:

-   Returns true if the function returns true on any single element
-   Returns false if the function returns false on all of the elements

```typescript
const ages = [21, 12, 19, 6, 15];
if (ages.some((age) => age > 18)) {
    console.log("We have some adults");
} else {
    console.log("We have no adults");
}
if (ages.every((age) => age > 18)) {
    console.log("We have all adults");
} else {
    console.log("We have at least 1 kid");
}
```

These do not mutate the array in any way.

### The find and findIndex methods

The **_find_** method execute a function (Test method) that returns a boolean on each element of the array and returns the first element where the function returns true. The **_findIndex_** method returns the cardinal index of the element in the array instead.

**_find:_**

-   Returns the first element where the test function returns true
-   Returns undefined if the test function returns false on all elements

```typescript
interface Person {
    name: string;
    age: string;
}
const people: Person[] = [
    { name: "John", age: "21" },
    { name: "Jane", age: "22" },
];
let jane = people.find((person) => person.name === "Jane");
if (jane !== undefined) console.log(`found ${jane.name}`);
```

**_findIndex:_**

-   Returns the index of the first element where the test function returns true
-   Returns -1 if the test function returns false on all elements

```typescript
interface Person {
    name: string;
    age: string;
}
const people: Person[] = [
    { name: "John", age: "21" },
    { name: "Jane", age: "22" },
];
const index = people.findIndex((person) => person.name === "John");
if (index !== -1) console.log(`found ${people[index].name} `);
```

There are also _last_ versions of these methods that return the last element that matches. These are _findLast_ and _findLastIndex_.

> These do not mutate the array in any way.

### The filter method

The filter method executes a function (Test method) that returns a boolean on each element of the array. It returns a new array of the elements where the test function returns true.

```typescript
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
];
const adults = people.filter((person) => person.age > 18);
console.log(adults);
```

**_Filter_** returns an array with all of the elements (Jane in our example) where the function returns true.If the function returns false on all elements, it returns an empty array [].

Since it does not mutate the original array, you must capture the return value.

> This does not mutate the array in any way.

### The map method

The map method executes a function that returns a new array consisting of the return values of the function applied to each element of the array.

```typescript
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
];

const ages: number[] = people.map((person) => person.age);
console.log(ages); //outputs an array of ages.
```

In the example, the method is called on each person object, and returns the age of that person. The result is an array containing the ages of each person in the same order as the people in the original array.

It is not critical that the method USE the element of the array, suppose I wanted to create an array containing 0's for each element in our array.

```typescript
interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
];

const zeros: number[] = people.map((person) => 0);
console.log(zeros);
```

Map is very useful for extracting data from an array of objects.

> This does not mutate the array in any way.

### The flatMap method

The flatMap method executes a function and returns a new array consisting of the return values of the function applied to each element in a nested array.

{: .no-run}

```typescript
interface Person {
    name: string;
    groups: string[];
}
const people: Person[] = [
    { name: "John", groups: ["admin", "user"] },
    { name: "Jane", groups: ["editor"] },
];
let groups: string[] = people.flatMap((person) => person.groups);
console.log(groups);
```

In the example, the method is called on each person object, but the function returns an array which is then combined with the other arrays returned into a single array (merge).
Here map would return `[['admin','user'],['editor']`, but flatMap flattens it into `['admin','user','editor']`

> This does not mutate the array in any way.

### The reduce method

The **_reduce_** method takes a function of two parameters. The first is the array element and the second is an accumulator variable which gets passed to each function along with the array element.  
The accumulator value is passed from one function call to the next allowing us to Reduce the array into a single value. The **_reduce_** method returns a single value that is the accumulated result of all of the functions calls on each element of the array.

The **_reduce_** function ignores empty array elements.

```typescript
let vals: number[] = [1, 2, 3, 4, 5];
let sum = vals.reduce((acc, val) => acc + val, 0);
console.log(sum);
```

In the example we are summing up the numbers in an array by adding each number to acc. The initial value of acc is the second parameter to reduce.

Here is a product example (note that for this we set the initial value of accumulator to 1):

```typescript
let vals: number[] = [1, 2, 3, 4, 5];
let product = vals.reduce((acc, val) => acc * val, 1);
console.log(product);
```

For something a little bit more interesting, we can compute some basic statistics on an array.
Note that we can do anything inside the function and any changes we make to the accumulator parameter get passed on to the function call for the next element in the array.

```typescript
let vals = [1, 2, 3, 4, 5];
let max = vals.reduce((acc, val) => Math.max(acc, val), -Infinity);
let min = vals.reduce((acc, val) => Math.min(acc, val), Infinity);
let average = vals.reduce((acc, val) => acc + val, 0) / vals.length;
let stdev = Math.sqrt(
    vals.reduce((acc, val) => {
        return acc + (val - average) ** 2;
    }, 0) / vals.length
);
console.log(min,max,average,stdev);
```

> Notice that without the braces {} the value is returned automatically by the anonymous function (as in min, max, and average above), but with the braces I must explicitly call return (as in stdev above). This is true of all anonymous functions.

We can exclude some values from our count, and also map some values first. Here we are summing up the odd integers in our array vals.

```typescript
let vals = [1, 2, 3, 4, 5];
const sumOdd = vals.reduce((acc, val) => {
    if (val % 2) return acc + val;
    else return acc;
}, 0);
console.log(sumOdd);
```

Even though we are supposed to return a single value, that value can be a complex object. Here we compute all the statistics in a single pass through the array.

```typescript
let vals = [1, 2, 3, 4, 5];

interface Stats {
    max: number;
    min: number;
    average: number;
    stdev: number;
}
let stats: Stats = vals.reduce(
    (acc, val) => {
        return {
            max: Math.max(acc.max, val),
            min: Math.min(acc.min, val),
            average: acc.average + val,
            stdev: acc.stdev + (val - acc.average) ** 2,
        };
    },
    {
        max: -Infinity,
        min: Infinity,
        average: 0,
        stdev: 0,
    }
);
console.log(stats);
```

We can even use it to combine map and filter in a single step.

```typescript
let vals=[1,2,3,4,5];
let oddSqrs = vals.reduce((acc: number[], val: number) => {
	if (val%2) return [...acc, val * val];
	else return [...acc];
}, []);
console.log(oddSqrs);
```

This example creates an array of the squares of the odd numbers in the array.

Consider the following array:

| 1   | 4   | 11  | 7   |
| --- | --- | --- | --- |

We will use this function to sum the array.

```typescript
let vals = [1, 2, 3, 4, 5];
let sum = vals.reduce((acc, val) => acc + val, 0);
console.log(sum);
```

The first parameter is our function which takes the accumulator variable and a variable to receive each element of our array. The second parameter is the initial value of the accumulator.

Let's step through the operation of this to make sure we understand what is happening.

On the first call (element with value 1) to our function, the values of the parameters and return value are:

| Variable | Value |
| -------- | ----- |
| Acc      | 0     |
| Val      | 1     |
| Returns  | 1     |

On the second call, the return value of the first call becomes the value of accumulator.

| Variable | Value |
| -------- | ----- |
| Acc      | 1     |
| Val      | 4     |
| Returns  | 5     |

On the third call, the return value of the second call becomes the value of accumulator.

| Variable | Value |
| -------- | ----- |
| Acc      | 5     |
| Val      | 11    |
| Returns  | 16    |

On the fourth call, the return value of the third call becomes the value of the accumulator.

| Variable | Value |
| -------- | ----- |
| Acc      | 16    |
| Val      | 7     |
| Returns  | 23    |

Since we have made calls on each element of the array we are done, and **_reduce_** returns the value returned by the last function call (23 in our example).

There is a variant of the **_reduce_** method that traverses the array in reverse order (i.e. right to left instead of left to right). This method is **_reduceRight_**.

```typescript
let vals = [1, 2, 3, 4, 5];
let sum = vals.reduceRight((acc, val) => acc + val, 0);
console.log(sum);
```

Obviously, for the examples so far, this makes no difference (sum and product are communative), but there are cases wehre it would.

Consider the following:

```typescript
let vals = [1, 2, 3, 4, 5];
let firstEven = vals.reduce((acc: number, val) => {
    if (val % 2 === 0 && acc === 0) return val;
    else return acc;
}, 0);
console.log(firstEven);
```

This returns the first even number. If we use reduceRight instead of reduce, it would return the last even number in the list.

```typescript
let vals = [1, 2, 3, 4, 5];
let lastEven = vals.reduceRight((acc: number, val) => {
    if (val % 2 === 0 && acc === 0) return val;
    else return acc;
}, 0);
console.log(lastEven);
```

> This does not mutate the array in any way.

### The sort method

With no arguments, **_sort_** returns the elments in the array in ascending or alphabetical order.

```typescript
let vals = [3, 2, 1, 4, 5];
vals.sort();
console.log(vals);
```

If we provide a comparison function, we can define the sort order. The function should return:

-   positive if the first value comes second in the sort order.
-   negative if the first value comes after the second value.
-   0 if the values are the same.

```typescript
let vals = [1, 3, 2, 6, 5, 4];
//make a clone since sort is destructive
let vals2 = Array.from(vals);
const ascending = vals.sort((a, b) => a - b);
const descending = vals2.sort((a, b) => b - a);
console.log(ascending);
console.log(descending);
```

Since we pass a function, we can sort arrays of complex objects or classes in any way we wish.

> NOTE: This method is destructive and overwrites the array. If you don't want this to happen, you have to clone the array first.

## Summary

**_High order methods_** are methods where we pass a function as an argument, or return a function. Specifically, we examined a number of **_high order methods_** for working with arrays of objects. These methods provide convenient, concise, and clear ways to handle various tasks which we might wish to accomplish on arrays.

# Next Step

Next we'll learn see how we could re-implement these higher-order methods ourselves in [Implementation of Higher Order Methods &raquo;](./implementation.md)

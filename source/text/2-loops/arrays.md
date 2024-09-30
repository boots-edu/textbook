---
layout: default
title: Arrays
nav_order: 2.2
parent: Loops and Arrays
---

# Arrays

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

An array is an ordered list of values of the same type where each element in the array can be accessed using its index.

## Overview
Arrays are an extremely important data structure because they allow us to store a collection of objects.  We can build arrays out of any built-in or user-defined type we want, including out of other arrays.

In Typescript, the size of the array does not need to be defined.  It will grow as necessary to hold the data placed into it (NOT TRUE IN C or C++).

Each element in the array has an index (starting at 0) which we can use to access the individual elements 
> i.e. if an array has 10 elements, the indexes would be 0-9.

## Defining Arrays
In typescript we define an array just like any other variable

```typescript
//define a single string containing the value Lisa
let name:string="Lisa";

//define an array of strings containing the values
//Lisa, Kaitlin and John
let names:string[]=["Lisa","Kaitlin","John"];
```
{: .no-run}

> Note that we type the variable as an array of strings by using the type string[] where [] specifies that we are creating an array of that type.

## Using Arrays
Consider the following declaration of the variable ***names***.  It's type denotes an array of strings, and we initialize that array with three elements, the strings "Lisa", "Kaitlin", and "John".  The array has 3 elements, so it will have indices ```0, 1, and 2```.  When the code accesses the element with index 1, it is requesting the second element in the array (Kaitlin) and thus the following code will print out the string ***Kaitlin***.

```typescript
//define an array of strings containing the values
//Lisa, Kaitlin and John
let names:string[]=["Lisa","Kaitlin","John"];
console.log(names[1]);
```

Since we can access an element of the array by its index, we can also modify that value using the index.

```typescript
//define an array of strings containing the values
//Lisa, Kaitlin and John
let names:string[]=["Lisa","Kaitlin","John"];
names[1]="Jan";
console.log(names[1]);
```

We would expect this code to print out ***Jan***. Initially, the second element is ***Kaitlin***, but the second line replaces the string in position 2 with ***Jan***.  When we then access the second element of the array to display it, we get the updated value from the array at that position.


## Array Methods and Properties
There are a number of methods that operate on arrays.  We will cover some of the simple ones here.  These should allow us to add elements, remove elements, and otherwise modify an array.
> The idea of an object (like an array) having its own methods which operate on it will be central to our discussion of object oriented programming later in the text.

### The length property
We can get the current number of elements in an array by using the length property:

```typescript
let fruits: string[] = ["apple","banana","orange"];
let size: number=fruits.length;
console.log(size); // 
```

> Note that length is NOT a function, but rather it is a property of the array so we don't use ().  

### The push method
Using ***push*** we can add elements to the end of an array:

```typescript
let fruits: string[] = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);  //Output: ["apple", "banana", "orange"]
```

> Note the ***.*** notation.  We will learn more about this later.

### The pop method
Using ***pop*** we can remove elmeents from the end of an array.  The ***pop*** method not only removes the last element, but it returns that value from the pop function.

```typescript
let fruits: string[] = ["apple", "banana","orange"];
let last=fruits.pop();
console.log(fruits);   // Output: ["apple", "banana"];
console.log(last);     // Output: orange
```

### The shift/unshift methods
Analogous to push and pop, ***shift*** and ***unshift*** work on the front of the list.  

```typescript
let fruits: string[] = ["apple", "banana"];
fruits.unshift("orange");
console.log(fruits);    // Output: ["orange","apple", "banana"];
let first=fruits.shift();
console.log(fruits);    // Output: ["apple", "banana"];
console.log(first);     // Output: orange
```

> Note: Adding or removing to/from the front of a list or array is generally inefficient compared to working on the end of the list.  This largely depends on the implementation of arrays, but is generally true.

### The splice method
The ***splice*** method gives us a mechanism for editing the middle of an array.  With the ***splice*** method, we can remove, replace, or insert elements in the middle of an array.

```typescript
array.splice(index,[howMany],[element1],[..., elementN]);
```
{: .no-run}

* index: The array index at which to start changing the array
* howMany: The number of array elements to remove starting at index, defaults to all of them if no value is passed.
* element1…elementN: 0 or more elements to add to the array at the index.

If we only use the first parameter which is required, splice will remove that element and all elements after it from the array.  It also returns what was removed.

```typescript
let fruits: string[] = ["apple", "banana","orange","grape","mango"];
let removed=fruits.splice(2);
console.log(fruits);    //["apple", "banana"];
console.log(removed);   //["orange", "grape", "mango"];
```

If we set the second argument, then splice only removes that number of items:

```typescript
let fruits: string[] = ["apple", "banana","orange","grape","mango"];
let removed=fruits.splice(2,2);
console.log(fruits);  //["apple", "banana", "mango"]
console.log(removed); //["orange", "grape"]
```

Any additional arguments will be added to the array at the index provided after the deletion has been completed.

```typescript
let fruits: string[] = ["apple", "banana","orange","grape","mango"];
let removed=fruits.splice(2,1,"pear","kiwi");
console.log(fruits);  //["apple", "banana", "pear", "kiwi", "grape", "mango"]
console.log(removed); //["orange"]
```

Finally, if we pass 0 as the second argument, then splice simply inserts element0,...,elementN into the array at the index position:

```typescript
let fruits: string[] = ["apple", "banana","orange"];
let removed=fruits.splice(2,0,"pear","kiwi");
console.log(fruits);  //["apple", "banana", "pear", "kiwi", "orange"]
console.log(removed); //[]
```

## Merging Arrays
There are a number of ways to merge arrays in typescript, but one of the simplest is to use the ***spread*** operator (three dots ```...```).  The spread operator extracts the elements of the array.  This allows the elements to be combined into a new array.  

```typescript
let fruits: string[] = ["apple", "banana","orange"];
let vegies: string[] = ["carrot", "potato"];
let allFood: string[] = [...fruits, ...vegies];
console.log(allFood);   //["apple", "banana", "orange", "carrot", "potato"]
```

> The spread operator can be used any time you need to extract the elements of an array.

## Arrays of arrays
Since arrays are just collections of objects, and arrays are themselves objects, we can build arrays out of other arrays, thus creating multi-dimensional arrays.  Consider the example:

```typescript
let fruits: string[] = ["apple", "banana","orange"];
let vegies: string[] = ["carrot", "potato"];
let allFood: string[][] = [fruits, vegies];
console.log(allFood);   //[["apple", "banana", "orange"], ["carrot", "potato"]]
```

In this example *allFood* is an array of string arrays containing two elements.

* Each element is an array of strings
  * allFood[0] has 3 string elements
  * allFood[1] has 2 string elements

## More to see
There are many other methods for manipulating arrays.  We will cover many of these in later chapters.  This set should be sufficient for the time being.

## Specialized loops for working with arrays
One important use of loops is to iterate through the elements of an array.  We can certainly do this using our existing knowledge of loops and arrays.

```typescript
let fruits: string[] = ["apple", "banana","orange"];
let size:number=fruits.length;
for (let i = 0; i < size; i++){
  console.log(fruits[i]);
}
```

This works and is perfectly acceptible, but there is a special version of the ***for loop*** which can be used to iterate through the elements of an array.

We can use this other version called a ***for..of loop*** to automatically iterate through the array.

```typescript
let fruits: string[] = ["apple","banana","orange"];
for (let fruit of fruits){
  console.log(fruit);
}
```

This is much cleaner, doesn't require getting the length of the array, and accesses every element in order just like the previous version.

> It is common to use the ***for..of loop*** syntax when iterating through the elements of an array.

## Summary
Arrays provide a simple data structure to store collections of objects.  These objects can be simple types (string, boolean, number), or complex types including other arrays.  We can access elements in the array by their index which is 0 based (i.e. 0 is first element).  There are also a number of functions to mutate the array by adding and removing elements to the back, front, or middle of an array.  Array elements can be extracted from an array using the spread (...) operator.  A special version of the for loop (for..of) can be used to automatically iterate through the elements of an array.

# Next Step

Next we'll learn about Data Classes: [Data Classes &raquo;](../3-dataclass/index.md)
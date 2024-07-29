---
layout: default
title: Annoymous Functions
nav_order: 8.3
parent: Testing
---

# Annoymous Functions
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
A function that is declared with no name is an ***anonymous function***.

## Normal functions
Normally, when we create a function or method, we define it with a name that we can use to reference it (call it) later.
```
function MyName(a:number,b:number):number{
	return a+b;
}
class MyClass{
	MyName(a:number,b:number):number{
		return a+b;
	}
}
```
We can then call or reference that method by its defined name
```
let a=MyName(1,2);
let b=new MyClass().MyName(1,2);
```
This is normal and a reasonable way to access methods and function in any programming language.
Sometimes, however, we just need a function right where we want to use it, and it is easier to be able to provide the function, rather than declare it elsewhere. 

## Anonymous functions
We have already seen this in our jest tests in both the describe method and the test method.  
Let’s take a closer look at the second parameter to the describe and test methods.
```
describe('Test Name',()=>{
	test('Test MyName',()=>{
		let a=MyName(1,2);
		expect(a).toBe(3);
	});
	test('Test MyClass',()=>{
		let b=new MyClass().MyName(1,2);
		expect(b).toBe(3);
	});
});
```
This parameter is an anonymous function.  It is a function that takes no arguments, and contains the statements inside the {} block.
> NOTE: We are not calling this method, we are just passing it in as an argument to describe or test.

We could do this the hard way, and create a named function and pass that as the second parameter, but we are only using it once, and it is much easier to see what is going on this way.
Anonymous functions behave like any other function.  We can declare them, call them, and pass them around as parameters to functions.  Functions in typescript are what is referred to as ***first class objects***.

### Syntax
Let’s look at the overall structure of an anonymous function: 
![](../../assets/images/anon_1.jpg)

So what can we do with this:
* We have already seen that we can pass it as a parameter to another method as in “describe” and “test”
* Many methods in typescript can take a function as a parameter including filter, map, find, reduce, etc.  We can use anonymous functions there as well.
* Since functions are first class objects, we can also store them in variables (i.e. function as value)

### Example
Let’s look at an example of removing negative values from a list.  
We already know how to do this with a for loop.
We can iterate through the list, adding non-negative numbers to a new list, which we then return.  
```
let arr:number[]=[1,-2,3,-4,5];

function removeNegativesFor():number[]{
	const newArr:number[]=[];
	for (let num of arr){
		if(num>=0){
			newArr.push(num);
		}
	}
	return newArr
}
```
There is another way to accomplish this using the typescript Array.filter method
```
let arr:number[]=[1,-2,3,-4,5];
function removeNegatives():number[]{
	return arr.filter((x:number)=>{
		return x>=0
	});
}
```
The filter method takes a function that returns true if we want the value included in the returned list, and false if we want it removed from the list.
Here the anonymous function is: ```(x:number)=>{return x>=0}```.
Now we can use filter to filter any list by providing such a method to specify what we want in the list.

If an anonymous function only contains a single statement that returns a value, then we can shorten this syntax by removing the braces and the return.
Now the anonymous function is: ```(x:number)=>x>=0```
This gives a clean concise way to pass around simple methods without naming them.
```typescript
let arr:number[]=[1,-2,3,-4,5];
function removeNegatives():number[]{
	return arr.filter((x:number)=>x>=0);
}
console.log(removeNegatives());
```

But wait, there’s more.
## First Class Objects
Being ***first class objects*** functions can be used in many places.

* As a paramter to methods

```typescript
function removeNegatives():number[]{
	return arr.filter((x:number)=>x>=0);
}
```

* As the value of a variable or class property

```typescript
let f:(z:number)=>boolean=(x:number)=>x>=0;
```

* As the return value of a function
```typescript
function getGTFunction(num:number):(x:number)=>boolean{
	return (x:number)=>x>num;
}
```

## Functions have types
A function type is defined by its parameters and return type
We can define variables to be of that type, then store functions in that variable.

```typescript
let f:(x:number)=>Boolean
f=(x:number)=>x>=0;
```

We can them call those functions just like we would if they were defined with a name.

```typescript
let f:(x:number)=>boolean=(x:number)=>x>=0;
let b=f(4);
let c=f(-4)
```
We can even declare a type to use for our functions.

```typescript
declare type ChkFunction=(x:number)=>boolean;
let f:ChkFunction=(x:number)=>x>=0;
```

## Summary

***Annonymous functions*** are a useful shortcut for passing functionality around a program, either as a variable, a parameter, or a return value.  They are typed by the types of their parameters and return value.

# Next Step

Next we'll start to learn about web programming: [Introduction to Webz &raquo;](../9-webz-intro/index.md)
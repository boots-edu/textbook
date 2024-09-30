---
layout: default
title: Union Types
nav_order: 11.3
parent: Advanced Typescript
---

# Union Types
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
***Union types*** are a way of declaring a variable that can hold values of two or more different types.

## Combining types in Typescript
We know we can declare new types in typescript by creating classes and interfaces, and we can use these types in our programs.
What if we don't know the type, but we know that it one of a finite number of types:
* It could be a number or a string
* It could be a class instance or null

We can combine types into a new either/or type by creating a ***union type***.
When a variable is declared as a ***union type***, it can take on either type of value, but the value must be one of those types.

Imagine we want to create a function that pads a string on the left.

We might want it to take a string to prepend
```typescript
function padString(value:string,padding:string){
	return padding+value;
}
```
We might want it to take a number and add that many spaces to the front
```typescript
function padString2(value:string,padding:number){
	return Array(padding + 1).join(" ") + value;
}
```

It would be great if we could combine these into one function, but not allow invalid types.  

We can use a ***union type*** to combine the signatures Then check the type of padding and act accordingly:
```typescript
function padString(value:string,padding:string|number){
	if(typeof padding === "number"){
		return Array(padding + 1).join(" ") + value;
	}
	return padding+value;
}
console.log("Answer: "+padString("World",6));
console.log("Answer: "+padString("World","Hello "));
```
We can apply this to other types as well.  Classes, interfaces, etc.

## Union types with classes
Consider these classes:
```typescript
class Tiger{
	name:string="Tony";
	getDetails():string{
		return this.name + " is a tiger";
	}
	eat(){
		console.log("Yum");
	}
}
class Tree{
	name:string="Kevin";
	height:number=100;
	getDetails():string{
		return this.name + " is " + this.height + " feet tall";
	}
}

let whatisit:Tree|Tiger;
whatisit=new Tree();
console.log(whatisit.name);
console.log(whatisit.getDetails());
```

We can unino these classes together and through the variable *whatisit*, we can access any members that both *Tree* and *Tiger* share in common.

> We cannot access members that are not shared in common through the variable because its type only supports members that are in both.

## Type Aliases
We can create a ***Type Alias*** to combine types, then use our type alias in our programs to represent the union type.
```typescript
class Tiger{
	name:string="Tony";
	getDetails():string{
		return this.name + " is a tiger";
	}
	eat(){
		console.log("Yum");
	}
}
class Tree{
	name:string="Kevin";
	height:number=100;
	getDetails():string{
		return this.name + " is " + this.height + " feet tall";
	}
}
declare type ThingsThatStartWithT=Tree|Tiger;
let whatisit:ThingsThatStartWithT;
whatisit=new Tree();
console.log(whatisit.name);
```
The declared type ***ThingsThatStartWithT*** can be used like any other type, but it represents the ***union type*** of combining *Tiger* and *Tree*.

## Summary
A simple way to combine the functionality of multiple types is a ***Union Type***.  ***Union Types*** represent an either/or relationship.  Variables defined as a ***union type*** can be any of the types in the statement and get any properties or methods that are shared between all of the types in the statement.
 
# Next Step

Next we'll learn about higher order methods  [Higher Order Methods &raquo;](../12-high-order-methods/index.md)
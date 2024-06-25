---
layout: default
title: Functions
nav_order: 1.3
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


__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

For now, we will discuss functions as named blocks of code.  Later we will learn how to create  _anonymous functions_  which do not have a name, but for this review, functions will have names.

We  _declare_  a function in typescript by specifying its name, its parameters (these are just local variables that we can set the value of when we call the function), and its return type.  We also include the code that we want to execute.

Once declared, we can use (call) that function anywhere in our code to execute it without worrying about the code inside.  As long as we know how to call it and the meaning of what it returns, we can use it.

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__An example function in Typescript__

__function areaOfCircle(radius: number):number{__

__let pi:number=3.1415927;__

__return pi*radius*radius;__

__}__

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__An example function in Typescript__

_A comma separated list of parameters and their types_

_This is the name of the function_

_Stand alone functions start with the function keyword_

__function areaOfCircle(radius: number):number{__

__let pi:number=3.1415927;__

__return pi*radius*radius;__

__}__

_The return value of the function_

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__An example function in Typescript__

_This is the name of the function_

__function areaOfCircle(radius: number):number{__

__let pi:number=3.1415927;__

__return pi*radius*radius;__

__}__

_The code that makes up the function goes inside_

_In typescript (and many other languages, we specify the start and end of blocks of code with braces_

_We specify what the function returns with the return statement_

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__We can call this function from anywhere in our code by using its name.__

__let myArea:number=areaOfCircle(2);__

This code will call our functionSubstituting 2 for the parameterradius, then return the calculationand store it in the variable myArea.

function areaOfCircle(radius: number):number{

let pi:number=3.1415927;

return pi*radius*radius;

}

Next we'll review [Conditionals &raquo;](../1-introduction/conditionals.md)
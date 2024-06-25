---
layout: default
title: Conditionals
nav_order: 1.3
parent: Introduction
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


__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value \(truthiness\) of some boolean expression\.

* In typescript\, the most common conditional is the  __if __ statement\.
  * The if statement evaluates it an expression and executes the code inside the if statement only if that expression is true\.
  * The if statement can have an else branch\.  The else branch is only executed if the expression evaluates to false\.
* Using if statements we can execute different code based on the values of variables at run time\, allowing us to create programs that are reactive to different states as the program runs\.

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value \(truthiness\) of some boolean expression\.

* Consider the case of a program that asks the user their year\.
  * If they are not a senior\, the program registers them for next semester\.
  * If they are a senior it does not\.

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value \(truthiness\) of some boolean expression\.

function registerForClasses\(year:string\)\{

if \(year\!=="senior"\)\{

//register for classes

\}

\}

__Aside: Boolean expressions__

* Equality and inequality
  * X===Y\.  X and Y are equal
  * X\!==Y\, X and Y are not equal
  * X<Y\, x is less than Y
  * X>Y x is greater than Y
  * X>=Y\, x is greater than or equal to Y
  * X<=Y\, X is less than or equal to Y

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value \(truthiness\) of some boolean expression\.

Now suppose instead of doing nothing special when the user enters senior\, we want to send them an invitation to graduation\.

We can handle this with an  __else __ branch on our if statement\.

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value \(truthiness\) of some boolean expression\.

function registerForClasses\(year:string\)\{

if \(year\!=="senior"\)\{

console\.log\("You must register for classes"\);

\}else\{

console\.log\("Come to graduation"\);

\}

\}

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* The string type is a primitive data type in Typescript\.  We can declare a variable to be of type string directly:
  * let username:string=“gauss”;
* There are several functions which we can use to operate on strings in Typescript\.
* We will look at some of the most common ones briefly

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* Assume the string let myStr:string=“Hello World”;
* __charAt__  __\(\): __ This method will return character at the specified index\.
  * myStr\.charAt\(2\); //this will return an l \(the third character at index 2\)
* __indexOf__  __\(\):__  It will return the index\. first occurrence of specified value else \-1 if not found\.
  * myStr\.indexOf\(“o”\); //this will return a 4
* __lastIndexOf__  __\(\):__  It will return index\, last occurrence of specified value else \-1 if not found\.
  * myStr\.lastIndexOf\(“o”\); //this will return 7

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* Assume the string let myStr1:string=“Hello”;
* Assume the string let myStr2:string=“World”;
* __concat__  __\(\):__  This method will combine the two separate string and return that combined string\.
  * myStr1\.concat\(myStr2\); //returns “HelloWorld”
  * myStr1\.concat\(“ “\,myStr2\); //returns “Hello World”
  * myStr2\.concat\(myStr1\); //returns “WorldHello”
  * myStr2\.concat\(“\,”\,myStr1\); //returns “World\,Hello”

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* Assume the string let myStr:string=“Hello World”;
* __slice\(\):__  Extract the specified string and return a new string \(does not modify string\)\.
  * myStr\.slice\(2\); //returns “llo World”
  * myStr\.slice\(2\,5\); //returns “llo”
  * _Note: the first parameter is the index of the first character to return\, and the second is the index of the first character NOT returned\._

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* Assume the string let myStr=“Hello World”;
* __split\(\):__  Splits the specified String object into an array of strings\.
  * myStr\.split\(“ “\); //returns the array \[“Hello”\,”World”\]
* __substring\(\):__  Returns character of string between two define indexes\.
  * myStr\.substring\(2\); // returns “llo World”
  * myStr\.substring\(2\,5\); // returns “llo”
  * _Note: the first parameter is the index of the first character to return\, and the second is the index of the first character NOT returned\._

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* Assume the string let myStr=“Hello World”;
* toLowerCase\(\): This method convert the string into lowercase\.
  * myStr\.toLowerCase\(\); //returns “hello world”
* toUpperCase\(\): This method convert the string into uppercase\.
  * myStr\.toUpperCase\(\); //returns “HELLO WORLD”

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

* What if the string contains a number and we want to convert it to a number type?
  * let myNumStr:string=“42”;
  * let myNum:number=parseInt\(myNumStr\); //this function does the trick
  * Let myNum2:number=\+myNumStr; //this also works\, but is less explicit
* If myNumStr did not contain a valid number\, the parseInt function would return NaN to specify “Not a number”
* If we want to go the other way
  * Let myNum:number=42;
  * Let myNumStr:string=myNum\.toString\(\);

__Strings in Typescript:  __

In TypeScript\, the string is sequence of char values used to store text data

There are MANY other methods available to the string type\, but these are some of the more useful and common\.  Some other useful ones we will not cover in detail here are:

startsWith/endsWith

includes

padStart/padEnd

replace/replaceAll

search

trim/trimStart/trimEnd

![](../../images/CISC181-Week%2013.jpg)

__More on Boolean Expressions:  __

A Boolean  __expression__  is an expression that evaluates to either  __true__  or  __false__

* So far we have looked at comparison operators which can form Boolean expressions
  * ===\,\!==\,\<=\,>=\,\<\,>
    * For example\,  _happiness>=7_  evaluates to true if the value of the variable happiness is 7 or more
    * luckiness>7 evaluates to true if the value of the variable luckiness is more than 7
  * We can use Boolean operators for and \(&&\)\, or \(||\) to combine many of these Boolean expressions into a single expression\.

__More on Boolean Expressions:  __

A Boolean  __expression__  is an expression that evaluates to either  __true__  or  __false__

* We can use Boolean operators for and \(&&\)\, or \(||\) to combine many of these Boolean expressions into a single expression\.
  * let happyLucky:boolean=\(happiness>=7 && luckiness>7\);
    * Sets happyLucky to true when both conditions are true
  * let happyOrLucky:boolean=\(happiness>=7 || luckiness>7\);
    * Sets happyOrLucky to true when at least one of the conditions is true
* __Note: Just think of this in words\.  A and B implies both\.  A or B implies either\. __

__More on Boolean Expressions:  __

A Boolean  __expression__  is an expression that evaluates to either  __true__  or  __false__

* An additional Boolean operator that we have available is the not \(\!\) operator
  * Unlike the other operator\, this operator simply negates whatever comes next\.
    * \!A && B  // true when A is false and B is true
    * \!\(A && B\) // true when at least one of A and B are false
    * \!A || \!B // true when at least one of A and B are false \(DeMorgan's Law\)
    * \!\(A && B\) || C // true when at least one of A and B are false or any time C is true
* By using a combination of comparison operators\, logical connectors\, and nots we can build complex logic to test state to use in conditionals and loops…

# Summary

# Next Up

Now onto the next chapter: [Loops and Arrays &raquo;](../2-loops/index.md)
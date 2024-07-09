---
layout: default
title: Naming
nav_order: 7.3
parent: Exceptions and Code Quality
---

# Naming
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
Naming elements in a way that we can tell what type of thing/data the element is/contains makes code more readable.
## What's in a name?
Consider the following class:
```
class A {
  constructor(public X: string,public Y:number) {}
}
```

* What do objects of this class represent?
* Can we tell what it is and when to use it?
* Do we know what the parameters represent?
* What is its purpose, why does it exist?

Rewritten with meaningful names:
```
class Person {
  constructor(public name: string,public age:number) {}
}
```
* Now it is clear what this class represents.
* It is clear what the meaning of the parameters are
* It is clear why this class exists and when we would use it.
* It’s not that hard to do it right.

A more complex example
```
class Jane {
	constructor(
		public lisa: number,
		public bill: number,
	) {}
	f(): string {
		return `${this.lisa}e${this.bill}`;
	}
	g(other: Jane): Jane {
		if (this.bill === other.bill) {
			return new Jane(this.lisa + other.lisa, this.bill);
		} else {
			const expDiff = Math.abs(this.bill - other.bill);
			if (this.bill > other.bill) {
			  return new Jane(
				this.lisa + other.lisa * Math.pow(10, expDiff),
				this.bill,
			  );
			} else {
			  return new Jane(
				this.lisa * Math.pow(10, expDiff) + other.lisa,
					this.bill,
			  );
			}
		}
	}
}

```
* What does Jane represent
* What does f do?
* What does g do?
* Why did someone write this?

While a somewhat extreme example, bad naming is quite common, and makes no sense to do.

A much better code block with proper naming makes things clear:
```
class RealNumber {
	constructor(
		public integer: number,
		public exponent: number,
	) {}
	toString(): string {
		return `${this.integer}e${this.exponent}`;
	}
	add(other: RealNumber): RealNumber {
		if (this.exponent === other.exponent) {
			return new RealNumber(this.integer + other.integer, this.exponent);
		} else {
			const expDiff = Math.abs(this.exponent - other.exponent);
			if (this.exponent > other.exponent) {
				return new RealNumber(
					this.integer + other.integer * Math.pow(10, expDiff),
					this.exponent,
				);
			} else {
				return new RealNumber(
					this.integer * Math.pow(10, expDiff) + other.integer,
					this.exponent,
				);
			}
		}
	}
}
```
* It’s clear what the class represents
* It’s clear what toString does
* It’s clear what add does
* It’s clear what this is for.


## Summary
When writing code, choosing good names that represent the objects or purpose of classes, variables, or functions makes it possible to figure out what the code does and makes it easier to maintain and use.

# Next Step

Next we'll learn about some general practices to improve code quality: [General Code Quality &raquo;](../7-exceptions_code_qual/general.md)
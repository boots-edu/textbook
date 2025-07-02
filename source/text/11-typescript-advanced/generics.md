---
layout: default
title: TypeScript Generics
nav_order: 11.1
parent: Advanced TypeScript
---

# TypeScript Generics

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

**_Generics_** allow for creation of reusable code that where internal types can be specified externally.

## Generics in TypeScript

In the last chapter we discussed the Webz _Notifier_ class. This class was a **_generic_** class that we could pass **_type parameters_** to during creation.

{: .no-run}

```typescript
event: Notifier = new Notifier();
event2: Notifier<number> = new Notifier<number>();
event3: Notifier<string> = new Notifier<string>();
event4: Notifier<SomeClass> = new Notifier<SomeClass>();
event5: Notifier<string[]> = new Notifier<string[]>();
```

This is a single class definition that works on any type of data. We can make our own generic functions, classes, interfaces, or type aliases by creating them with one or more **_type parameters_** that can be specified by the caller. Overall, this allows us to create reusable code that works on various types of data.

## Motivation

Consider the following simple method.

```typescript
function printNumberResult(result: number) {
    console.log("Result: " + result);
}
printNumberResult(5);
```

This method prints _Result: 5_ when called with a parameter of 5. What if we wanted to allow other types of data to be printed? One solution would be to write another function.

```typescript
function printStringResult(result: string) {
    console.log("Result: " + result);
}
printStringResult("Hello World");
```

While we could write different functions for each type we wish to support, it would be better if we could right a single method for all of them. Let's examine this code further:

## Generic Functions

We know `console.log(...)` will print anything, so the only issue here is that our method expects a number. We can make this function a **_generic_** by adding a **_type parameter_** and using it as the type of the result parameter.

```typescript
function printResult<T>(result: T) {
    console.log("Result: " + result);
}
printResult<number>(5);
printResult<string>("Hello World");
```

Here we have added a **_type parameter_** (T), and we use that paramter to set type type of the function's parameter (result). When we call our function, we can specify the type of the data when we call it.

It turns out that TypeScript can _infer_ the type from the parameter, so we can leave it out when we call the function (However it is not incorrect to include it).

```typescript
function printResult<T>(result: T) {
    console.log("Result: " + result);
}
printResult(5);
printResult("Hello World");
```

We are not limited to a single type parameter. If we need more than one, we can specify multiple type parameters.

```typescript
function makePair<T, S>(x: T, y: S): [T, S] {
    return [x, y];
}
const result = makePair<number, string>(1, "hello");
console.log(result);
```

The important point here is that the type checking occurs at compile time (not at run time). If we call it with the wrong arguments...

```typescript
function makePair<T, S>(x: T, y: S): [T, S] {
    return [x, y];
}
const result = makePair<number, string>("hello", 1);
console.log(result);
```

... you will get compiler errors. Try it and you will see the errors in the console.

> It is much easier to fix compiler errors where the compiler gives us a line number and description then it is to fix run time errors where the program either crashes, or just gives the wrong answer.

### Controlling types

We can limit the types that are acceptable as a type parameter by using the extends keyword. In this example, the first parameter must be a string or a number, but the second parameter can be any type.

```typescript
function makePair<T extends string | number, S>(x: T, y: S): [T, S] {
    return [x, y];
}
console.log(makePair(4, ["Hello"]));
```

> Note: `string \| number` is referred to as a **_Union Type_** which we will talk more about later, but basically we can combine types with a \| and then either type would be acceptable.

If we use _extends_ with a class type, we could use elements of that class or any class that derives from the class specified in the **_type parameter's_** extends clause.

```typescript
class Shoe {
    constructor(public size: number) {}
}
class Sneaker extends Shoe {
    constructor(size: number, private sport: string) {
        super(size);
    }
}
class Boot extends Shoe {
    constructor(size: number, private height: number) {
        super(size);
    }
}
function getShowSize<T extends Shoe>(shoe: T): number {
    return shoe.size;
}
console.log(getShowSize(new Boot(10, 14)));
```

Note: We could do this without a generic if we made the parameter type `Shoe` as it would accept the derived classes. In this case either method is ok, but there are places where a generic is a better solution.

## Generic Classes

Just like functions, we can use generics for classes as well. Let's consider a class for a list of numbers:

```typescript
class ItemList {
    public items: number[] = [];
    constructor() {}
    addItem(item: number): void {
        this.items.push(item);
    }
}
const list: ItemList = new ItemList();
list.addItem(4);
console.log(list);
```

What if we wanted to extend this so it worked on a list of any type, even a list of lists.
We could use a generic definition to make ItemList work on any type, and not just on numbers
As always we can limit the acceptable types using the extend keyword.

```typescript
class ItemList<T> {
    public items: T[] = [];
    constructor() {}
    addItem(item: T): void {
        this.items.push(item);
    }
}
const list: ItemList<number> = new ItemList<number>();
list.addItem(4);
const list2: ItemList<string> = new ItemList<string>();
list2.addItem("hello");
const list3: ItemList<string[]> = new ItemList<string[]>();
list3.addItem(["Hello", "World"]);
console.log(list);
console.log(list2);
console.log(list3);
```

Note: T is defined on the class, and we can use it within the class as the type of any method parameter, return value, or member variable.

We can create a homogeneous list of anything by specifying the type of object the list contains with a **_type parameter_**.
Now we have created a class that works on any data, instead of just on numbers.
We can even add additional type parameters to the methods within our class to make them more reusable.

### Default Types

Finally, we can provide a default value for our generic to describe how it behaves if no type parameter is provided:

```typescript
class ItemList<T = number> {
    public items: T[] = [];
    constructor() {}
    addItem(item: T): void {
        this.items.push(item);
    }
}
const list: ItemList = new ItemList();
list.addItem(4);
const list2: ItemList<string> = new ItemList<string>();
list2.addItem("hello");
const list3: ItemList<string[]> = new ItemList<string[]>();
list3.addItem(["Hello", "World"]);
console.log(list, list2, list3);
```

If a parameter is provided, the default is ignored.
If no parameter is provided, then the type must match the default if we use the class (i.e. we must pass a number, anything else will cause a type error at compile time).

## Inside the Webz Notifier class

Let's return to the Webz `Notifier` class and look at the source code for it.

{: .no-run}

```typescript
export class Notifier<T = void> {
    constructor() {}
    subscribe(callback: (value: T) => void, error?: (value: Error) => void) {
        //something goes here
    }
    unsubscribe(id: number) {
        //something goes here
    }
    notify(value: T) {
        //something goes here
    }
    error(value: Error) {
        //something goes here
    }
}
```

-   `T` defaults to `void` if no parameter is provided.
-   `subscribe` takes a function whose parameter has type `T`.
-   `notify` takes a value of type `T`

This is as expected when you consider how we used `Notifier` previously.

-   With no type argument its data is `void` (nothing)
-   With a type parameter, the type it works with is the value specified for `T`.

## Summary

Using **_generics_**, we can create more reusable code by allowing our code to work on many different types of data. We can apply this technique to classes and methods so that our code works on various types of data.

# Next Step

Next we'll learn about interfaces [TypeScript Interfaces &raquo;](./interfaces.md)

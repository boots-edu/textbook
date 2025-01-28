---
layout: default
title: Data Classes Introduction
nav_order: 3.1
parent: Data Classes
---

# Data Class Introduction

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

**_Data Classes_** allow us to combine data into a grouping or class and use that grouping as a data type in our programs.

## Complex Types

If we wish to combine data into a more complex type that represents the combination of various related data items, then there are two methods available to us in Typescript

-   **The interface**
    -   Interfaces describe the data that goes into an object and its types, but do not provide default values, or any additional logic.
-   **The class**
    -   Classes also describe the data that goes into an object, but provide a mechanism to set default values, construct the objects dynamically, and even define methods to operate on the internal data.

> We will discuss interfaces and how and when to use them, later in the text. For the time being we will focus on classes, and specifically **_Data Classes_**.

## Classes in Typescript

To declare a class in typescript, we use the `class` keyword. The structure of a class internally is a set of data objects that make up the class.

```typescript
class MyType {
    //list of variables and types
    //constructor method to create an instance
    //0 or more methods which can operate on
    //the member variables in the class
}
```

{: .no-run}

> Remember a class is a definition of a type. You must create an instance of that type in order to use it.
> We can define a variable of our new type and use it.

```typescript
let myObj: MyType = new MyType();
```

{: .no-run}

## Motivation

Some things things belong together as they describe a more complex thing that we want to represent.

As an example, consider a simple drawing program we might want to build.

-   Points have an x and y coordinate which are numbers
-   Lines contain a start and end point
-   Rectangles can be defined by 2 points (opposite corners)
-   Polygons can be defined by an arbitrary list of points (The vertices)
-   Each of these objects may have a color associated with it. (Color itself might contain components for Red, Green, and Blue as numbers.

## Summary

Sometimes it makes sense to group data together. In these cases Typescript provides multiple mechanisms with which to do that. In the section we have introduced the idea of creating a **_class_** that represents a set of heterogeneous data. (i.e. strings, numbers, booleans, arrays, and other classes).

# Next Step

Next we'll learn about creating basic data classes: [Basic Data Classes &raquo;](basic.md)

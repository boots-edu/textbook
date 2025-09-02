---
layout: default
title: This keyword
nav_order: 3.5
parent: Data Classes
---

# The `this` keyword

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

Sometimes we need to access the data inside a **Data class** from inside the constructor.  We can accomplish this by using the `this` keyword.

## Overview

There is a special keyword `this` that can be used from inside the `constructor` (or any method inside the class) that will allow us access to the member variables of the object.

## Abstracting the constructor

Consider our color class

{: .no-run}

```typescript
class Color {
    constructor(
        public red: number,
        public green: number,
        public blue: number
    ) {}
}
```

What if instead of passing in values for `red`, `green`, and `blue`, we wanted to pass in a string (either `"red"`, `"green"`, or `"blue"`) to initialize our color to one of these three colors. We can go back to our original syntax and define the members explicitly, and change our constructor to take a string that is not marked with the `public` or `private` keywords since we only need it to initialize the members.

{: .no-run}

```typescript
class Color {
    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;
    constructor(colorStr: string) {
        //what goes here
    }
}
```

The idea is that we can use the string to determine how to set the members. We can use the **`this`** keyword to access the member variables of the current instance.

```typescript
class Color {
    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;
    constructor(colorStr: string) {
        if (colorStr === "red") {
            this.red = 255;
        } else if (colorStr === "green") {
            this.green = 255;
        } else if (colorStr === "blue") {
            this.blue = 255;
        }
    }
}
console.log(new Color("red"));
console.log(new Color("green"));
console.log(new Color("blue"));
```

Here we can initialize our members indirectly by using the value of the parameter `colorStr`. The **`this`** keyword allows us access to our own members from within the instance. If the string is not recognized (i.e. not `red`, `green`, or `blue`) then the default values of (0, 0, 0) remain which is our intention. We would want to make a comment on our `constructor` that this is the behavior to help users of our class to know how to use it.

## Summary

TypeScript allows the use of the `this` keyword in order to access the members of the current instance of the class. From within the class, using the `this` keyword allows us access to all of the member properties (public or private) within the class instance.

## Chapter Summary

Now we have the ability to create complex data types of our own using the class keyword. These data types can contain any other type of object including another class, a primitive type, or an array. There is no limitation on what the array or embedded class contains (other class objects, arrays of primitives, arrays of other class objects, etc.) We have a special method in our objects called a `constructor`. The `constructor` can be used to initialize our object, or by using the `public` and `private` keywords, it can define members of our object. Parameters without these keywords behave just like parameters to any other function, but with these keywords, that parameter also becomes a member of the object. We can access the members of our class instance using the **`this`** keyword.

# Next Step

Next we'll learn about [generalized classes &raquo;](../4-classes/index.md)

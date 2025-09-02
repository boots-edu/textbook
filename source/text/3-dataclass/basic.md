---
layout: default
title: Basic Data Classes
nav_order: 3.2
parent: Data Classes
---

# Creating Basic Data Classes

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

**_Data Classes_** allow us to combine data into a grouping and use that grouping as a data type in our programs.

## Drawing Program Classes

### Color class

If we examine the objects we have proposed for our drawing program (points, lines, rectangles, polygons, color) we can see that just about everything has a color. The definition for a type that represents color would be useful as then we could group the things that make up a color. For our example we want to store a color as three numbers between 0 and 255 representing the red, green, and blue intensities.

Our class should contain 3 numbers (red, green, and blue). We can define our class as described previously since this contains only the primitive type number.

{: .no-run}

```typescript
class Color {
    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;
}
```

> Note the **_public_** keyword before each member variable (sometimes called a property) of the class. This denotes that the property is accessible by methods and code outside the class. We could also mark it as **_private_** or **_protected_**.

As you can see, our class definition is quite simple. We simply group the three components together and give it a name. We can then create objects of this type with the new keyword.

{: .no-run}

```typescript
let myColor: Color = new Color();
```

And for a full example:

```typescript
class Color {
    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;
}
//We can use our new class to create a color object:
let myColor: Color = new Color();
//Then we can access its public members
myColor.red = 255;
myColor.blue = 128;
myColor.green = 10;
console.log(myColor);
```

> Note: If red, green, and blue had been labeled private, then we could not have accessed them. More on this later in the text.

### Point class

A point requires coordinates, x and y. These are both numbers. It also requires a color if we want points to be displayable (more on this later). We already have a definition for a color, so we can use that to define a point.

```typescript
class Color {
    public red: number = 0;
    public green: number = 0;
    public blue: number = 0;
}
class Point {
    public x: number = 0;
    public y: number = 0;
    public color: Color = new Color();
}
let myPoint: Point = new Point();
myPoint.x = 100;
myPoint.y = 100;
myPoint.color.red = 255;
myPoint.color.blue = 128;
myPoint.color.green = 10;
console.log(myPoint);
```

> Notice that we use the class Color inside of the class Point. This is referred to as **_composition_** and is a critical concept in understanding classes and object-oriented programming.

We can build up complex objects by including other objects inside of them. Now every point will have a position (x, y) and a color contained inside the point itself.

## Summary

Complex objects can be built from simpler ones by creating a **_class_** to represent a new type.

# Next Step

Next we'll learn about [Data Class Constructors &raquo;](constructors.md)

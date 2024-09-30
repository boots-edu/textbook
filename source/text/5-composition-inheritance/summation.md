---
layout: default
title: Putting it all together
nav_order: 5.3
parent: Composition and Inheritance
---

# Putting it all together

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

Using **_Inheritance_**, we can build complex hierarchies of objects in order to define new types that are a **_type of_** some existing type.

## Termiology review

**Composition:**

-   Add a class or array of class as a property to your class.
-   Represents a has a relationship

**Inheritance:**

-   Extend an existing class by adding functionality, but keeping the functionality of the original class.
-   Represents a is a relationship

The class that we are extending is called the **_superclass_** or sometimes the **_base class_** or **_parent class_**
The class that we are creating by extending is called a **_subclass_** or **_child class_**.

## Back to drawing

Is there something most of our objects have in common?

All of the drawing objects (Point, Line, Rectangle, Polygon) have a Color component. If we create a class with just a color component, we could share that definition in all our drawing classes by extending it.

What should we call our new class?

We want something descriptive that supports the **_is a_** relationship with all the other classes. For this example, I will choose to create a class _Drawable_.

```typescript
class Drawable {
    public color: Color;
    constructor(color: Color) {
        this.color = color.clone();
    }
    public clone(): Drawable {
        return new Drawable(this.color);
    }
}
```

{: .no-run}
Here is a simple drawable class. It contains a color (**_composition_**), a clone method, and automatically makes a deep copy of the color object in the constructor.
It just holds our color object, so we will extend this to make all of our other drawables.

```typescript
export class Point extends Drawable {
    constructor(
        public x: number = 0,
        public y: number = 0,
        color: Color = new Color()
    ) {
        super(color);
    }
    clone(): Point {
        return new Point(this.x, this.y, this.color);
    }
}
```

{: .no-run}

Our point class inherits color from the Drawable class. Our Point constructor calls the constructor for our Drawable class and passes it the color so it can do its initialization (all drawables have a color). It does this by passing color to `super`

> Notice, that the public interface is unchanged, but we don't have to worry about the color, the drawable does.

```typescript
class Line extends Drawable {
    public start: Point;
    public end: Point;
    constructor(start: Point, end: Point, color: Color = new Color()) {
        super(color); //Must be first thing in constructor always
        this.start = start.clone();
        this.end = end.clone();
    }
    clone(): Line {
        return new Line(this.start, this.end, this.color);
    }
}
```

{: .no-run}

Our Line class can also inherit from our Drawable class. Again it calls super to initialize the Drawable portion of the object.
Note also that the constructor clones the corner points.
Reminder:

-   Drawable is the **_superclass, base class, parent class_**
-   Line is the **_subclass, child class_**

```typescript
class Polygon extends Drawable{
	public points: Point[],
	constructor(points: Point[], color: Color ) {
		super(color);
		let newPoints=[];
		for (let point of points) {
			newPoints.push(point.clone());
		}
		this.points=newPoints;
	}
	clone(): Polygon {
		return new Polygon(this.points, this.color);
	}
}
```

{: .no-run}

Our polygon class can also inherit from our Drawable class. Again it calls super to initialize the Drawable portion of the object.
Note also that the constructor clones the array of points by cloning each point and pushing them onto a new array before setting the member variable points.

## Deeper hierarchies

We can create deeper hierarchies to express these types of relations.

-   Everyone is a User
-   A Student is a type of User
    _ An undergrad is a type of Student
    _ A Freshman is a type of Undergrad
    Etc.

![](../../assets/images/inheritance_1.jpg)

The point of inheritance is to capture these types of relationships. Be careful that the relationship you are capturing is a **_type of_** relationship as many inexperienced programmers overuse **_inheritance_**, where the relationship really calls for **_composition_**.

-   A point is not a type of color, so we don't derive point from color.
-   An undergraduate is a type of student, so we derive Undergraudate from Student

## Summary

**_Inheritance_** allows us to capture an **_is a_** relationship between two classes. When a class inherits from a **_superclass_**, it gets access to everything in the superclass as well as anything defined within the **_subclass_**. We can use this to build complex deep hierarchies where we can represent complex objects by extending existing classes.

# Chapter Summary

In this chapter we have introduced two ways to build up a class from other classes.

-   If the two classes have an **_has a_** or **_contains_** relationship, then we use **_composition_** by adding member variables to our class of the other classes type. A drawable contains a color by this method.
-   If the two classes have a **_type of_** or **_is a_** relationship, then we use **_inheritance_** by extending one class and inheriting all of its members and functionality. A line is a drawable by this method.

# Next Step

Next we'll learn about Overrides and Polymorphism: [Overrides and Polymorphism &raquo;](../6-polymorphism/index.md)

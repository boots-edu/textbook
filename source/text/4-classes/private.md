---
layout: default
title: Data Hiding
nav_order: 4.2
parent: Classes
---

# Public and Private

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

**_Classes_** allow us to combine data and methods into a grouping or class and use that grouping as a data type in our programs.

## Data Hiding

Consider our `Rectangle` class again:

```typescript
class Rectangle {
    constructor(
        public corner1: Point,
        public corner2: Point,
        public color: Color
    ) {}
}
```

{: .no-run}

We made all of the member variables (properties) public for simplicity, but now we cannot change the internal representation.
Making members `private` hides them from everything outside the class making them inaccessible.  
We can rewrite this class making our `Point` members `private`.

```typescript
class Rectangle {
    constructor(
        private corner1: Point,
        private corner2: Point,
        public color: Color
    ) {}
}
```

{: .no-run}

Nothing changes except we cannot access corner1 and corner2 outside our class, but our methods (`diagonal`, `area`, `perimeter`) that we wrote in the exercise in the previous chapter are fine because they are inside the class.
We can still create a rectangle and call our methods on it, we just can't get the corners any more. If we really need them, we can write methods to get them or change them.

> But why? Imagine we wrote this for a client, and suddenly after we have written a 100,000 line drawing program they want us to add the ability to rotate a rectangle.
> Our implementation DOES NOT ALLOW THIS!!!
> Also, many of the methods we wrote required us to compute the missing corners. If we stored all 4 corners, then we could do all of these things without breaking the 100,000 lines of external code.

We can make the change easily without breaking anything outside our code. We will renumber the corners from the upper left clockwise for simplicity. Note that we do not change the **_signature_** of the constructor, only the hidden data.

```typescript
class Rectangle {
    private corner2: Point;
    private corner4: Point;
    constructor(
        private corner1: Point,
        private corner3: Point,
        public color: Color
    ) {
        this.corner2 = new Point(corner3.x, corner1.y, color);
        this.corner4 = new Point(corner1.x, corner3.y, color);
    }
}
```

{: .no-run}

> Nothing is changed in how you create instances of this class, but now we have all 4 points stored. Now we could add a `rotate` method if we choose.

Because we relabeled our corners, and added the new corners, we should rewrite all of the internal methods (but we won't change the signature of the method).

Here is a complete working example:

```typescript
import { Color, Point } from "ch5/drawing1";

class Line {
    constructor(public start: Point, public end: Point, public color: Color) {}
    getLength(): number {
        let x = this.start.x - this.end.x;
        let y = this.start.y - this.end.y;
        let len: number = Math.sqrt(x * x + y * y);
        return len;
    }
}
class Rectangle {
    private corner2: Point;
    private corner4: Point;
    constructor(
        private corner1: Point,
        private corner3: Point,
        public color: Color
    ) {
        this.corner2 = new Point(corner3.x, corner1.y, color);
        this.corner4 = new Point(corner1.x, corner3.y, color);
    }
    getArea(): number {
        let horizLine: Line = new Line(this.corner1, this.corner2, new Color());
        let vertLine: Line = new Line(this.corner1, this.corner4, new Color());
        let area: number = horizLine.getLength() * vertLine.getLength();
        return area;
    }
    /**
     * Return an array of line objects which represent the two diagonals of the rectangle.
     * @param none
     * @returns An array of 2 points representing the diagonals.  The first point in the array should be top
     * left to bottom right.  The second point should be top right to bottom left.
     * @sideEffects None
     */
    getDiagonals(): Line[] {
        let result = [
            new Line(this.corner1, this.corner3, new Color()),
            new Line(this.corner4, this.corner2, new Color()),
        ];
        return result;
    }
    /**
     * Return the length of the diagonal of the rectangle.
     * @param none
     * @returns The length of the diagonal of the rectangle.
     * @sideEffects None
     */
    getPerimeter(): number {
        let horizLine: Line = new Line(this.corner1, this.corner2, new Color());
        let vertLine: Line = new Line(this.corner3, this.corner4, new Color());
        return horizLine.getLength() * 2 + vertLine.getLength() * 2;
    }
    /**
     * Return the length of the diagonal of the rectangle.
     * @param none
     * @returns The length of the diagonal of the rectangle.
     * @sideEffects None
     */
    getDiagonalLength(): number {
        let diags: Line[] = this.getDiagonals();
        return diags[0].getLength();
    }
}
let rect: Rectangle = new Rectangle(
    new Point(0, 0, new Color()),
    new Point(100, 100, new Color()),
    new Color()
);
console.log(rect.getDiagonals());
console.log(rect.getPerimeter());
console.log(rect.getDiagonalLength());
```

## Summary

**_Data hiding_** is an important tool for object oriented programming. It allows us, as the programmer, to decide what functionality, methods, and data we expose to the users of our class without worrying about things we have hidden inside.
If we provide a **_public interface_** to our class that is consistent, then we should try not to change it, but anything that is private can be changed so long as we make sure that the **_public interface_** still works as expected without breaking anything that uses our class.

# Next Step

Next we'll learn about object cloning: [Object Cloning &raquo;](../4-classes/clone.md)

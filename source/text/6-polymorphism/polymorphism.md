---
layout: default
title: Polymorphism
nav_order: 6.3
parent: Overrides and Polymorphism
---

# Polymorphism

[Return to the Chapter Index](index.md)

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Key Idea

**_Polymorphism_** in Object Oriented Programming is the provision of a single interface to entities of different types.

## Motivation for Polymorphism

From the fruit example in the previous section, it would be preferable if we could just store an array of fruits and call `getDescription` on each fruit. It would be great if the correct `getDescription` got called based on the type of fruit that was created, not the type of the array.

It turns out that this WORKS! For apples it will call the apple version of `getDescription`, and for oranges it will call the orange version.

```typescript
class Fruit {
    constructor(private name: string) {}
    public getDescription(): string {
        return `This is a fruit called ${this.name}`;
    }
}

class Orange extends Fruit {
    constructor(protected subType: string) {
        super("orange");
    }
    public getDescription(): string {
        return super.getDescription() + " of type " + this.subType;
    }
}
class Apple extends Fruit {
    constructor(protected subType: string) {
        super("apple");
    }
    public getDescription(): string {
        return super.getDescription() + " of type " + this.subType;
    }
}
let fruits: Fruit[] = [
    new Apple("red"),
    new Apple("green"),
    new Orange("blood"),
    new Orange("navel"),
];
for (let fruit of fruits) {
    console.log(fruit.getDescription());
}
```

If either class did not implement getDescription(), then the superclass version would be called. This powerful behavior is a type of **_polymorphism_** and allows us to create very powerful class hierarchies, that are simple to access and use.

In other words, in our fruit example, we provided a public interface for all fruits that included the method getDescription(). Regardless of the type of fruit, the public interface does not change, and the language is able to **_dispatch_** the method call to the appropriate subclass for us automatically.
This type of **_polymorphism_** is **_subclass_** or **_subtype_** polymorphism. There are other types of polymorphism including ad-hoc polymorphism and parametric polymorphism. We will examine parametric polymorphism later.

So with creative use of subclass polymorphism, we can provide a generic interface to all objects that share a base class, with a default behavior.

## Back to the _drawing_ board

Returning to the drawing example, if we added a `draw` method to the drawable class that does nothing, then implemented the `draw` method in each of our subclasses, then we could store a drawing as an array of `Drawable`s, iterate through the array, and call the `draw` method. This is acceptable because `Drawable` has a `draw` method, but the correct `draw` method (depending on the type of object) will be called for us automatically. This is **_polymorphism_**:

{: .no-run}

```typescript
class Drawable {
  public color: Color;
  constructor(color: Color) {
    this.color = color.clone();
  }
  clone(): Drawable {
    return new Drawable(this.color);
  }
  draw(page:Page): void {
    // Do nothing, I don't know how
  }
}

class Line extends Drawable {
   ...
  draw(page: Page): void {
    page.drawLine(
      this.start.getX(),
      this.start.getY(),
      this.end.getX(),
      this.end.getY(),
      this.color.toString(),
    );
  }
}
let obj:Drawable=new Line(new Point(0,0),new Point(1,1),
  new Color());
obj.draw(this.drawingSurface);
```

> Note: You can install the drawing library used in this example with the page object using npm.  
> `npm i --save @boots-edu/web-draw`

It is safe to call `draw` on a `Drawable` object, it just doesn't do anything.
If we call it on a `Line` object, it draws the line.
If we call it on a `Line` object stored in a `Drawable` variable (which is allowed since it is a `Drawable`), it calls the method in the `Line` class.

## Another Example

Consider the following example.  We would like the ```console.log``` expression to print the value of x, but the default behavior of ```Object.toString()``` is not what we really want.
```typescript
  class myObj{
    x:number=42;
  }
  console.log(new myObj().toString());
```
To rectify this, we can override the ```toString()``` method to control how the conversion to a string takes place.

```typescript
  class myObj extends Object{
    x:number=42;
    override toString():string{
      return this.x.toString();
    }
  }
  console.log(new myObj().toString());
```

> Note: If you do not extend Object, you cannot use the override keyword, however this still works and provides the same behavior.

```typescript
  class myObj{
    x:number=42;
    toString():string{
      return this.x.toString();
    }
  }
  console.log(new myObj().toString());
```

## Summary

**_Polymorphism_** in general denotes the idea of several different types of objects having the same public interface. Specifically, in this section we examined **_subtype_** or **_subclass_** polymorphism which is when we **_override_** methods in a superclass allowing us to call the methods on a variable of the superclass type which contains an object of the subclass type. This causes the system to **_dispatch_** the call to the correct subclass.

# Next Step

Next we'll learn learn about abstract methods and classes: [Abstract Classes](../6-polymorphism/abstract.md)

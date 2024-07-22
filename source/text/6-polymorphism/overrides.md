---
layout: default
title: Overrides
nav_order: 6.2
parent: Overrides and Polymorphism
---

# Overrides
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
We can ***override*** a method in our subclass by creating a method with the same signature as a method in our superclass.

## Altering functionality
In the previous sections, we learned that when we ***inherit*** or ***subclass*** a class, we get all of its methods (i.e. functions).  Sometimes this is not what we want.

Let’s consider that we want to add a getArea method to all of our drawable classes.  This doesn’t really make sense for Drawable and Line, but does for the rest.  The calculation is, however, very different.  
If we add a default getArea method to our Drawable with the same signature as it has elsewhere in the class hierarchy, then objects that do not implement getArea, will inherit the default behavior, and objects that define the method will get the new behavior

```typescript
class Drawable {
  public color: Color;
  ...
  ...
  ...
  getArea(): number {
    console.log("This object does not have an area");
    return 0;
  }
}
```
{: .no-run}

If a subclass implements getArea (like rectangle, circle, and triangle), then the version in the subclass is used, otherwise, the version in the base class is used.  This is called ***overriding*** a class method.

Consider a new class for the drawing example.  A circle:

```typescript
class Circle extends Drawable {
  private center: Point;
  private radius: number;
  ...
  ...
  ...
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```
{: .no-run}

Now if the object is a circle, we get its area.  If the object is a line, we get the message, and a value of 0.  If we add getArea to the drawables that make sense, then only those classes that do not override getArea will use the implementation in the superclass.
If it is implemented in the subclass, then the subclass version will be used.
***Overriding*** of methods is a powerful tool to express different behaviors in subclasses, while allowing us to have a default implementation.
We can even call the superclass implementation from our overridden method.

We can build in some default behaviors to our superclasses, and override those behaviors in our subclasses if it makes sense, or just use the superclass implementation if it is sufficient.

### An Example
Here is an example of an overridden method that calls the parent’s version of the method, but then adds some functionality of its own.

> Notice the code super.getDescription()
While we user super() to call the constructor of the superclass, we can use super.methodname() to call any method on the superclass even if it is overridden.

```typescript
class Fruit{
  constructor(private name: string){}
  public getDescription(): string{
    return `This is a fruit called ${this.name}`;
  }
}

class Orange extends Fruit{
  constructor(protected subType:string){
    super("orange");
  }
  public getDescription(): string{
    return super.getDescription() + " of type " + this.subType;
  }
}
class Apple extends Fruit{
  constructor(protected subType:string){
    super("apple");
  }
  public getDescription(): string{
    return super.getDescription() + " of type " + this.subType;
  }
}
let apples:Apple[]= [new Apple("red"), new Apple("green")];
let oranges:Orange[] = [new Orange("blood"), new Orange("navel")];
for (let apple of apples){
  console.log(apple.getDescription());
}
for (let orange of oranges){
  console.log(orange.getDescription());
}
```

With our current knowledge we need to make an array of Orange objects, and an array of Apple objects, then iterate through them independently.  In the next section we will learn a better way to accomplish this.

## Summary
When we subclass a class, we get all of its members, both properties and methods.  If the members are public or protected, we can access them within the subclass.  If we wish to change or augment the behavior of a given method of the child class, we can ***override*** that method and replace it with our own functionality.  Within the overridden method, we can call the superclass' method if we choose.

# Next Step

Next we'll learn learn about polymorphism: [Polymorphism &raquo;](../6-polymorphism/polymorphism.md)
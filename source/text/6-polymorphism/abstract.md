---
layout: default
title: Abstract Classes
nav_order: 6.4
parent: Overrides and Polymorphism
---

# Abstract Classes
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
An ***abstract*** class is a class that cannot be instantiated, but which can be used as a superclass for other classes.

## Abstract Classes
With the version of our drawing program from the last section, what happens when a developer using our class creates an actual Drawable object.  We built it to act as a superclass for all of the drawable objects, but it makes no sense to create one on its own.  It isn’t really drawable since the draw function doesn’t do anything.  It provides no functionality, and serves no purpose other than to act as a superclass to our other elements, hold their color, and dispatch their draw requests.

```typescript
let weird:Drawable=new Drawable(new Color());
weird.draw(this.drawingSurface);
```
{: .no-run}

It would be nice not to be able to prevent a user of our class from accidentally creating and using one of these.  

Let's begin with our definition of a Drawable from the last section:

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
  }
}
```
{: .no-run}


We can modify our drawable class to prevent it from being instantiated directly by tagging it as abstract in the method signature.
This breaks our clone method, how do we fix it.

```typescript
abstract class Drawable {
  public color: Color;
  constructor(color: Color) {
    this.color = color.clone();
  }
  clone(): Drawable {
    return new Drawable(this.color);  // Since it is abstract, we are not allowed to create one anymore.
  }
  draw(page:Page): void {
  }
}
```
{: .no-run}

We simply remove the body of clone and mark it as abstract
```typescript
abstract class Drawable {
  public color: Color;
  constructor(color: Color) {
    this.color = color.clone();
  }
  abstract clone(): Drawable;  //Just the signature followed by a semicolon is sufficent to create the interface without an implementation.
  draw(page:Page): void {
}
```
{: .no-run}

Since we can’t make one of these directly, we cannot clone it.  We rely on the implementation in the super class.  
If you derive from an abstract class, then all abstract members MUST be implemented in the subclass since now there is no default implementation.

We can take a this a step further and remove the do nothing method draw by making it an abstract method as well.

```typescript
abstract class Drawable {
  public color: Color;
  constructor(color: Color) {
    this.color = color.clone();
  }
  abstract clone(): Drawable;  
  abstract draw(page:Page): void;
}
```
{: .no-run}

Now any class that derives from Drawable will not compile if it does not implement clone and draw itself.
However, since they are still defined in the superclass, we can still call it on any object derived from Drawable and it will still dispatch to the correct subclass method.  If we removed it altogether, it would not dispatch correctly when called.

## Summary
A base class that wants to express a public interface for its subclasses, but does not provide an implementation for that interface is called an ***abstract class***.  Any methods within the class that do not have implementations are called ***abstract methods***.  We denote both a class or a method being abstract by using the ```abstract``` keyword.

# Next Step

Next we'll summarize what we have learned about polymorphism: [Polymorphism Notes &raquo;](../6-polymorphism/notes.md)
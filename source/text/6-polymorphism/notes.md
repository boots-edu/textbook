---
layout: default
title: Polymorhism Notes
nav_order: 6.5
parent: Overrides and Polymorphism
---

# Polymorphism Notes
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
***Polymorphism*** in *Object Oriented Programming* is the provision of a single interface to entities of different types.  

## Things to know
It is ok to store an object of a subclassed type in a variable typed to the superclass.

```typescript
let dObj:Drawable=new Line(new Point(1,2),new Point(3,4),new Color(1,2,3));
```
{: .no-run}

Calling methods on that variable will call the method in Line if it is implemented, and fall back to calling the method in Drawable if it is not.

```typescript
dObj.draw(this.drawingSurface);
```
{: .no-run}

If a class has no intended use on its own, but only is used as a parent class, then we can make it abstract, meaning that it cannot be created with new.

```typescript
abstract class Drawable {
```
{: .no-run}

If we have methods that make no sense in the superclass, and must be implemented in the subclass, then we can declare them as abstract as well to support dispatch.
```typescript
abstract draw(page: any): void;
```
{: .no-run}

### An Example
Remember our Users/Student/Faculty classes.
Here is a simplified and updated version for us to look at.
The base class Users implements name, age, and two methods to access them.
It is abstract and cannot be created.
In addition, suppose we want to build a database of users, the Database class implements that.
```typescript
abstract class Users{
  constructor(protected name: string, protected age: number){}
  getName():string{return this.name};
  getAge():number{return this.age};
  abstract getDetails():string;
}
class Students extends Users{
  constructor(name: string, age: number, private grade: number){
    super(name, age);
  }
  getDetails():string{
    return `N: ${this.name}, A: ${this.age}, G: ${this.grade}`;
  }
}
class Faculty extends Users{
  constructor(name: string, age: number, private department: string){
    super(name, age);
  }
  getDetails():string{
    return `N ${this.name}, A: ${this.age}, D: ${this.department}`;
  }
}
class Database{
  private users: Users[] = [];
  addUser(user: Users):void{
    this.users.push(user);
  }
  getUsers():Users[]{
    return this.users;
  }
  getUser(name:string):Users[]{
    let result:Users[] = [];
    for(let user of this.users){
      if(user.getName() === name){
        result.push(user);
      }
    }
    return result;
  }
}
let db:Database=new Database();
db.addUser(new Students("Lisa",19,4.0));
db.addUser(new Faculty("Linda",45,"Computer Science"));
let users=db.getUsers();
for(let user of users){
  console.log(user.getDetails());
}
```
Even though the database contains a mix of Students and Teachers, we return an array of Users to make the method more generic.  
We can loop through the returned values getting details on each object regardless of type.

In general, you should return the most generic (i.e. superclass) type possible to make your method generic.  There are ways to look and see what class we actually are, but if we are calling overridden methods that exist in the superclass, we don't need to worry about that.  We just use it.

## Summary
* You now know most of the generic things about OOP.  In other words, while the syntax may differ slightly, all of the concepts hold true in most OO languages like Java, C++, C#, etc.
* We can construct complex classes by building them out of parts that they contain using composition.
* We can construct complex classes by extending other classes and adding functionality to create more and more specific classes that take advantage of the features that already exist in the superclass.
* We can use the idea of polymorphism to reference objects through their superclass, and have the correct implementation in the subclass execute for us through polymorphism.
* We can use the idea of ***polymorphism*** to reference objects through their superclass, and have the correct implementation in the subclass execute for us.
We can prevent the creation of a class being used exclusively as a superclass by marking it as ***abstract***.
We can force subclasses to create overridden methods for our superclass by declaring methods as ***abstract***. This does not prevent dispatch, but does remove the default behavior, making all subclasses implement the method themselves.

And with all of this, we have an elegant way to design programs that leverages the ability to share code, and view a problem in terms of objects.

# Next Step

Next we'll learn about exceptions: [Exceptions &raquo;](../7-exceptions/index.md)
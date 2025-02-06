---
layout: default
title: Inheritance
nav_order: 5.1
parent: Composition and Inheritance
---

# Inheritance

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

## Understanding the relationship

In the previous section we discussed **_composition_** which allowed us to represent a _contains_ or _has a_ relationship between two classes. Recall that a course has a final and a fruit basked contains fruit. While useful in many situations, we often wnat to represent a **_type of_** relationship. In typescript, the `extend` keyword allows us to represent a class in terms of another class that it is a _type of_.

Consider the following:

-   An apple is a type of fruit.
-   A car is a type of vehicle.
-   A triangle and a rectangle are types of polygons (more on this later)
-   In a University computer system, a student and a faculty member are both types of Users.

## Why inheritance

We can inherit the properties and methods of an existing class and extend that class by either adding new members, or replacing the functionality of existing members to suit the new object's needs.

Suppose I have a class _Users_ that represents a system user on a University's central IT system.

{: .no-run}

```typescript
class Users {
    constructor(private name: string, private age: number) {}
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
}
```

This class has private properties name and age, and two functions to retrieve the values in these properties. In other words, users of the class CANNOT change the name or age, but they can retrieve them.

Now suppose I want to create two new classes called Students and Faculty. I want them to have all of the abilities of a User, but they also need some additional capabilities based on the type.

> It is extremely important to note that a Student, does not contain a User, the Student is a User. We cannot say this about points and colors. A point is a color? That makes no sense.
> A student is a user, that makes sense.

So how do we deal with this type of relationship between classes?

We can extend an existing class when the relationship between the objects is an **_is a_** relationship. Our new classes act like the old class unless we add some functionality to it.

{: .no-run}

```typescript
class Student extends Users {}
class Faculty extends Users {}
```

We can now define objects of type Student and Teacher, and instantiate them with new and they work just like our Users class.

```typescript
class Users {
    constructor(private name: string, private age: number) {}
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
}
class Student extends Users {}
class Faculty extends Users {}
let collegeStudent = new Student("John", 20);
let teacher = new Faculty("Jane", 30);
console.log(collegeStudent.getName(), collegeStudent.getAge());
console.log(teacher.getName(), teacher.getAge());
```

While all Users share some things in common,there are a lot of things that are unique to being a student or Faculty.

-   Students have a gradTerm and a gpa. They are still users, but they are a **_type of_** user.
-   Faculty has a department, an office, and a list of classes they teach. Again, they are still a **_type of_** user.

{: .no-run}

```typescript
class Student extends Users {
    private gradTerm: string = "";
    private gpa: number = 0;
}
class Teacher extends Users {
    private department: string = "";
    private classes: string[] = [];
    private office: string = "";
}
```

In more formal terms, the Student class **_inherits_** from the Users class.
We say that Student is a **_subclass_** of Users and that Users is a **_superclass_** of Student (and Faculty).
Implementing this sort of relationship (type of, is a, etc.) in this manner is referred to as **_inheritance_**.
We inherit everything about the superclass, but still are a distinct type with our own properties and methods in addition to those in the **_subclass_**.

> The **_superclass_** is often referred to as the **_base class_** of the relationship.

If we want to create a constructor to initialize our object, we must remember that it is a User so its constructor must also be responsible for the name and age fields from the parent or superclass, otherwise, how would they ever get set?

It is easy to initialize gradTerm and gpa, but how do we initialize the members from the superclass?

{: .no-run}

```typescript
class Student extends Users {
    private gradTerm: string = "";
    private gpa: number = 0;
    constructor(name: string, age: number, gradTerm: string, gpa: number) {
        //SOMEHOW WE HAVE TO INITIALIZE THE SUPERCLASS (or PARENT)
        this.gradTerm = gradTerm;
        this.gpa = gpa;
    }
}
```

We can call the superclass' constructor within our constructor by calling the super() method. This will take the same arguments as the constructor of the superclass.
Here those arguments are name and age. This calls the constructor in Users which takes care of its part of the initialization.

{: .no-run}

```typescript
class Student extends Users {
    private gradTerm: string = "";
    private gpa: number = 0;
    constructor(name: string, age: number, gradTerm: string, gpa: number) {
        //calling super as the first line of our constructor initializes the superclass by calling its constructor.
        super(name, age);
        //After it is initialized, we can then initialize our member variables as usual
        this.gradTerm = gradTerm;
        this.gpa = gpa;
    }
}
```

Here is a completed example:

```typescript
class Users {
    constructor(private name: string, private age: number) {}
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
}
class Student extends Users {
    private gradTerm: string = "";
    private gpa: number = 0;
    constructor(name: string, age: number, gradTerm: string, gpa: number) {
        super(name, age);
        this.gradTerm = gradTerm;
        this.gpa = gpa;
    }
    public getGradTerm(): string {
        return this.gradTerm;
    }
    public getGPA(): number {
        return this.gpa;
    }
}
class Faculty extends Users {
    private department: string = "";
    private classes: string[] = [];
    private office: string = "";
    constructor(
        name: string,
        age: number,
        department: string,
        classes: string[],
        office: string
    ) {
        super(name, age);
        this.department = department;
        this.classes = classes;
        this.office = office;
    }
    getDepartment(): string {
        return this.department;
    }
    getClasses(): string[] {
        return this.classes;
    }
    getOffice(): string {
        return this.office;
    }
}
let jan: Student = new Student("Jan", 19, "25S", 3.95);
let lisa: Faculty = new Faculty(
    "Lisa",
    42,
    "Computer Science",
    ["CISC181", "CISC210"],
    "317 Morris Hall"
);
console.log(jan.getName() + " has a GPA of " + jan.getGPA());
console.log(
    lisa.getName() + " is in the " + lisa.getDepartment() + " department."
);
```

> Both Lisa and Jan can call getNme because it is inherited from Users in both Student and Faculty classes, but only Jan can call getGPA, because it is only defined in the _child_ or _subclass_ Student. Likewise, Lisa can call getDepartment, but Jan can't because it is only defined in the _subclass_ Faculty.

Another way to think about this is that Teachers and Students share some things in common:

-   They both have names
-   They both have ages (although Teacher.age > Student.age)

They also have some differences:

-   Students have a GPA and a gradTerm
-   Faculty have a department, an office, a list of classes, and don't show up on photographic film.

We encapsulate their commonality in the Users class, then extend Users to make new classes that express the differences.

## Summary

**_Inheritance_** allows the programmer to represent an **_is a_** or **_type of_** relationship. Using inheritence through the `extends` keyword, we can express both the similarities and differents between objects in these types of relationships. We can call the constructor (we must actually) of our superclass in the constructor of our subclass by calling the `super` method and passing it the same list of parameters we would pass to the **_superclasses_** constructor.

# Next Step

Next we'll learn put these concepts to use: [Putting it all together &raquo;](../5-composition-inheritance/summation.md)

CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 3
Spring 2024

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* There are two ways to specify a complex type in Typescript
  * The interface
    * Interfaces describe the data that goes into an object and its types, but do not provide default values, or any additional logic.
  * The class
    * Classes also describe the data that goes into an object, but provide a mechanism to set default values, construct the objects dynamically, and even define methods to operate on the internal data.
* We will discuss interfaces (and when to use them) later.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

To declare a class in typescript, we use the class keyword.  The structure of a class internally is a list of data objects that make up the class.

Remember a class is a definition of a type.  You must create an instance of that type in order to use it.

//we can define a variable of our new type and

//use it

let myObj:MyType=new MyType();

class MyType{

//list of variables and types

//constructor method to create an instance

//0 or more methods which can operate on

//the member variables in the class

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* Motivation: Somethings things belong together as they describe a more complex thing that we want to represent.
* As an example, consider a simple drawing program we might want to build.
  * Points have an x and y coordinate which are numbers
  * Lines contain a start and end point
  * Rectangles can be defined by 2 points (opposite corners)
  * Polygons can be defined by an arbitrary list of points (The vertices)
  * Each of these objects may have a color associated with it. (Color itself might contain components for Red, Green, Blue as numbers.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* So let's get started.  How do we build our first class for Color?
  * Our class should contain 3 numbers (Red, Green, and Blue).
  * We can define our class as described previously, since this contains only the primitive type number.

As you can see, our class definition is quite simple.  We simply group the three components together and give it a name.  We can then create objects of this type with the new keyword.

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* So let's get started.  How do we build our first class for Color?
  * Our class should contain 3 numbers (Red, Green, and Blue).
  * We can define our class as described previously, since this contains only the primitive type number.

Note the public keyword before each member variable (sometimes called a  _property_ ) of the class.  This denotes that the property is accessible by methods and code outside the class.  We could also mark it as  _private._

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* So let's get started.  How do we build our first class for Color?

//We can use our new class to create a color object:

let myColor:Color=new Color();

//Then we can access its public members

myColor.red=255;myColor.blue=128;

myColor.green=10;

//Note: if they had been  _private_  we could not have accessed them.  More on this later

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* Now that we have a color class, we can use it to define a class for points.

//We can use our new class to create a point object:

let myPoint:Point=new Point();

myPoint.x=100;

myPoint.y=100;

myPoint.color.red=255;myPoint.color.blue=128;

myPoint.color.green=10;

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

}

class Point{

public x:number=0;

public y:number=0;

public color:Color=new Color();

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.


We refer to this (using a class within another class) as  _composition._

In other words, we can build up complex objects by including other objects inside of them.  Now every point will have a position (x,y) and a color contained inside the point itself.

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

}

class Point{

public x:number=0;

public y:number=0;

public color:Color=new Color();

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* But wait, setting up and initializing the internal members of a class shouldn't be this hard.

//We can use our new class to create a

//Color object:

let veryRed:Color=new Color(255,0,0);

let veryBlue:Color=new Color(0,0,255);

let anotherColor:Color=new Color(27,115,98);

//Note that now we can create and

//Initialize our object in one line

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

constructor(red:number,g:number,b:number){

this.red=red;

this.green=g;

this.blue=b;

}

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

This still seems repetitive.  Typescript gives us a shortcut.  If we declare the parameters of the constructor with the  _private_  or  _public_  keywords, it both declares them as members, and initializes their values from the values passed into the constructor

class Color{

constructor( __public__  red:number, __ public__  green:number, __ public__  blue:number){

//Note we don't need anything inside.  This automatically does everything.

}

}

//this behaves equivalently in every way to our previous example.

let veryRed:Color= new Color(255,0,0);

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

Note that without the  __public__  or  __private __ keywords, the parameter is just local to the constructor function, but when included, the parameter becomes a member variable (property) and gets initialized to the value passed in.

class Color{

constructor( __public__  red:number, __ public__  green:number, __ public__  blue:number){

}

}

//this behaves equivalently in every way to our previous example.

let veryRed:Color=new Color(255,0,0);

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

Let's keep building our drawing program using constructors

class Color{

constructor(public red:number, public green:number,public blue:number){ }

}

class Point{

constructor(public x:number,public y:number,public color:Color){}

}

We can build a point in a few ways.

let myPoint:Point=new Point(100,100,new Color(0,0,255));  //create color on the fly

let red:Color=new Color(255,0,0);

Let myOtherPoint:Point=new Point(200,200,red);  //use an existing color object

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

So what about lines.  We can again use composition to create an object with 2 points in it and of course a color.

class Color{

constructor(public red:number, public green:number,public blue:number){ }

}

class Point{

constructor(public x:number,public y:number,public color:Color){}

}

class Line{

constructor(public start:Point,public end:Point,public color:Color){}

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

Or rectangles.

class Color{

constructor(public red:number, public green:number,public blue:number){ }

}

class Point{

constructor(public x:number,public y:number,public color:Color){}

}

class Rectangle{

constructor(public corner1:Point,public corner2:Point,public color:Color){}

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* Ok, that's pretty cool, but what about polygons.
  * Generalized polygons have 3 or more points.
  * Since we don't know how many points there are to start with, we can represent the  _list_  of points using an array.
  * Arrays can be members of classes just like any other type.  Here, it makes sense to use an array as a collection of points that make up the polygon.  We will assume that the polygon is closed between the last point and the first point.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

For polygons, we just store an array of points.  That way we can have an n\-sided polygon represented by a single class.

class Color{

constructor(public red:number, public green:number,public blue:number){ }

}

class Point{

constructor(public x:number,public y:number,public color:Color){}

}

class Polygon{

constructor(public points:Point\[\],public color:Color){}

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

So let's say we want to represent a red and a blue triangle that touch at one point.

let red:Color=new Color(255,0,0);

let blue:Color=new Color(0,0,255);

let points1:Point\[\]=\[new Point(0,0,red),new Point(100,0,red),new Point(50,100,red)\];

let points2:Point\[\]=\[new Point(50,100,blue),new Point(100,100,blue),new Point(0,100,blue)\];

let redTriangle:Polygon=new Polygon(points1,red);

let blueTriangle:Polygon=new Polygon(points2,blue);

let drawing:Polygon\[\]=\[redTriangle,blueTriangle\];

<span style="color:#006096">Now we have all of the information we would need to render this to the screen.</span>

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

So what is really happening here.  When we use the  _new_  keyword, we are creating an  _instance_  of the class.

That means that each time we call new, we are allocating a new chunk of memory to hold the values of that instance.

What is returned, is not the value of the class, but a  _reference_  to the created object.

let red:Color=new Color(255,0,0);

let points1:Point\[\]=\[

new Point(0,0,red),

new Point(100,0,red),

new Point(50,100,red)

\];

let redTriangle:Polygon=

new Polygon(points1,red);

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

let red:Color=new Color(255,0,0);

let point:Point=new Point(0,0,red);

Let point2:Point=point;

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

In other words, we don't get the object when we use new, we get a reference to the object.

What do you think would happen if we change point.x, and look at point2?

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

let red:Color=new Color(255,0,0);

let point:Point=new Point(0,0,red);

let point2:Point=point;

point.x=100;

Console.log(point2);

| x=100 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

What we would get is {x:100,y:0,color:{…}}

In other words, we only have one point, but we have two references or "aliases" to that point.  Changing either one, changes the one and only object that the variables point and point2 refer to.

Sometimes this is what we want, but sometimes IT IS NOT!!!

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

| x=100 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

Later we will look at methods to create a new object.  For now, we would need to call new and set point2 to another object with the same values.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

This is a  _shallow copy _ of an object as we are only copying the top level.

This will make a new object, butonly copy the top level or primitive types (number, boolean, string).  Any deeper objects or arrays still remain as references.

This will output {x:0,y:0,color:{…}}

| x=100 |
| :-: |
| y=0 |
| color= |

let red:Color=new Color(255,0,0);

let point:Point=new Point(0,0,red);

let point2:Point=new Point(point.x,point.y,point.color);

point.x=100;

Console.log(point2);

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

let red:Color=new Color(255,0,0);

let red2:Color=new Color(255,0,0);

let point:Point=new Point(0,0,red);

let point2:Point=new Point(point.x,point.y,red2);

point.x=100;

Console.log(point2);

| x=100 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=255 |

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

This is probably what we wanted.  This is called a  _deep copy_ . While there are some ways to do this automatically in Typescript, they do not work in all cases, and can be problematic.  We can do this manually as in this example, but we will look at better ways later..

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* So to summarize, if we have an object point.
  * _point2=point;_  //makes a copy of the  _reference_  to the one and only object
  * _A_   _shallow copy _ of the object only copies the top level primitive types, but does not duplicate any contained objects, rather it copies the reference to the same object.
  * _A_   _deep copy_  of the object makes copies of all of the objects, nested objects and primitive types.  Gives you a true clone of the object that is independent of the original.  Later, we will learn how to clone the object, but for now, we have to create an independent object with the same values.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

* So far we have looked at simple objects with simple constructors.
  * We know that an object can have members (properties) that can have basic types (number,string,boolean), be arrays of anything, or be references to other object types.
  * We have looked at the  _constructor_  function as a way to initialize the values (and even declare them using our shorthand syntax and the  _public _ and  _private_  keywords.
  * We are not locked into that simple method of creating a class.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

Remember our color class?

What if instead of passing in values for red, green, and blue, we wanted to pass in a string (either "red","green", or "blue") to initialize our color to one of these three colors.

We can go back to our original syntax and define the members explicitly, and change our constructor to take a string that is not marked with the  _public_  or  _private_  keywords since we only need it to initialize the members.

class Color{

constructor(public red:number, public green:number,public blue:number){ }

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

Remember our color class?

The idea is that we can use the string to determine how to set the members, but how do we access them.

There is a special keyword  _this_  that can be used from inside the constructor that will allow us access to the member variables of the object.

Note that once the constructor completes, colorStr goes away.  It is an ordinary parameter like in any other function since it does not have the  _public _ or  _private_  keyword.

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

constructor(colorStr:string){

//what goes here

}

}

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

class Color{

public red:number=0;

public green:number=0;

public blue:number=0;

constructor(colorStr:string){

if (colorStr==="red"){

this.red=255;

} else if (colorStr:string==="green"){

this.green=255;

} else if (colorStr:string==="blue"){

this.blue=255;

}

}

}

Here we can initialize our members indirectly by using the value of the parameter colorStr.

The  _this_  keyword allows us access to our own members from within the instance.

If the string is not recognized (i.e. not red, green, or blue) then the default values of (0,0,0) remain which is our intention.

We would want to make a comment on our constructor that this is the behavior to help users of our class to know how it will behave.

__Aside: else if__

__While there is no explicit else if keyword in typescript, using else followed by if achieves the same behavior.__

if (x>4){

//do something

} else {

if (x>2){

//do something else

} else {

//do a third thing

}

}

We can see that this will behave the way we want.

If x is > 4, the first block will execute, otherwise the second block will execute

Within the second block if x >2 the //do something else will execute, otherwise the do a third thing will happen.

This is exactly like the else if behavior we want, just a little ugly.

__Aside: else if__

__While there is no explicit else if keyword in typescript, using else followed by if achieves the same behavior.__

if (x>4){

//do something

} else if (x>2){

//do something else

} else {

//do a third thing

}

It turns out that if the block inside a if or else is only one statement long, we are allowed to drop the {}.  The compiler will then assume only the next statement is inside the block.

If we do that here, we end up with something that does the same thing, but looks a lot better.

We have simply dropped the {} around the first else block, since the (if x>2) statement is the only thing inside of it.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

So now we have the ability to create complex data types of our own using the  _class_  keyword.

These data types can contain any other type of object including another  _class, _ a primitive type, or an array.  There is no limitation on what the array or embedded class contain (other class objects, arrays of primitives, arrays of other class objects, etc.)

We have a special method in our objects called a constructor.  The constructor can be used to initialize our object, or by using the  _public _ and  _private_  keywords, it can define members of our object.  Parameters without these keywords behave just like parameters to any other function, but with these keywords, that parameter also becomes a member of the object.

__Review Topic: __  __Data Classes__

__Data Classes__  allow us to combine data into a grouping or  _class_  and use that grouping as a data type in our programs.

Next, we will examine more complex objects by adding methods (functions) inside the class which can manipulate the object data for us or make calculations from that data.

This is the basis of object\-oriented programming, as a fully developed class becomes a self\-contained object with both data and behaviors.

Don't forget the exam next week.  Good luck to all of you!!!


CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 4
Spring 2024

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Last week we introduced the notion of a class by describing classes that contained complex data\.  In Object Oriented Programming\, classes can contain more than just data\.

Classes can also contain member functions \( __methods__ \) that can access both  __public__  and  __private__  members of the class\.

A class with methods can be viewed as a self\-contained entity which  __encapsulates__  some concept\, allowing us to use the class without knowing anything about its internal structure or implementation\.

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Let’s return to our drawing program and take a look at some of our classes again\.

class Color\{

constructor\(public red:number\, public green:number\,public blue:number\)\{ \}

\}

class Point\{

constructor\(public x:number\,public y:number\,public color:Color\)\{\}

\}

class Line\{

constructor\(public start:Point\,public end:Point\,public color:Color\)\{\}

\}

class Rectangle\{

constructor\(public corner1:Point\,public corner2:Point\,public color:Color\)\{\}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

For a line\, we might want to know its length\.  We can add a method  _getLength_  to our class which computes and returns the length of the line\.

Recall that our line contains two points that allow us to represent it\.

class Line\{

constructor\(public start:Point\,end:Point\,color:Color\)\{\}

getLength\(\):number\{

let x=this\.start\.x\-this\.end\.x;

let y=this\.start\.y\-this\.end\.y;

let len:number=Math\.sqrt\(x\*x\+y\*y\);

return len;

\}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Note that we don’t need to know how the line is represented to use this method\.  If we have a line and want it’s length\, we simply call the getLength method\.

let myLine:Line=new Line\(pt1\,pt2\,c1\);

let lineLen:number=myLine\.getLength\(\);

class Line\{

constructor\(public start:Point\,end:Point\,color:Color\)\{\}

getLength\(\):number\{

let x:number=this\.start\.x\-this\.end\.x;

let y:number=this\.start\.y\-this\.end\.y;

let len:number=Math\.sqrt\(x\*x\+y\*y\);

return len;

\}

\}

This is  _important_  because in the future we might change the internal representation of a line\, but this method would still work if we rewrote it\.  The calling program would not need to change\.

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

We can add as many methods as we want to a class\.  The methods allow us to manipulate the data within the class or do calculations using the data within the class without knowing how the data within the class is actually represented\.

The method itself must obviously  know\, but external code that uses the class does not need to know anything about the internal structure\.

Later we will use the  _private _ keyword to hide that information from users of the class\.

Our class will have a  _public interface_  which may be separate from its private internal representation\.

__Asside__  __: Default Values__

Any method or function can provide default values for its parameters in the function signature\.

Let’s modify our color class so that it has defaults if we don’t want to specify the red\, green and blue values at construction\.

Now we can create a color object with these default values:

Now we have a choice of creating a color object with specific values or with the defaults \(0\,0\,0\)\.

class Color\{

constructor\(public red:number=0\, public green:number=0\,public blue:number=0\)\{ \}

\}

let specificColor:Color=new Color\(255\,128\,44\);

let defaultColor:Color=new Color\(\);

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

* Now we are going to work on an in\-class exercise\.  You can get the exercise here:
  * [https://classroom\.github\.com/a/xO5bwL0n](https://classroom.github.com/a/xO5bwL0n)
* This is our drawing example\, with the line lengthmethod we just added \(and the default color\)\.
* The rectangle class has a number of  _empty_  methodsthat we want to create to query the rectangle objectsabout their characteristics\.
* You will be able to run npm run test on them to seeif they are working\.

![](../../images/CISC181-Week%2040.png)

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Another example:

class Rectangle\{

constructor\(public corner1:Point\,corner2:Point\,color:Color\)\{\}

getArea\(\):number\{

//we want to multiply width \* height\, but we already have a way to get the width and the height

//using our line class from before\.

//Our width is \(this\.corner1\.x\,this\.corner1\,y\) to \(this\.corner2\.x\,this\.corner1\.y\)

//Our height is \(this\.corner1\.x\,this\.corner1\.y\) to \(this corner1\.x\,this\.corner2\.y\)

//make lines for the top and left of the rectangle\, and get there lengths\, and multiply them together\.

\}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

corner2\.x\,corner1\.y

corner1\.x\,corner1\.y

corner2\.x\,corner2\.y

corner1\.x\,corner2\.y

The area is the length of the line from \(corner1\.x\,corner1\.y\) to \(corner2\.x\,corner1\.y\) times the length of the line from \(corner1\.x\,corner1\.y\) to \(corner1\.x\,corner2\.y\)\.

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Another example:

<span style="color:#6A9955">c</span>  <span style="color:#6A9955">lass Rectangle\{</span>

<span style="color:#6A9955">  …</span>

<span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* Return an array of line objects which represent the two diagonals of the rectangle\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> </span>  <span style="color:#9CDCFE">none</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> An array of 2 points representing the diagonals\.  The first point in the array should be top</span>

<span style="color:#6A9955">     \* left to bottom right\.  The second point should be top right to bottom left\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> None</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDiagonals</span>  <span style="color:#CCCCCC">\(\)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Line</span>  <span style="color:#CCCCCC">\[\] \{</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#6A9955">\}</span>

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Another example:

<span style="color:#6A9955">c</span>  <span style="color:#6A9955">lass Rectangle\{</span>

<span style="color:#6A9955">  …</span>

<span style="color:#CCCCCC"> </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* Return the length of the diagonal of the rectangle\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> </span>  <span style="color:#9CDCFE">none</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> The length of the diagonal of the rectangle\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> None</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getPerimeter</span>  <span style="color:#CCCCCC">\(\)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC"> \{</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#6A9955">\}</span>

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Another example:

<span style="color:#6A9955">c</span>  <span style="color:#6A9955">lass Rectangle\{</span>

<span style="color:#6A9955">  …</span>

<span style="color:#6A9955">  /\*\*</span>

<span style="color:#6A9955">   \* Return the length of the diagonal of the rectangle\.</span>

<span style="color:#6A9955">   \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> none</span>

<span style="color:#6A9955">   \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> The length of the diagonal of the rectangle\.</span>

<span style="color:#6A9955">   \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> None</span>

<span style="color:#6A9955">   \*/</span>

<span style="color:#6A9955">  </span>  <span style="color:#6A9955">getDiagonalLength</span>  <span style="color:#6A9955">\(\):number\{</span>

<span style="color:#6A9955">  \}</span>

<span style="color:#6A9955">\}</span>

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

* So now we can add methods to our classes to create robust  _objects_  that  _encapsulate_  not just some heterogeneous data\, but also methods that can work on that data\.
* We can use the classes to create  _instances _ with the  _new _ operator which store their own data\, and have methods that work on the data inside the instance\.
  * let color1=new Color\(0\,0\,0\);let color2=new Color\(255\,255\,255\);color1\.red=255;
  * __NOTE: color2 is unchanged\.  It is a distinct __  _instance _  __of our class Color\.__

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Now let’s return to our rectangle class:

We made all of the member variables \(properties\) public for simplicity\, but now we cannot change the internal representation\.

Making members private  _hides_  them from everything outside the class making them inaccessible\.

Let’s rewrite this class making our point members private\.

class Rectangle\{

constructor\(public corner1:Point\, public corner2:Point\,public color:Color\)\{ \}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

So now\, nothing changes except we cannot access corner1 and corner2 outside our class\, but our methods \(diagonal\, area\, perimeter\) that we wrote in our class exercise are fine because they are  _inside_  the class\.

We can still create a rectangle and call our methods on it\, we just can’t get the corners any more\.

If we really need them\, we can write methods to get them or change them\.

class Rectangle\{

constructor\(private corner1:Point\, private corner2:Point\,public color:Color\)\{ \}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

class Rectangle\{

constructor\(private corner1:Point\, private corner2:Point\,public color:Color\)\{ \}

\}

* But why?
  * Imagine we wrote this for a client\, and suddenly after we have written a 100\,000 line drawing program the want us to add the ability to rotate a rectangle\.
  * Our implementation DOES NOT ALLOW THIS\!\!\!\.
  * Also\, many of the methods we wrote required us to compute the missing corners\.  If we stored all 4 corners\, then we could do all of these things without breaking the 100\,000 lines of external code\.

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Let’s add properties to our class for the missing corners\, and set them in the constructor\.

Nothing is changed in how you create instances of this class\, but now we have all 4 points stored\.  Now we could add a rotate method if we choose\.

class Rectangle\{

private corner2:Point;

private corner4:Point;

constructor\(private corner1:Point\, private corner3:Point\,public color:Color\)\{

this\.corner2=new Point\(corner3\.x\,corner1\.y\,color\);

this\.corner4=new Point\(corner1\.x\,corner3\.y\,color\);

\}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Let’s add properties to our class for the missing corners\, and set them in the constructor\.

We can also simplify all of our other methods to take advantage of the fact that these other points are now properties of our class\.

class Rectangle\{

private corner2:Point;

private corner4:Point;

constructor\(private corner1:Point\, private corner3:Point\,public color:Color\)\{

this\.corner2=new Point\(corner3\.x\,corner1\.y\,color\);

this\.corner4=new Point\(corner1\.x\,corner3\.y\,color\);

\}

\}

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Data hiding is an important tool for object oriented programming\.  It allows us as the programmer to decide what functionality\, methods\, and data we expose to the users of our class without worrying about things we have hidden inside\.

If we provide a  _public interface_  to our class that is consistent\, then we should try not to change it\, but anything that is  _private_  can be changed so long as we make sure that the public interface still works as expected without breaking anything that uses our class\.

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

* Remember our discussion of copying last week?  Recall:
  * _point2=point;_  //makes a copy of the  _reference_  to the one and only object
  * _A_   _shallow copy _ of the object only copies the top level primitive types\, but does not duplicate any contained objects\, rather it copies the reference to the same object\.  For arrays\, we can use the spread operator \(…\) to do this\.
  * _A_   _deep copy_  of the object makes copies of all of the objects\, nested objects and primitive types\.  Gives you a true clone of the object that is independent of the original\.  Later\, we will learn how to clone the object\, but for now\, we have to create an independent object with the same values\.

__Topic: __  __Classes__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

* _A_   _deep copy_  of the object makes copies of all of the objects\, nested objects and primitive types\.  Gives you a true clone of the object that is independent of the original\.  Later\, we will learn how to clone the object\, but for now\, we have to create an independent object with the same values\.
  * How do we do this in a structured way?
    * We teach each class how to clone itself\, and then use those methods if we have a class that contains another class\.
    * We will work from the bottom up of our hierarchy of classes\.  The simplest of which is our color class\.

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

For our color class\, all of the members are primitive objects \(numbers\)\, so we can just create a new object of type color\, and pass in the same values for red\, green\, and blue\.

If we want a new color object from an old one \,we just call its clone method to get it\.

class Color\{

constructor\(public red:number\, public green:number\,public blue:number\)\{ \}

clone\(\):Color\{

return new Color\(this\.red\,this\.green\,this\.blue\);

\}

\}

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Our Point class is more problematic\, since it contains a reference to a color object\, we can’t just copy it\.  Luckily\, our color class already has a clone method we can use\.

Note\, if we passed the color\, we would get a reference to the same color object\, but by calling its clone method\, we get a new one \(since we wrote it that way\)\.

class Point\{

constructor\(public x:number\,public y:number\,public color:Color\)\{\}

clone\(\): Point\{

return new Point\(this\.x\,this\.y\,this\.color\.clone\(\)\);

\}

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

We can continue in this fashion for our line class:

Since all three members are not primitive types \(string\, number\, Boolean\)\, we will use the clone methods we wrote previously to get new instances of the point and color classes with the same starting values\, but explicitly different objects\.

class Line\{

constructor\(public start:Point\,end:Point\,color:Color\)\{\}

clone\(\):Line\{

return new Line\(this\.start\.clone\(\)\,this\.end\.clone\(\)\,this\.color\.clone\(\)\);

\}

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

And our rectangle class \(assume the new version\)

class Rectangle\{

private corner2:Point;

private corner4:Point;

constructor\(private corner1:Point\, private corner3:Point\,public color:Color\)\{

this\.corner2=new Point\(corner3\.x\,corner1\.y\,color\);

this\.corner4=new Point\(corner1\.x\,corner3\.y\,color\);

\}

clone\(\):Rectangle\{

return new Rectangle\(this\.corner1\.clone\(\)\,this\.corner3\.clone\(\)\,this\.color\.clone\(\)\);

\}

\}

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

* But what about our polygon class\.  It contained an array?
  * If we use the spread operator\, we only get a shallow copy \(i\.e\. a new array containing references to the old objects\.  This is NOT what we want\.
  * We will need to iterate through the array of points\, cloning each\, and creating a brand new array of clones which we can then pass to the constructor of our new polygon object\.

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

But what about our polygon class\.  It contained an array?

class Polygon\{

constructor\(public points:Point\[\]\,public color:Color\)\{\}

clone\(\):Polygon\{

let newPoints:Point\[\]=\[\];  //initialize a new empty array\.

for \(let point of this\.points\)\{

newPoints\.push\(this\.point\.clone\(\)\);  //don’t push the point\, push a clone of it\.

\}

// so newPoints is a new array containing clones of all the points in this polygon\.  We

// can pass it directly since it is completely new\.

return new Polygon\(newPoints\,this\.color\.clone\(\)\);

\}

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

So what does memory look like after this code?

let point1:Point=new Point\(0\,0\,new Color\(255\,0\,0\)\);

let point2:Point=new Point\(100\,100\,new Color\(255\,0\,0\)\);

let line:Line=new Line\(point1\,point2\,new Color\(255\,0\,0\)\);

let line2:Line=line\.clone\(\);

So what does memory look like after this code?

let point1:Point=new Point\(0\,0\,new Color\(255\,0\,0\)\);

let point2:Point=new Point\(100\,100\,new Color\(255\,0\,0\)\);

let line:Line=new Line\(point1\,point2\,new Color\(255\,0\,0\)\);

let line2:Line=line\.clone\(\);

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| start= |
| :-: |
| end= |
| color= |

| x=100 |
| :-: |
| y=100 |
| color= |

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| start= |
| :-: |
| end= |
| color= |

| x=100 |
| :-: |
| y=100 |
| color= |

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

Notice point1 and point2 are still the same references as we have in line\.  How could we fix that if we wanted them to be distinct\.

let point1:Point=new Point\(0\,0\,new Color\(255\,0\,0\)\);

let point2:Point=new Point\(100\,100\,new Color\(255\,0\,0\)\);

let line:Line=new Line\(point1\,point2\,new Color\(255\,0\,0\)\);

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| start= |
| :-: |
| end= |
| color= |

| x=100 |
| :-: |
| y=100 |
| color= |

Notice point1 and point2 are still the same references as we have in line\.  How could we fix that if we wanted them to be distinct\.

let point1:Point=new Point\(0\,0\,new Color\(255\,0\,0\)\);

let point2:Point=new Point\(100\,100\,new Color\(255\,0\,0\)\);

let line:Line=new Line\(point1\.clone\(\)\,point2\.clone\(\)\,new Color\(255\,0\,0\)\);

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| start= |
| :-: |
| end= |
| color= |

| x=100 |
| :-: |
| y=100 |
| color= |

| x=0 |
| :-: |
| y=0 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

| x=100 |
| :-: |
| y=100 |
| color= |

| red=255 |
| :-: |
| green=0 |
| blue=0 |

__Topic: __  __Classes\-Deep Copy__

__Classes__  allow us to combine data and methods into a grouping or  _class_  and use that grouping as a data type in our programs\.

So by using our clone methods in all of our classes\, this code now has each element of each class as a distinct instance\.

let point1:Point=new Point\(0\,0\,new Color\(255\,0\,0\)\);

let point2:Point=new Point\(100\,100\,new Color\(255\,0\,0\)\);

let line:Line=new Line\(point1\.clone\(\)\,point2\.clone\(\)\,new Color\(255\,0\,0\)\);

let line2:Line=line\.clone\(\);


CISC 181-INTRODUCTION TO COMPUTER SCIENCE II

# Week 6
Spring 2024

__Attendance__

Are you here?

* We will be using Poll Everywhere to check attendance.
* You must be physically in the room to do this.
  * Poll Everywhere will check
* Make sure you check in before responding to get credit
  * You must log into poll everywhere
* If you have any issues let me know immediately.

![](../../images/CISC181-Week%2060.png)

https://pollev.com/gregsilber

![](../../images/CISC181-Week%2061.png)

---


Poll Title: Do not modify the notes in this section to avoid tampering with the Poll Everywhere activity.
More info at polleverywhere.com/support

What is your favorite song?
https://www.polleverywhere.com/free_text_polls/Ae3xWZ9pzsTviGHXutmk5

__Topic: Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

Last week we introduced the notion of  _inheritance_  to support relationships between concepts that represent an  _isa_  _ _ or  _typeof_  _ _ relationship.

This is different from  _composition_  which supports relationships between concepts that represent a  _has a_  or  _contains a _ relationship.

Musical Instrument

String Instrument

Keyboard Instrument

Bowed Instrument

Note: Each lower subclass has a  _type of_  relationship with its superclass.

__Topic: Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

Let's assume that the Musical Instrument has a name, a musical key (ie. C\#, Bb), and a year invented field as well as a method getName()

Then all the other classes ALSO have those fields.  We don't need to recreate them in our child since we  _inherit_  them from the parent class.  This is one of the primary benefits of inheritance.

Musical Instrument

String Instrument

Keyboard Instrument

Bowed Instrument

Note: Cellos have a name, key and year field and a getName() method automatically due to inheritance.

__Topic: Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

If you can map out the relationships between concepts, then by using a combination of inheritance and composition, we can build complex hierarchies out of simple objects.

Musical Instrument

String Instrument

Keyboard Instrument

Bowed Instrument

Note: Cellos have a name, key and year field and a getName() method automatically due to inheritance.

__Topic: Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

* When we create a class, we have options about how that class can be used and inherited.
* Fields and methods can be:
  * private: Only accessible within the class
  * protected: Only accessible within the class or any defined subclasses
  * public: Accessible from anywhere (inside or outside the class hierarchy).
* By controlling access to properties and methods, we expose to the outside world a minimal set of public properties and methods are exposed.  Public items are more difficult to change because others might be using them.  Protected are slightly easier and only break classes inherited from us. Changes to private methods effect nothing outside of the class itself.

__Topic: Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

Let's briefly go back to our drawing example.

Note that our points are private.  This is good in case we want to change how we store polygons without breaking the rest of the code base, but it doesn't allow us to build other objects from polygon, like triangles, rectangles, etc.

To add that functionality…

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> points: Point\[\],</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(points: Point\[\], color: Color ) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(color);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">newPoints</span>  <span style="color:#D4D4D4">=\[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> points) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">newPoints.push</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">point.clone</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.points</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">newPoints</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Polygon {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Polygon(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.points</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

Make it  _protected_

The points array is still not available to the outside world, and changing it would only affect the subclasses we create from Polygon (like rectangle and triangle), but users of our classes will not see a change.  They still will not be able to access the points array just like before.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> points: Point\[\],</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(points: Point\[\], color: Color ) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(color);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">newPoints</span>  <span style="color:#D4D4D4">=\[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> points) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">newPoints.push</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">point.clone</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.points</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">newPoints</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Polygon {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Polygon(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.points</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

Now I can simplify the rectangle class by recognizing that a rectangle is a  _type of _ polygon.  Because all of the members are private (i.e. not being used by anyone outside our class), we can change those members without fear of breaking other code.

We can do it like this…

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Rectangle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner2: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner4: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner1: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner3: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">        corner1: Point,</span>

<span style="color:#D4D4D4">        corner3: Point,</span>

<span style="color:#D4D4D4">        color: Color</span>

<span style="color:#D4D4D4">    ) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(color); </span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner1=corner1.clone();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner2=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner3.x,corner1.y,corner3.color);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner3=corner3.clone();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner4=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner1.x,corner3.y,corner1.color);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Rectangle {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner1, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner3, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

Notice that now we are deriving from Polygon instead of Drawable.

Because a polygon can already represent a rectangle, we don't need any other properties (we can delete the corners).

We call the superclasses constrctor with the array of points for the particular 4 sided polygon that this rectangle represents.

We would need to rewrite the area, perimeter and diagonals methods to use our new implementation, but users of our class will see no change in how they use it.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Rectangle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Polygon{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(corner1: Point, corner3: Point, color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(\[</span>

<span style="color:#D4D4D4">            corner1,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner3.getX(), corner1.getY()),</span>

<span style="color:#D4D4D4">            corner3,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner1.getX(), corner3.getY()</span>

<span style="color:#D4D4D4">                \], color);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Rectangle {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner1, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner3, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

* Some important points on inheritance.
  * You do not need to reimplement the properties of the parent class as you are inheriting them.
  * super(…) calls the constructor of the parent class and takes whatever arguments the parent constructor takes.
  * If a member is public or protected, you can access it in the subclass, if it is private, you cannot, but it is still there.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Rectangle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Polygon{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(corner1: Point, corner3: Point, color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(\[</span>

<span style="color:#D4D4D4">            corner1,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner3.getX(), corner1.getY()),</span>

<span style="color:#D4D4D4">            corner3,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner1.getX(), corner3.getY()</span>

<span style="color:#D4D4D4">                \], color);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Rectangle {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner1, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner3, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

* Some important points on inheritance.
  * Because we are passing the points to the Polygon constructor, and that constructor clones the points when it builds the member variable points, we do not need to do it here.  It would work if we did, but we would have short lived, unnecessary copies of the points in memory.
  * Knowing how the parent works informs how we write the subclass.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Rectangle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Polygon{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">        corner1: Point,</span>

<span style="color:#D4D4D4">        corner3: Point,</span>

<span style="color:#D4D4D4">        color: Color</span>

<span style="color:#D4D4D4">    ) {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(corner1: Point, corner3: Point, color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(\[</span>

<span style="color:#D4D4D4">            corner1,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner3.getX(), corner1.getY()),</span>

<span style="color:#D4D4D4">            corner3,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner1.getX(), corner3.getY()</span>

<span style="color:#D4D4D4">                \], color);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Rectangle {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner1, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner3, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Inheritance__

Using  __Inheritance,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type.

When we subclass, we get all of the properties of our parent class and can access them if they are  _public_  or  _protected_ .

For methods (i.e member functions), the same holds true.  We get the functions in the superclass.

Sometimes, we don't want that.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Rectangle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Polygon{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">        corner1: Point,</span>

<span style="color:#D4D4D4">        corner3: Point,</span>

<span style="color:#D4D4D4">        color: Color</span>

<span style="color:#D4D4D4">    ) {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(corner1: Point, corner3: Point, color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(\[</span>

<span style="color:#D4D4D4">            corner1,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner3.getX(), corner1.getY()),</span>

<span style="color:#D4D4D4">            corner3,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(corner1.getX(), corner3.getY()</span>

<span style="color:#D4D4D4">                \], color);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Rectangle {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner1, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.corner3, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Override__

We can  _override _ a method in our subclass by creating a method with the same signature as a method in our superclass.

Let's consider that we want to add a getArea method to all of our drawable classes.  This doesn't really make sense for Drawable and Line, but does for the rest.  The calculation is, however, very different.

If we add a default getArea method to our Drawable with the same signature as it has elsewhere in the class hierarchy, then objects that do not implement getArea, will inherit the default behavior, and objects that define the method will get the new behavior

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getArea</span>  <span style="color:#D4D4D4">(): number {</span>

<span style="color:#D4D4D4">        console.log(</span>  <span style="color:#CE9178">"This object does not have an area"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

If a subclass implements getArea (like rectangle, circle, and triangle), then the version in the subclass is used, otherwise, the version in the base class is used.  This is alled  _overriding_  a method

__Topic: __  __Classes-Override__

We can  _override _ a method in our subclass by creating a method with the same signature as a method in our superclass.

Now if the object is a circle, we get its area.  If the object is a line, we get the message, and a value of 0.  If we add getArea to the drawables that make sense, then only those classes that do not  _override _ getArea will use the implementation in the superclass.

If it is implemented in the subclass, then the subclass version will be used.

_Overriding _ of methods is a powerful tool to express different behaviors in subclasses, while allowing us to have a default implementation.

We can even call the superclass implementation from our overridden method.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getArea</span>  <span style="color:#D4D4D4">(): number {</span>

<span style="color:#D4D4D4">        console.log(</span>  <span style="color:#CE9178">"This object does not have an area"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Circle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> center: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> radius: number;</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    …</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getArea</span>  <span style="color:#D4D4D4">(): number {</span>

<span style="color:#569CD6">        return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">Math.PI</span>  <span style="color:#D4D4D4"> * </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.radius</span>  <span style="color:#D4D4D4"> * </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.radius</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Override__

We can  _override _ a method in our subclass by creating a method with the same signature as a method in our superclass.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> name: string){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`This is a fruit called </span>  <span style="color:#569CD6">${this</span>  <span style="color:#D4D4D4">.name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Orange </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">subType:string</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">.getDescription</span>  <span style="color:#D4D4D4">() + </span>  <span style="color:#CE9178">" of type "</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.subType</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D4D4D4">export class Apple extends Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">subType:string</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">.getDescription</span>  <span style="color:#D4D4D4">() + </span>  <span style="color:#CE9178">" of type "</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.subType</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

* So that's kinda cool.  We can build in some default behaviors to our superclasses, and  _override _ those behaviors in our subclasses if it makes sense, or just use the superclass implementation if it is sufficient.
* Here is an example of an overridden method that calls the parent's version of the method, but then adds some functionality of its own.
* Notice the code  _super.getDescription_  _()_
* While we user super() to call the constructor of the superclass, we can use super.methodname() to call any method on the superclass even if it is overridden.

__Topic: __  __Classes-Override__

We can  _override _ a method in our subclass by creating a method with the same signature as a method in our superclass.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> name: string){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`This is a fruit called </span>  <span style="color:#569CD6">${this</span>  <span style="color:#D4D4D4">.name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Orange </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">subType:string</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">.getDescription</span>  <span style="color:#D4D4D4">() + </span>  <span style="color:#CE9178">" of type "</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.subType</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D4D4D4">export class Apple extends Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">subType:string</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">.getDescription</span>  <span style="color:#D4D4D4">() + </span>  <span style="color:#CE9178">" of type "</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.subType</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

* So how would I use this to store an array of Fruit.
* With our current knowledge we would need to make an array of Orange objects, and an array of Apple objects, then iterate through them independently.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">apples:Apple</span>  <span style="color:#D4D4D4">\[\]= \[</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Apple(</span>  <span style="color:#CE9178">"red"</span>  <span style="color:#D4D4D4">), </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Apple(</span>  <span style="color:#CE9178">"green"</span>  <span style="color:#D4D4D4">)\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">oranges:Orange</span>  <span style="color:#D4D4D4">\[\] = \[</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Orange(</span>  <span style="color:#CE9178">"blood"</span>  <span style="color:#D4D4D4">), </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Orange(</span>  <span style="color:#CE9178">"navel"</span>  <span style="color:#D4D4D4">)\];</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> apple </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> apples){</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#D4D4D4">apple.getDescription</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> orange </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> oranges){</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#D4D4D4">orange.getDescription</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Override__

We can  _override _ a method in our subclass by creating a method with the same signature as a method in our superclass.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> name: string){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`This is a fruit called </span>  <span style="color:#569CD6">${this</span>  <span style="color:#D4D4D4">.name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Orange </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">subType:string</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">.getDescription</span>  <span style="color:#D4D4D4">() + </span>  <span style="color:#CE9178">" of type "</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.subType</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D4D4D4">export class Apple extends Fruit{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">subType:string</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDescription</span>  <span style="color:#D4D4D4">(): string{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">.getDescription</span>  <span style="color:#D4D4D4">() + </span>  <span style="color:#CE9178">" of type "</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.subType</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

What would be cool is if we could just make an array of fruits and call getDescription on each fruit.  It would be great if the correct getDescription got called based on the type of fruit that was created, not the type of the array.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">fruits:Fruit</span>  <span style="color:#D4D4D4">\[\] = \[</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Apple(</span>  <span style="color:#CE9178">"red"</span>  <span style="color:#D4D4D4">), </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Apple(</span>  <span style="color:#CE9178">"green"</span>  <span style="color:#D4D4D4">), </span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Orange(</span>  <span style="color:#CE9178">"blood"</span>  <span style="color:#D4D4D4">), </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Orange(</span>  <span style="color:#CE9178">"navel"</span>  <span style="color:#D4D4D4">)\];</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruit </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> fruits){</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#D4D4D4">fruit.getDescription</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">}</span>

It turns out that this  _WORKS!_  For apples it will call the apple version of getDescription, and for oranges it will call the orange version.

If either were not present, then it would just call the superclass version.  This powerful behavior is a type of  _polymorphism_  and allows us to create very powerful class hierarchies, that are simple to access and use.

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

![](../../images/CISC181-Week%2062.png)

In other words, in our fruit example, we provided a public interface for all fruits that included the method getDescription().  Regardless of the type of fruit, the public interface does not change, and the language is able to  _dispatch_  the method call to the appropriate subclass for us automatically.

This type of  _polymorphism_  is  _subclass or subtype polymorphism._   There are other types of polymorphism including ad-hoc polymorphism and parametric polymorphism.  We will examine parametric polymorphism later.

![](../../images/CISC181-Week%2063.png)

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

* In class exercise:
  * Divide into pairs so you can work together.
  * Here is a link to the project so you can create your own repository:
    * [https://classroom.github.com/a/BIjEmugW](https://classroom.github.com/a/BIjEmugW)
    * Follow the instructions in the README.md
    * Hint, if you open it in vscode, you can click the preview button in the upper right to view it.

![](../../images/CISC181-Week%2064.png)

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

![](../../images/CISC181-Week%2065.png)

* So with creative use of subclass polymorphism, we can provide a generic interface to all objects that share a base class, with a default behavior.
* Let's take a look at what we did last time…
  * We added a draw method to the Drawable Class
  * We stored our array of shapes in an array of drawables.
  * Since drawables has a draw method, this is fine.
  * Since the shapes also had a draw method, the system calls the correct version, based on the type of the object, not the type of the variable holding it.

![](../../images/CISC181-Week%2066.png)

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">color.clone</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Drawable {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Drawable(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    draw(</span>  <span style="color:#D4D4D4">page:Page</span>  <span style="color:#D4D4D4">): void {   </span>

<span style="color:#D4D4D4">	//Do nothing, I don't know how</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Line </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">   …</span>

<span style="color:#D4D4D4">    draw(page: Page): void {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">page.drawLine</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.start.getX</span>  <span style="color:#D4D4D4">(),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.start.getY</span>  <span style="color:#D4D4D4">(),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.end.getX</span>  <span style="color:#D4D4D4">(),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.end.getY</span>  <span style="color:#D4D4D4">(),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color.toString</span>  <span style="color:#D4D4D4">(),</span>

<span style="color:#D4D4D4">        );</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

It is safe to call draw on a Drawable object, it just doesn't do anything.

If we call it on a Line object, it draws the line.

If we call it on a Line object stored in a Drawable variable (which is allowed since it is a Drawable), it calls the method in the Line class

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">obj:Drawable</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line(</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">),</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color());</span>

<span style="color:#D4D4D4">obj.draw</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.drawingSurface</span>  <span style="color:#D4D4D4">);</span>

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawing {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">drawingObjects</span>  <span style="color:#D4D4D4">: Drawable\[\] = \[\];</span>

<span style="color:#569CD6">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">drawingSurface</span>  <span style="color:#D4D4D4">: Page = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Page(</span>  <span style="color:#B5CEA8">500</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">500</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"My Drawing"</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">       </span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">"cyan"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">    constructor</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.drawingObjects.push</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">300</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">300</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">            ),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">255</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">            ),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">255</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">            ),</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Triangle(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color(</span>  <span style="color:#B5CEA8">55</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">255</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">119</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">            ),</span>

<span style="color:#D4D4D4">        );</span>

In the exercise, we replaced the various arrays with a single array of type Drawable.

We can then call the draw method on these objects (since drawable support it) and the call is dispatched to the appropriate subclass automatically.

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">showDrawing</span>  <span style="color:#D4D4D4">(): void {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> obj </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.drawingObjects</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">obj.draw</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.drawingSurface</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        }</span>

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

But what happens when a developer using our class creates an actual Drawable object.  We built it to act as a superclass for all of the drawable objects, but it makes no sense to create one on its own.  It isn't really drawable since the draw function doesn't do anything.  It provides no functionality, and serves no purpose other than to act as a superclass to our other elements, hold their color, and dispatch their draw requests.

It would be nice not to be able to prevent a user of our class from accidentally creating and using one of these.

<span style="color:#D4D4D4">let </span>  <span style="color:#D4D4D4">weird:Drawable</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Drawable(</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color());</span>

<span style="color:#D4D4D4">weird.draw</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.drawingSurface</span>  <span style="color:#D4D4D4">);</span>

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">color.clone</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    clone(): Drawable {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Drawable(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    draw(</span>  <span style="color:#D4D4D4">page:Page</span>  <span style="color:#D4D4D4">): void {   </span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

We can modify our drawable class to prevent it from being instantiated directly by tagging it as abstract in the method signature.

This breaks our clone method, how do we fix it.

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">color.clone</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#569CD6">    abstract</span>  <span style="color:#D4D4D4"> clone(): Drawable;</span>

<span style="color:#D4D4D4">    draw(</span>  <span style="color:#D4D4D4">page:Page</span>  <span style="color:#D4D4D4">): void {   </span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

Since we can't make one of these directly, we cannot clone it.  We rely on the implementation in the super class.

If you derive from an abstract class, then all abstract members MUST be implemented in the subclass since now there is no default implementation.

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(color: Color) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.color</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">color.clone</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#569CD6">    abstract</span>  <span style="color:#D4D4D4"> clone(): Drawable;</span>

<span style="color:#569CD6">    abstract</span>  <span style="color:#D4D4D4"> draw(</span>  <span style="color:#D4D4D4">page:Page</span>  <span style="color:#D4D4D4">): void;</span>

<span style="color:#D4D4D4">}</span>

We can take a this a step further and remove the do nothing method draw by making it an abstract method as well.

Now any class that derives from Drawable will not compile if it does not implement clone and draw itself.

However, since they are still defined in the superclass, we can still call it on any object derived from Drawable and it will still dispatch to the correct subclass method.  If we removed it altogether, it would not dispatch correctly when called.

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

It is ok to store an object of a subclassed type in a variable typed to the superclass.

Calling methods on dObj will call the method in Line if it is implemented, and fall back to calling the method in Drawable if it is not.

If a class has no intended use on its own, but only is used as a parent class, then we can make it abstract, meaning that it cannot be created with  _new_ .

If we have methods that make no sense in the superclass, and must be implemented in the subclass, then we can declare them as abstract as well to support dispatch.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">dObj:Drawable</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line(</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">),</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point(</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">),</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">));</span>

<span style="color:#D4D4D4">dObj.draw</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.drawingSurface</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable {</span>

<span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> draw(page: any): void;</span>

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

* A few more points before we move on:
  * You now know most of the  _generic_  things about OOP.  In other words, while the syntax may differ slightly, all of the concepts hold true in most OO languages like Java, C++, C\#, etc.
  * We can construct complex classes by building them out of parts that they contain using  _composition._
  * We can construct complex classes by extending other classes and adding functionality to create more and more specific classes that take advantage of the features that already exist in the superclass.
  * We can use the idea of polymorphism to reference objects through their superclass, and have the correct implementation in the subclass execute for us through polymorphism.

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

* A few more points before we move on:
  * We can use the idea of  _polymorphism_  to reference objects through their superclass, and have the correct implementation in the subclass execute for us.
  * We can prevent the creation of a class being used exclusively as a superclass by marking it as  _abstract._
  * We can force subclasses to create overridden methods for our superclass by declaring methods as  _abstract._  This does not prevent dispatch, but does remove the default behavior, making all subclasses implement the method themselves.
* And with all of this, we have an elegant way to design programs that leverages the ability to share code, and view a problem in terms of objects.

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Users{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> name: string, </span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> age: number){}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getName</span>  <span style="color:#D4D4D4">():string{</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.name};</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getAge</span>  <span style="color:#D4D4D4">():number{</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.age</span>  <span style="color:#D4D4D4">};</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">getDetails</span>  <span style="color:#D4D4D4">():string;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Students </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(name: string, age: number, </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> grade: number){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(name, age);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDetails</span>  <span style="color:#D4D4D4">():string{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`N: </span>  <span style="color:#569CD6">${this</span>  <span style="color:#D4D4D4">.name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">, A: </span>  <span style="color:#569CD6">${</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.age</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">, G: </span>  <span style="color:#569CD6">${</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.grade</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Teachers </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(name: string, age: number, </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> department: string){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(name, age);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDetails</span>  <span style="color:#D4D4D4">():string{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`N </span>  <span style="color:#569CD6">${this</span>  <span style="color:#D4D4D4">.name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">, A: </span>  <span style="color:#569CD6">${</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.age</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">, D: </span>  <span style="color:#569CD6">${</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.department</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

Remember our Users/Student/Teacher classes.

Here is a simplified and updated version for us to look at.

The base class Users implements name, age, and two methods to access them.

It is abstract and cannot be created.

It also prescribes that all derived subclasses must implement a method  _getDetails_  _():string_  that takes no arguments and returns a string.

The child class simply implements that method and takes all other functionality from Users

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Database{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> users: Users\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addUser</span>  <span style="color:#D4D4D4">(user: Users):void{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.users.push</span>  <span style="color:#D4D4D4">(user);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">():Users\[\]{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.users</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">name:string</span>  <span style="color:#D4D4D4">):Users\[\]{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">result:Users</span>  <span style="color:#D4D4D4">\[\] = \[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.users</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">user.getName</span>  <span style="color:#D4D4D4">() === name){</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#D4D4D4">result.push</span>  <span style="color:#D4D4D4">(user);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> result;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

Now we want to build a database of Users.

Even though the database contains a mix of Students and Teachers, we return an array of Users to make the method more generic.

We can loop through the returned values getting details on each object regardless of type.

Brute Force Search

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">users:Users</span>  <span style="color:#D4D4D4">\[\]=</span>  <span style="color:#D4D4D4">db.getUser</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"Jane Doe"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> users){</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#D4D4D4">user.getDetails</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">}</span>

__Topic: __  __Classes-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Database{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> users: Users\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addUser</span>  <span style="color:#D4D4D4">(user: Users):void{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.users.push</span>  <span style="color:#D4D4D4">(user);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">():Users\[\]{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.users</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">name:string</span>  <span style="color:#D4D4D4">):Users\[\]{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">result:Users</span>  <span style="color:#D4D4D4">\[\] = \[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.users</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">user.getName</span>  <span style="color:#D4D4D4">() === name){</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#D4D4D4">result.push</span>  <span style="color:#D4D4D4">(user);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> result;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

In general, you should return the most generic (i.e. superclass) type possible to make your method generic.  There are ways to look and see what class we  _actually_  are, but if we are calling overridden methods that exist in the superclass, we don't need to worry about that.  We just use it.

Brute Force Search

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">users:Users</span>  <span style="color:#D4D4D4">\[\]=</span>  <span style="color:#D4D4D4">db.getUser</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"Jane Doe"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> users){</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#D4D4D4">user.getDetails</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">}</span>


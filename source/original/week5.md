CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 5
Spring 2024

__Topic: __  __Classes\-Composition__

Using  __composition\,__  we can build complex objects in order to define new types that has a  __contains a__  relationship with some existing type\.

* So far we have examined classes which contain both data and methods\.  We can combine classes by including another class as a member of our class
  * Consider the Point class which contains an instance of the color class
  * Consider the Rect class which contains instances of our color class and 2 point classes
* This method of combining classes to produce other classes is known as  _composition_  because we are adding classes as members of our new class\.
* This is a powerful tool for building classes\, as it allows us to compartmentalize concepts \(like color\, or point\) then use them to build more complex concepts\.

__Topic: Classes\-Composition__

Using  __composition\,__  we can build complex objects in order to define new types that has a  __contains a__  relationship with some existing type\.

* The important thing here is the  _relationship_  with composition:
  * In general\, if a concept that a class \( _Class1_ \) represents is a part of another class \( _Class2_ \)\, then we add  _Class1_  to  _Class2_  as a member variable \(property\)\.
  * Could also say that if  _Class2_  contains  _Class1_ \,
  * Note that the instance of Color is  _inside_  Point\.  This makes sense since the point  _has a _ Color\.
  * Sometimes we have a different relationship\,and we need a different mechanism to express it\.

| x:number | y:number |
| :-: | :-: |


| red:number | green:number<br /> | blue:number |
| :-: | :-: | :-: |


__Attendance__

Are you here?

* We will be using Poll Everywhere to check attendance\.
* You must be physically in the room to do this\.
  * Poll Everywhere will check
* Make sure you check in before responding to get credit
  * You must log into poll everywhere
* If you have any issues let me know immediately\.

![](../../images/CISC181-Week%2050.png)

https://pollev\.com/gregsilber

![](../../images/CISC181-Week%2051.png)

---


Poll Title: Do not modify the notes in this section to avoid tampering with the Poll Everywhere activity.
More info at polleverywhere.com/support

Enter a word you have learned in Computer Science
https://www.polleverywhere.com/free_text_polls/njBVFNPI0Jjo74Fviw53e

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

Suppose I have a class Users that represents a system user on UD's central IT system\.

This class has private properties name and age\, and two functions to retrieve the values in these properties\.

In other words\, users of the class CANNOT change the name or age\, but they can retrieve them\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> name: string\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> age: number\,</span>

<span style="color:#D4D4D4">    \) \{\}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getName</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.name;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getAge</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.age</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* Now suppose I want to create two new classes called Students and Faculty\.  I want them to have all of the abilities of a User\, but they also need some additional capabilities based on the type\.
* It is extremely important to note that a Student\, does not contain a User\, the Student is a User\.
  * We cannot say this about points and colors\.  A point is a color?  That makes no sense\.
  * A student is a user\, that makes sense\.
* So how do we deal with this type of relationship between classes?

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

We can extend an existing classwhen the relationship betweenthe objects is an  _is a _ relationship\.

Our new classes act like the oldclass unless we add some functionality to it\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Student </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Teacher </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">\}</span>

We can now define objects of  type Student and Teacher\, and instantiate them with new and they work just like our Users class\.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> student = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Student\(</span>  <span style="color:#CE9178">"John"</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">20</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> teacher = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Teacher\(</span>  <span style="color:#CE9178">"Jane"</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">30</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">console\.log\(</span>  <span style="color:#D4D4D4">student\.getName</span>  <span style="color:#D4D4D4">\(\)\, </span>  <span style="color:#D4D4D4">student\.getAge</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">console\.log\(</span>  <span style="color:#D4D4D4">teacher\.getName</span>  <span style="color:#D4D4D4">\(\)\, </span>  <span style="color:#D4D4D4">teacher\.getAge</span>  <span style="color:#D4D4D4">\(\)\);</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* Ok\, that's cool\, but there are a lot of things that are unique to being a student\.
  * Students have a gradTerm and agpa\.  They are still users\, but they are a  _type of_  user\.
  * Teachers have a department\, an office\, and a list of classes they teach\.  Again\, they are still a  _type of_  user\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Student </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string=</span>  <span style="color:#CE9178">''</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gpa:number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Teacher </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">department:string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">''</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> classes: string\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> office: string=</span>  <span style="color:#CE9178">''</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

In more formal terms\, the Student class  _inherits_  from the Users class\.

We say that Student is a  _subclass_  of Users and that Users is a  _superclass _  of Student \(and Teacher\)\.

Implementing this sort of relationship \(type of\, is a\, etc\.\) in this manner is referred to as  _inheritance_ \.

We  _inherit_  everything about the superclass\, but still are a distinct type\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Student </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string=</span>  <span style="color:#CE9178">''</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gpa:number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Teacher </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">department:string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">''</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> classes: string\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> office: string=</span>  <span style="color:#CE9178">''</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

If we want to create a constructor to initialize our object\, we must remember that it  _is a _ User so its constructor must also be responsible for the name and age fields from the parent or superclass\, otherwise\, how would they ever get set?

It is easy to initialize gradTerm and gpa\, but how do we initialize the members from the superclass?

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Student </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string = </span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(name: string\,</span>

<span style="color:#D4D4D4">          </span>  <span style="color:#D4D4D4">age: number\, </span>

<span style="color:#D4D4D4">          </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string\, </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">: number\) \{</span>

<span style="color:#D4D4D4">	//SOMEHOW WE HAVE TO INITIALIZE THE</span>  <span style="color:#D4D4D4">	//SUPERCLASS \(or PARENT\)</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gradTerm</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gpa</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* We can call the superclass' constructor within our constructor by calling the  _super\(\) _ method\.  This will take the same arguments as the constructor of the superclass\.
  * Here those arguments are name and age\.
  * This calls the constructor in Users which takes care of its part of the initialization\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Student </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string = </span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(name: string\,</span>

<span style="color:#D4D4D4">          </span>  <span style="color:#D4D4D4">age: number\, </span>

<span style="color:#D4D4D4">          </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string\, </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">: number\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(name\, age\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gradTerm</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gpa</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Student </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string = </span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(name: </span>  <span style="color:#D4D4D4">string\,age</span>  <span style="color:#D4D4D4">: number\,</span>

<span style="color:#D4D4D4">	</span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">: string\, </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">: number\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(name\, age\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gradTerm</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">gradTerm</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gpa</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">gpa</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getGradTerm</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gradTerm</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getGpa</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.gpa</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

Here is a completed Student class\.

We fully initialize all 4 fields \(those in User and those in Student\) and we can access all 4 through the methods getGradTerm\(\)\, getGPA\(\)\, getName\(\)\, and getAge\(\)\.

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* So hopefully this makes sense\.
  * When a concept contains another concept \(a point has a color\)\, then we use  _composition_  and add the second concept's class as a property of the first\.
    * Color is a property of Point
  * When a concept is a type of some other concept\, or is that other concept \(a student is a type of user\, so is a teacher\)\, then we user __ __  _inheritance _ to  _extend_  the other concept\, adding additional properties and methods\.
    * A teacher extends the concept of User
    * A student extends the concept of User

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* Terminology Review:
  * Composition: Add a class or array of class as a property to your class\.
    * Represents a  _has a_  relationship
  * Inheritance: Extend an existing class by adding functionality\, but keeping the functionality of the original class\.
    * Represents a  _is a _ relationship
    * The class that we are extending is called the  _superclass _ or sometimes the base class or parent class
    * The class that we are creating by extending is called a  _subclass_  or child class\.

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* Another way to think about this is that Teachers and Students share some things in common:
  * They both have names
  * They both have ages \(although Teacher\.age > Student\.age
* They also have some differences:
  * Students have a GPA and a gradTerm
  * Teachers have a department\, office\, list of classes\, and don't show up on photographic film\.
* We encapsulate their commonality in the Users class\, then extend Users to make new classes that express the differences\.

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

So let's get back to our drawing program\.  Is there something most of our objects have in common?

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* So let's get back to our drawing program\.  Is there something most of our objects have in common?
  * All of the drawing objects \(Point\, Line\, Rectangle\, Polygon\) have a Color component\.
  * If we create a class with just a color component\, we could share that definition in all our drawing classes by extending it\.
* What should we call our new class?

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* So let's get back to our drawing program\.  Is there something most of our objects have in common?
  * All of the drawing objects \(Point\, Line\, Rectangle\, Polygon\) have a Color component\.
  * If we create a class with just a color component\, we could share that definition in all our drawing classes by extending it\.
* What should we call our new class?
  * We want something descriptive that supports the  _is a _ relationship with all the other classes\.
  * For this example\, I will choose to create a class Drawable\.

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

Here is a simple drawable class\.  It contains a color\, a clone method\, and automatically makes a deep copy of the color object in the constructor\.

It just holds our color object\, so we will extend this to make all of our other drawables\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(color: Color\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.color</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">color\.clone</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    clone\(\): Drawable \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Drawable\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.color</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

Our point class inherits color from the Drawable class\.

Our Point constructor calls the constructor for our Drawable class and passes it the color so it can do its initialization \(all drawables have a color\)\.

Notice\, that the public interface is unchanged\, but we don't have to worry about the color\, the drawable does\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Point </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> x: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> y: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        color: Color = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(\)\,</span>

<span style="color:#D4D4D4">    \) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    clone\(\): Point \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.x</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.y</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.</span>  <span style="color:#D4D4D4">color</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Line </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> start: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> end: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(start: </span>  <span style="color:#D4D4D4">Point\,end</span>  <span style="color:#D4D4D4">: Point\,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">color: Color=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(\)\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);  </span>  <span style="color:#6A9955">//Must be first thing in constructor always</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.start</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">start\.clone</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.end</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">end\.clone</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    clone\(\): Line \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.start</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.end</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.color</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

* Our rectangle class can also  _inherit _ from our Drawable class\.  Again it calls super to initialize the Drawable portion of the object\.
* Note also that the constructor clones the corner points\.
* Reminder:
  * Drawable is the  _superclass_
  * Line is the  _subclass_

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Rectangle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner2: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner4: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner1: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> corner3: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        corner1: Point\,</span>

<span style="color:#D4D4D4">        corner3: Point\,</span>

<span style="color:#D4D4D4">        color: Color</span>

<span style="color:#D4D4D4">    \) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\); </span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.corner1=corner1\.clone\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.corner2=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(corner3\.x\,corner1\.y\,corner3\.color\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.corner3=corner3\.clone\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.corner4=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(corner1\.x\,corner3\.y\,corner1\.color\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    clone\(\): Rectangle \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Rectangle\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.corner1\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.corner3\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.color</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

* Our line class can also  _inherit _ from our Drawable class\.  Again it calls super to initialize the Drawable portion of the object\.
* Note also that the constructor clones the start and end points\.
* Reminder:
  * Drawable is the  _superclass_
  * Rectangle is the  _subclass_

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> points: Point\[\]\,</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(points: Point\[\]\, color: Color \) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">newPoints</span>  <span style="color:#D4D4D4">=\[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> points\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">newPoints\.push</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">point\.clone</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.points</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">newPoints</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    clone\(\): Polygon \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Polygon\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.points</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.color</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

* Our polygon class can also  _inherit _ from our Drawable class\.  Again it calls super to initialize the Drawable portion of the object\.
* Note also that the constructor clones the array of points\.
* Reminder:
  * Drawable is the  _superclass_
  * Polygon is the  _subclass_

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* We can create deeper hierarchies to express these types of relations\.
  * Everyone is a User
    * A Student is a type of User
      * An undergrad is a type of Student
      * A Freshman is a type of Undergrad
        * Etc\.

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

The point of inheritance is to capture these types of relationships\.

Be careful that the relationship you are capturing is a  _type of _ relationship as many inexperienced programmers overuse  _inheritance_ \, where the relationship really calls for  _composition\._

_A point is not a type of color\, so we don't derive point from color\._

_An undergraduate is a type of student\._

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* In class exercise:
  * Divide into pairs so you can work together\.
  * Here is a link to the project so you can create your own repository:
    * [https://classroom\.github\.com/a/x0PXgY0z](https://classroom.github.com/a/x0PXgY0z)
  * Let's first take a minute and look at the code changes\.  These have been updated to line up with this week's lectures and material \(and modified a bit to get ready for what comes next\)\.

![](../../images/CISC181-Week%2052.png)

__Topic: __  __Classes\-Inheritance__

Using  __Inheritance\,__  we can build complex hierarchies of objects in order to define new types that are a  __type of__  some existing type\.

* In class exercise:
  * Divide into pairs so you can work together\.
  * Here is a link to the project so you can create your own repository:
    * [https://classroom\.github\.com/a/x0PXgY0z](https://classroom.github.com/a/x0PXgY0z)
  * Follow the instructions in the triangle\.ts file to create another class\.  Look at the other classes which have all been updated to match this week's lecture slides\.

![](../../images/CISC181-Week%2053.png)


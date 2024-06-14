CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 7
Spring 2024

![](img/CISC181-Week%2070.png)

---


Poll Title: Do not modify the notes in this section to avoid tampering with the Poll Everywhere activity.
More info at polleverywhere.com/support

Name a famous Computer Scientist
https://www.polleverywhere.com/free_text_polls/y1LqJgK95YjD4cYKFYgXf

__Topic: Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types\.

* A few more points before we move on:
  * We can use the idea of  _polymorphism_  to reference objects through their superclass\, and have the correct implementation in the subclass execute for us\.
  * We can prevent the creation of a class being used exclusively as a superclass by marking it as  _abstract\._
  * We can force subclasses to create overridden methods for our superclass by declaring methods as  _abstract\._  This does not prevent dispatch\, but does remove the default behavior\, making all subclasses implement the method themselves\.
* And with all of this\, we have an elegant way to design programs that leverages the ability to share code\, and view a problem in terms of objects\.

__Topic: __  __Classes\-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types\.

<span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Users\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> name: string\, </span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> age: number\)\{\}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getName</span>  <span style="color:#D4D4D4">\(\):string\{</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.name\};</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getAge</span>  <span style="color:#D4D4D4">\(\):number\{</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.age</span>  <span style="color:#D4D4D4">\};</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">abstract</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">getDetails</span>  <span style="color:#D4D4D4">\(\):string;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Students </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(name: string\, age: number\, </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> grade: number\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(name\, age\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDetails</span>  <span style="color:#D4D4D4">\(\):string\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`N: </span>  <span style="color:#569CD6">$\{this</span>  <span style="color:#D4D4D4">\.name</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\, A: </span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.age</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\, G: </span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.grade</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Teachers </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Users\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(name: string\, age: number\, </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> department: string\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(name\, age\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getDetails</span>  <span style="color:#D4D4D4">\(\):string\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`N </span>  <span style="color:#569CD6">$\{this</span>  <span style="color:#D4D4D4">\.name</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\, A: </span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.age</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\, D: </span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.department</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

Remember our Users/Student/Teacher classes\.

Here is a simplified and updated version for us to look at\.

The base class Users implements name\, age\, and two methods to access them\.

It is abstract and cannot be created\.

It also prescribes that all derived subclasses must implement a method  _getDetails_  _\(\):string_  that takes no arguments and returns a string\.

The child class simply implements that method and takes all other functionality from Users

__Topic: __  __Classes\-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Database\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> users: Users\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addUser</span>  <span style="color:#D4D4D4">\(user: Users\):void\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.users\.push</span>  <span style="color:#D4D4D4">\(user\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">\(\):Users\[\]\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.users</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">name:string</span>  <span style="color:#D4D4D4">\):Users\[\]\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">result:Users</span>  <span style="color:#D4D4D4">\[\] = \[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.users</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">user\.getName</span>  <span style="color:#D4D4D4">\(\) === name\)\{</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#D4D4D4">result\.push</span>  <span style="color:#D4D4D4">\(user\);</span>

<span style="color:#D4D4D4">            \}</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> result;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

Now we want to build a database of Users\.

Even though the database contains a mix of Students and Teachers\, we return an array of Users to make the method more generic\.

We can loop through the returned values getting details on each object regardless of type\.

Brute Force Search

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">users:Users</span>  <span style="color:#D4D4D4">\[\]=</span>  <span style="color:#D4D4D4">db\.getUser</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"Jane Doe"</span>  <span style="color:#D4D4D4">\)</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> users\)\{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#D4D4D4">user\.getDetails</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">\}</span>

__Topic: __  __Classes\-Polymorphism__

_Polymorphism_  in OOP is the provision of a single interface to entities of different types\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Database\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> users: Users\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addUser</span>  <span style="color:#D4D4D4">\(user: Users\):void\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.users\.push</span>  <span style="color:#D4D4D4">\(user\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">\(\):Users\[\]\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.users</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getUsers</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">name:string</span>  <span style="color:#D4D4D4">\):Users\[\]\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">result:Users</span>  <span style="color:#D4D4D4">\[\] = \[\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.users</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">user\.getName</span>  <span style="color:#D4D4D4">\(\) === name\)\{</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#D4D4D4">result\.push</span>  <span style="color:#D4D4D4">\(user\);</span>

<span style="color:#D4D4D4">            \}</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> result;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

In general\, you should return the most generic \(i\.e\. superclass\) type possible to make your method generic\.  There are ways to look and see what class we  _actually_  are\, but if we are calling overridden methods that exist in the superclass\, we don’t need to worry about that\.  We just use it\.

Brute Force Search

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">users:Users</span>  <span style="color:#D4D4D4">\[\]=</span>  <span style="color:#D4D4D4">db\.getUser</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"Jane Doe"</span>  <span style="color:#D4D4D4">\)</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> user </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> users\)\{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#D4D4D4">user\.getDetails</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* What is an exception?
  * An exception is a way to break the “normal” flow of a program in the event that an abnormal condition exists\.
  * This can be due to invalid inputs or data provided at runtime or any other condition that is not the “common case” behavior of a method or function\.
  * It is a way to respond to validation within your code in a structured way\.
  * Some exception may be generated by libraries that you may use\.
  * You can raise and throw exceptions within your own code
  * When an exception is thrown\, the program will terminate unless the exception is caught\.

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

So what does this look like in practice\.

Note that the line console\.log\(x\) will not execute\.  The current function will exit immediately and if the exception is not “handled” by a calling method somewhere in the call stack\, the program will terminate immediately\.

We will talk about handling exceptions in a bit\, but for now\, we want to be able to generate them when  _exceptional conditions_  occur\.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> x=</span>  <span style="color:#B5CEA8">50</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"This is an error"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">console\.log\(x\);</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

What does this code do:

Sets the variable x to the value 50\.

Immediately terminates execution of the current method and begins to “bubble up” the exception through all of the calling methods until it is handled\.

If the exception bubbles past the first function called\, the program terminates and prints an error message to the console\.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> x:number=</span>  <span style="color:#B5CEA8">50</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"This is an error"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">console\.log\(x\);</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

What does this code do:

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> test\(\):void\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> x=</span>  <span style="color:#B5CEA8">50</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"This is an error"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    console\.log\(x\);</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">test\(\);</span>

Never handled\, so program exits

Shows the “call stack” in the console\.

<span style="color:#569CD6">Error: This is an error</span>

<span style="color:#569CD6">    at test \(/home/silber/school/cisc181/class7/work/</span>  <span style="color:#569CD6">dest</span>  <span style="color:#569CD6">/test\.js:4:11\)</span>

<span style="color:#569CD6">    at Object\.\<anonymous> \(/home/silber/school/cisc181/class7/work/</span>  <span style="color:#569CD6">dest</span>  <span style="color:#569CD6">/test\.js:7:1\)</span>

<span style="color:#569CD6">    at </span>  <span style="color:#569CD6">Module\.\_compile</span>  <span style="color:#569CD6"> \(</span>  <span style="color:#569CD6">node:internal</span>  <span style="color:#569CD6">/modules/</span>  <span style="color:#569CD6">cjs</span>  <span style="color:#569CD6">/loader:1376:14\)</span>

<span style="color:#569CD6">    at Module\.\_extensions\.\.</span>  <span style="color:#569CD6">js</span>  <span style="color:#569CD6"> \(</span>  <span style="color:#569CD6">node:internal</span>  <span style="color:#569CD6">/modules/</span>  <span style="color:#569CD6">cjs</span>  <span style="color:#569CD6">/loader:1435:10\)</span>

<span style="color:#569CD6">    at </span>  <span style="color:#569CD6">Module\.load</span>  <span style="color:#569CD6"> \(</span>  <span style="color:#569CD6">node:internal</span>  <span style="color:#569CD6">/modules/</span>  <span style="color:#569CD6">cjs</span>  <span style="color:#569CD6">/loader:1207:32\)</span>

<span style="color:#569CD6">    at </span>  <span style="color:#569CD6">Module\.\_load</span>  <span style="color:#569CD6"> \(</span>  <span style="color:#569CD6">node:internal</span>  <span style="color:#569CD6">/modules/</span>  <span style="color:#569CD6">cjs</span>  <span style="color:#569CD6">/loader:1023:12\)</span>

<span style="color:#569CD6">    at </span>  <span style="color:#569CD6">Function\.executeUserEntryPoint</span>  <span style="color:#569CD6"> \[as </span>  <span style="color:#569CD6">runMain</span>  <span style="color:#569CD6">\] \(</span>  <span style="color:#569CD6">node:internal</span>  <span style="color:#569CD6">/modules/run\_main:135:12\)</span>

<span style="color:#569CD6">    at </span>  <span style="color:#569CD6">node:internal</span>  <span style="color:#569CD6">/main/run\_main\_module:28:49</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Interesting\, but what’s the point\.  Let’s consider the code for our drawing program again\.

Valid color values in our program are numbers between 0 and 255\.  What happens if we try to create a color with different values?

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Color \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> red: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> green: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> blue: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">    \) \{\}</span>

<span style="color:#D4D4D4">    clone\(\): Color \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.red</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.green</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.blue</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getRed</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#D4D4D4">this\.red</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getGreen</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#D4D4D4">this\.green</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getBlue</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#D4D4D4">this\.blue</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* Interesting\, but what’s the point\.  Let’s consider the code for our drawing program again\.
* Valid color values in our program are numbers between 0 and 255\.  What happens if we try to create a color with different values?
  * The code will allow these non\-sensical values to be stored in red\, green and blue\.
  * We would like to prevent this\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Color \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> red: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> green: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> blue: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">    \) \{\}</span>

<span style="color:#D4D4D4">    clone\(\): Color \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.red</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.green</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.blue</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getRed</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#D4D4D4">this\.red</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getGreen</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#D4D4D4">this\.green</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getBlue</span>  <span style="color:#D4D4D4">\(\): number \{</span>

<span style="color:#D4D4D4">        return </span>  <span style="color:#D4D4D4">this\.blue</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

We can check the values in the constructor\, and throw an exception if they are invalid\.

It will be up to the code that is creating the color object to “handle” the exception\, otherwise the program will exit with an error like the one we saw previously\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Color \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> red: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> green: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> blue: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">    \) \{</span>

<span style="color:#D4D4D4">        if \(red\<0 || red>255\) throw new Error\(“Invalid red value”\);</span>

<span style="color:#D4D4D4">        if \(green\<0 || green>255\) throw new Error\(“Invalid green value”\);</span>

<span style="color:#D4D4D4">        if \(blue\<0 || blue>255\) throw new Error\(“Invalid blue value”\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">    clone\(\): Color \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.red</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.green</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.blue</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">\}</span>

Now we can’t create a color object with invalid values\.  If we try\, the Color class will raise an exception to notify the calling code that something bad happened\.

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

If the calling code does not “handle” the exception\, then the program will terminate with an error message \(the one you threw\) and the call stack to help you figure out where the exception occurred in the execution of your program\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Color \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> red: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> green: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> blue: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">    \) \{</span>

<span style="color:#D4D4D4">        if \(red\<0 || red>255\) throw new Error\(“Invalid red value”\);</span>

<span style="color:#D4D4D4">        if \(green\<0 || green>255\) throw new Error\(“Invalid green value”\);</span>

<span style="color:#D4D4D4">        if \(blue\<0 || blue>255\) throw new Error\(“Invalid blue value”\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">    clone\(\): Color \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.red</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.green</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.blue</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">color:Color</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">400</span>  <span style="color:#D4D4D4">\);</span>

Throws \(raises\) an exception with the message “Invalid red value”\.  Again\, if this is not handled somewhere in the code that calls this\, the program will exit\.

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

If we want to pass more information with our Error\, we can create our own class that extends error\, and throw that\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ColorError</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Error \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        message: string\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> red: number\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> green: number\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> blue: number\,</span>

<span style="color:#D4D4D4">    \) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(message\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.name = </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">ColorError</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

Here this\.name is part of Error\.  We are updating its value then we are adding properties red\, green\, and blue so that they are reported to the calling method with the exception\.  This can be very useful when we get to exception handling\.

If a block of code throws different kinds of exceptions\, this can be a good way to notify the calling method as to the type of exception and can help in writing the handler\.

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Exceptions are useful during programming even if we don’t handle them\.

If you throw an exception every time the inputs to your method are wrong\, or some other kind of error occurs\, and you have good tests\, you will see those errors and be able to fix them\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ColorError</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Error \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        message: string\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> red: number\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> green: number\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> blue: number\,</span>

<span style="color:#D4D4D4">    \) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(message\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.name = </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">ColorError</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

If we accidentally try to create an invalid color object\, the program will terminate and tell us why\.  The call stack will tell us where the method was called\.

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Can you think of any other places in our drawing code where we are allowing an invalid or incorrect state to occur because we are not checking?

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Can you think of any other places in our drawing code where we are allowing an invalid or incorrect state to occur because we are not checking?

In our polygon class\, I can create polygonswith no points\, 1 point\, or 2 points which are NOT POLYGONS\.We can also create millions of polygons\, perhaps we can prevent that as well\.

Good docs can help\, but this will prevent it\.

Can I use exception handling to make sure it is not possible to create an invalid polygon?

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> points: Point\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(points: Point\[\]\, color: Color\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> points\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.points\.push</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">point\.clone</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">    \}</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Now\, if I try to create a polygon with less than 3 or more than 10 points\, an exception is thrown\.  If not\, then program execution continues normally\.

If we don’t handle this exception\, the program will terminate \(letting us know to either handle the exception\, or fix thecalling code to prevent it\.

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> MAX\_POINTS = </span>  <span style="color:#B5CEA8">10</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> points: Point\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(points: Point\[\]\, color: Color\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">        if \(</span>  <span style="color:#D4D4D4">points\.length</span>  <span style="color:#D4D4D4"><3 || </span>  <span style="color:#D4D4D4">points\.length</span>  <span style="color:#D4D4D4">>MAX\_POINTS\)</span>

<span style="color:#D4D4D4">            throw new Error\(“Invalid polygon”\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> points\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.points\.push</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">point\.clone</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">    \}</span>

Where else might exception handling help us find issues with our drawing program?

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Where else might exceptions help us find issues with our drawing program?

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* Where else might exceptions help us find issues with our drawing program?
  * The circle class if radius is negative or 0\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Circle </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> center: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> radius: number;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(center: Point\, radius: number\, color: Color\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(radius<=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\) </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Radius must be greater than 0"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.center</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">center\.clone</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.radius</span>  <span style="color:#D4D4D4"> = radius;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* The line class if the 2 points are the same\.
  * First it might be useful to add a method to Point to compare two points\.
* Now we can call equals to determine if two points have the same value \(not the sameobject reference\)\.
* Remember if a and b are Point objects\, thena===b asks if they are the same object reference in memory\, but a\.equals\(b\) checks if they have the same coordinates\, whether or not they are the same physical objectreference\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Point \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> x: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> y: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">    \) \{\}</span>

<span style="color:#D4D4D4">    equals\(other: Point\): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.x</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#D4D4D4">other\.x</span>  <span style="color:#D4D4D4"> && </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.y</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#D4D4D4">other\.y</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Exceptions__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* The line class if the 2 points are the same\.
  * Now we can use this to validate our line object\.  If the two points have the samecoordinates\, regardless of if they are references to the same object\, the constructor will throw an exception\.
  * Now our Line is guaranteed to have startand end points with different coordinates\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Line </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> start: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> end: Point;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(start: Point\, end: Point\, color: Color\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#D4D4D4">start\.equals</span>  <span style="color:#D4D4D4">\(end\)\)</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Start and end points must be different"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.start</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">start\.clone</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.end</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">end\.clone</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">protected</span>  <span style="color:#D4D4D4"> points: Point\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(points: Point\[\]\, color: Color\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(color\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#D4D4D4">points\.length</span>  <span style="color:#D4D4D4"> < </span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4"> || </span>  <span style="color:#D4D4D4">points\.length</span>  <span style="color:#D4D4D4"> > MAX\_POINTS\)</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#CE9178">\`A polygon must have at least 3 points and at most </span>  <span style="color:#569CD6">$\{</span>  <span style="color:#D4D4D4">MAX\_POINTS</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178"> points\`</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">            \);       </span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">// Check for duplicate points</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> i = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">; i < </span>  <span style="color:#D4D4D4">points\.length</span>  <span style="color:#D4D4D4">; i\+\+\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> j = i \+ </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">; j < </span>  <span style="color:#D4D4D4">points\.length</span>  <span style="color:#D4D4D4">; </span>  <span style="color:#D4D4D4">j\+\+</span>  <span style="color:#D4D4D4">\) \{</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(points\[i\]\.equals\(points\[j\]\)\) \{</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Duplicate points are not allowed in a polygon\."</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">                \}</span>

<span style="color:#D4D4D4">            \}</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> points\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.points\.push</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">point\.clone</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    \. \. \.</span>

<span style="color:#D4D4D4">    \. \. \.</span>  <span style="color:#D4D4D4">\}</span>

Still need to check this\.

Brute force approach: For each element\, check all the remaining elements for duplicates\.

Thought Question: Why does j start at i\+1 and not 0?

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

So now we can prevent our code from being exposed to “exceptional” or invalid operation\, by simply throwing an exception when those cases arise\.

If we write good test cases\, we will find errors in our code\, but right now\, our program will just exit with an error message\.

Making sure that our code will not accept invalid values and thus have undocumented\, or undefined behaviors is good  _defensive programming_ \.

It would be better if we were able to  _catch _ the exception somewhere in the call stack and handle it elgently instead of just having our program crash with an error message just because of some invalid input\.  At a minimum it would be nice to exit cleanly and report the problem to the user in a more “user friendly” way\.

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

We can use the try/catch/finally approach to handle errors thrown by methods that we call\.

<span style="color:#569CD6">try</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#6A9955">    //do something which might throw an exception</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">catch</span>  <span style="color:#D4D4D4"> \(e\) \{</span>

<span style="color:#6A9955">    </span>  <span style="color:#6A9955">//handle the exception in some way</span>

<span style="color:#D4D4D4">\}</span>  <span style="color:#569CD6">finally</span>  <span style="color:#D4D4D4">\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">//do something after regardless of the try/catch result</span>

<span style="color:#D4D4D4">\}</span>

If we do one or more operations whichmight throw an error within a try block\, if an exception occurs within that code\, that code exits immediately\, and the catch block is called\, where e is the Error derived object that was passed to throw within the code\.

This will prevent the program from exiting and  _consume_  the exception and the program will continue normally after the try/catch/finally block\.  You can rethrow the error in the catch block\, which will continue to “bubble up” the exception so our caller can handle the error after we recognize it \(maybe we log\, then rethrow\)\.

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

Here we  _try_  to create a color\.  If the color is valid\, it is created\, if not\, the error is logged to the console\, and a default color object is created\.

The finally block runs after either way\.  It creates a line with the newly defined color\.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> line: Line;</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> start = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> end = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(</span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">try</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    color = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\, green\, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">catch</span>  <span style="color:#D4D4D4"> \(e\) \{</span>

<span style="color:#D4D4D4">    console\.log\(e\);</span>

<span style="color:#D4D4D4">    color = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(\);</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">finally</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    line = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line\(start\, end\, color\);</span>

<span style="color:#D4D4D4">\}</span>

We have  _handled_  the exception and our code will work\, even if the value of green is invalid\.  It will either create a green line if green>=0 && green<=256 or the default colored line if not\.

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

A note about finally\.  In this code it is not necessary since the code continues after the try/catch either way\, so we can remove it and just let the program continue with creating the line\.

There are many use cases where we don’t need a finally block\, but there are some where we do\.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> color: Color;</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> line: Line;</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> start = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> end = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Point\(</span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">try</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    color = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\, green\, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">catch</span>  <span style="color:#D4D4D4"> \(e\) \{</span>

<span style="color:#D4D4D4">    console\.log\(e\);</span>

<span style="color:#D4D4D4">    color = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Color\(\);</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">line = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Line\(start\, end\, color\);</span>

This line executes after the try/catch regardless of what happens inside\.

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

<span style="color:#569CD6">import</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">\*</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">as</span>  <span style="color:#D4D4D4"> fs </span>  <span style="color:#569CD6">from</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">"fs"</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">fileDescriptor</span>  <span style="color:#D4D4D4">: number;</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">fileContents</span>  <span style="color:#D4D4D4">: string;</span>

<span style="color:#569CD6">try</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">fileDescriptor</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">fs\.openSync</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"test\.txt"</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#CE9178">"r"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">catch</span>  <span style="color:#D4D4D4"> \(e\) \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Could not open file test\.txt"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">try</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">fileContents</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">fs\.readFileSync</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">fileDescriptor</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#CE9178">"utf8"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">catch</span>  <span style="color:#D4D4D4"> \(e\) \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Could not read file test\.txt"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\} </span>  <span style="color:#569CD6">finally</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#CE9178">"Closing file"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">fs\.closeSync</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">fileDescriptor</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">console\.log\(</span>  <span style="color:#D4D4D4">fileContents</span>  <span style="color:#D4D4D4">\);</span>

Here is a case where finally is useful

If I have an open file\, and encounter an error while reading it\, we want to rethrow the exception\, but first we want to close the file\.

This code opens the file\, tries to read it\, and regardless of success or not\, closes the file\.

On success it prints the contents\, and on error it throws an exception\.

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* In summary\, when writing our code we should program  _defensively\._
  * When a method or code block accepts input\, throw an exception if the input is not valid\.
  * We can override \(extend\) the Error class to create our own more detailed Error classes for our exceptions\.
  * The thrown exception will “bubble up” through the code that called the code that threw the exception\, all the way to the top of the call stack\.  If nothing handles it\, then the program terminates and displays the exception and the full call stack\.
  * We can catch a thrown exception with the try/catch or try/catch/finally constructs\.  These  _consume_  the exception \(stop bubbling\)\.

__Topic: Exception Handling__

_An Exception _ is the process of responding to the occurrence of exceptions – anomalous or exceptional conditions at run time\.

* Common pitfalls and mistakes with exception handling
  * Throwing a string instead of an Error: Allowed but bad form
  * Using exceptions to communicate non\-exceptional situations\.  These are designed for expressing error conditions\, and should not be used as a way to return data in normal execution\.
  * If we want the exception to continue to bubble\, we must rethrow it\, or throw a new exception of our own\.
    * throw e
    * throw new Error\(“This is my error”\)

__Topic: Comments/Code Quality/Naming__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* Why comments?
  * Helps others \(and yourself\) use your code without having to read it\.  Informs user of everything they need to know to use your method or class\.
  * If in the correct format\, can automatically produce documentation\.
  * If in the correct format\, can be read by IDE’s like vscode\.
* Why naming matters?
  * If we do need to revisit our code \(and we will\)\, having well named variables and methods makes figuring out what the code is doing internally much easier\.
  * Our classes will be easier to use if our public interface uses names that make sense given the purpose of the thing we are referencing\.

__Topic: Comments/Code Quality/Naming__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* Code Quality
  * This is a general measure of how good the code is\.  It includes:
    * Efficiency \(more on this next semester\)
    * Readability
      * Comments\, naming\, indenting\, consistency of the code\, adherence to standards\, etc\.
    * Usability
      * How easy to use is the code\.  If it is a class\, how easy is it to create objects or extend\.  How easy is it to make changes\.  If a program\, how what is the user experience like?

__Topic: Comments__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* I hope I have already convinced you that comments are worth your time\.  Now lets look at how to format a comment in typescript to make it more usable\.
* We are using the jsdoc format for our comments\.  This is a good solution because we can automatically generate our documentation of our classes and methods\, as well as provide tool tip help in vscode \(and other IDEs\)\.
* The most common tags available to us for jsdoc are:

  * @param
  * @returns
  * @description
  * @class

  * @private
  * @protected
  * @throws
  * @export

  * @example
  * @memberof
  * @property
  * @function

  * @override
  * @implements
  * @interface

__Topic: Comments__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* Some of these are for constructs we have not learned yet\, but all but 2 can be understood now\.
* Here is a well formatted comment for the polygon class\.
  * Note it tells us everything we need to know about the class to use it\.
  * It also describes the exceptions that it may throw\.

<span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955"> \* A class that represents a polygon\.</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@class</span>  <span style="color:#6A9955"> Polygon</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@extends</span>  <span style="color:#6A9955"> Drawable</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> A class that represents a polygon\.</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@method</span>  <span style="color:#6A9955"> clone A method that returns a new polygon object that is a clone of the current polygon object\.</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@method</span>  <span style="color:#6A9955"> draw A method that draws the polygon on the drawing surface\.</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@throws</span>  <span style="color:#6A9955"> An error if the number of points is less than 3 or greater than 10\.</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@throws</span>  <span style="color:#6A9955"> An error if there are duplicate points\.</span>

<span style="color:#6A9955"> \*/</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Polygon </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Drawable \{</span>

<span style="color:#D4D4D4">   \. \. \.</span>

__Topic: Comments__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* Let’s comment the constructor
  * We see the parameters and their types and description\.
  * What exceptions to expect
  * It’s side effects
  * It’s parent class
  * It is a constructor
  * An example of how to call it\.

<span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* Create a new polygon object\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> \{Point\[\]\} points Array of vertices of the polygon\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> \{Color\} color The color of the polygon\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@throws</span>  <span style="color:#6A9955"> An error if the number of points is invalid</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@throws</span>  <span style="color:#6A9955"> An error if there are duplicate points\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> Allocates a new polygon object\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@memberof</span>  <span style="color:#6A9955"> Polygon</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@constructor</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@example</span>

<span style="color:#6A9955">     \* let p1 = new Point\(0\, 0\);</span>

<span style="color:#6A9955">     \* let p2 = new Point\(0\, 1\);</span>

<span style="color:#6A9955">     \* let p3 = new Point\(1\, 1\);</span>

<span style="color:#6A9955">     \* let polygon = new Polygon\(\[p1\, p2\, p3\]\, new Color\(\)\);</span>

<span style="color:#6A9955">\*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(points: Point\[\]\, color: Color\) \{</span>

__Topic: Comments__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* And our polygon
  * We see the parameters and their types and description\.
  * The return values
  * It’s side effects
  * It’s parent class
  * It is a function
  * An example of how to call it\.

<span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* Return a deep copy of our polygon object in a new one\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> Clones a polygon object</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> none</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> A new polygon object that is a clone of the current polygon object\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@override</span>  <span style="color:#6A9955"> The clone method of the Drawable class\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@memberof</span>  <span style="color:#6A9955"> Polygon</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@function</span>  <span style="color:#6A9955"> clone</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> Allocates a new polygon object\.</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@example</span>

<span style="color:#6A9955">     \* let p1 = new Point\(0\, 0\);</span>

<span style="color:#6A9955">     \* let p2 = new Point\(0\, 1\);</span>

<span style="color:#6A9955">     \* let p3 = new Point\(1\, 1\);</span>

<span style="color:#6A9955">     \* let </span>  <span style="color:#6A9955">polygon:Polygon</span>  <span style="color:#6A9955"> = new Polygon\(\[p1\, p2\, p3\]\, new Color\(\)\);</span>

<span style="color:#6A9955">     \* let polygon2:Polygon = </span>  <span style="color:#6A9955">polygon\.clone</span>  <span style="color:#6A9955">\(\);</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    clone\(\): Polygon \{</span>

__Topic: Comments__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

* Why bother with all this formatting?
  * Look what happens when I hover over the polygon class in vscode now\.  I now get help on using this class constructor\.
  * We can also generated detailed technical documentation automatically by using the typedoc command\.  See it here: [https://www\.eecis\.udel\.edu/~silber/docs/classes/Polygon\.html](https://www.eecis.udel.edu/~silber/docs/classes/Polygon.html)

![](img/CISC181-Week%2071.png)

![](img/CISC181-Week%2072.png)

__Topic: Comments__

Producing well documented\, high quality\, efficient and readable code is always the goal in software development\.

Quality\, well formatted comments make your code more usable\, manageable\, and maintainable\.

There are other things we can do to improve code quality as well\.

![](img/CISC181-Week%2073.jpg)

__Topic: Naming__

Naming elements in a way that we can tell what type of thing/data the element is/contains makes code more readable\.

* Consider the following simple class:
  * What do objects of this class represent?
  * Can we tell what it is and when to use it?
  * Do we know what the parameters represent?
  * What is its purpose\, why does it exist?

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> A \{</span>

<span style="color:#D4D4D4">  </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> X: </span>  <span style="color:#D4D4D4">string\,</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> Y:number\) \{\}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Naming__

Naming elements in a way that we can tell what type of thing/data the element is/contains makes code more readable\.

* Consider the following simple class:
* With meaningful names:
  * Now it is clear what this class represents\.
  * It is clear what the meaning of the parameters are
  * It is clear why this class exists and when we would use it\.
  * It’s not that hard to do it right\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> A \{</span>

<span style="color:#D4D4D4">  </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> X: </span>  <span style="color:#D4D4D4">string\,</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> Y:number\) \{\}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Person \{</span>

<span style="color:#D4D4D4">  </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> name: </span>  <span style="color:#D4D4D4">string\,</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">age:number</span>  <span style="color:#D4D4D4">\) \{\}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Jane \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">lisa</span>  <span style="color:#D4D4D4">: number\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> bill: number\,</span>

<span style="color:#D4D4D4">    \) \{\}</span>

<span style="color:#D4D4D4">    f\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`</span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.lisa</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">e</span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    g\(other: Jane\): Jane \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#D4D4D4">other\.bill</span>  <span style="color:#D4D4D4">\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Jane\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.lisa</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#D4D4D4">other\.lisa</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        \} </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">expDiff</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">Math\.abs</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#D4D4D4"> \- </span>  <span style="color:#D4D4D4">other\.bill</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#D4D4D4"> > </span>  <span style="color:#D4D4D4">other\.bill</span>  <span style="color:#D4D4D4">\) \{</span>

<span style="color:#D4D4D4">              </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Jane\(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.lisa</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#D4D4D4">other\.lisa</span>  <span style="color:#D4D4D4"> \* </span>  <span style="color:#D4D4D4">Math\.pow</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">10</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#D4D4D4">expDiff</span>  <span style="color:#D4D4D4">\)\,</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">              \);</span>

<span style="color:#D4D4D4">            \} </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">              </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Jane\(</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.lisa</span>  <span style="color:#D4D4D4"> \* </span>  <span style="color:#D4D4D4">Math\.pow</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">10</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#D4D4D4">expDiff</span>  <span style="color:#D4D4D4">\) \+ </span>  <span style="color:#D4D4D4">other\.lisa</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.bill</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">              \);</span>

<span style="color:#D4D4D4">            \}</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Naming__

Naming elements in a way that we can tell what type of thing/data the element is/contains makes code more readable\.

* What about this code?
  * What does Jane represent
  * What does f do?
  * What does g do?
  * Why did someone write this?
* While a somewhat extreme example\, bad naming is quite common\, and makes no sense to do\.

__Topic: Naming__

Naming elements in a way that we can tell what type of thing/data the element is/contains makes code more readable\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">RealNumber</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> integer: number\,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> exponent: number\,</span>

<span style="color:#D4D4D4">    \) \{\}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">toString</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`</span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.integer</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">e</span>  <span style="color:#569CD6">$\{</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#569CD6">\}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    add\(other: </span>  <span style="color:#D4D4D4">RealNumber</span>  <span style="color:#D4D4D4">\): </span>  <span style="color:#D4D4D4">RealNumber</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#D4D4D4">other\.exponent</span>  <span style="color:#D4D4D4">\) \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">RealNumber</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.integer</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#D4D4D4">other\.integer</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        \} </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">expDiff</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">Math\.abs</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#D4D4D4"> \- </span>  <span style="color:#D4D4D4">other\.exponent</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#D4D4D4"> > </span>  <span style="color:#D4D4D4">other\.exponent</span>  <span style="color:#D4D4D4">\) \{</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">RealNumber</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.integer</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#D4D4D4">other\.integer</span>  <span style="color:#D4D4D4"> \* </span>  <span style="color:#D4D4D4">Math\.pow</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">10</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#D4D4D4">expDiff</span>  <span style="color:#D4D4D4">\)\,</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">                \);</span>

<span style="color:#D4D4D4">            \} </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">RealNumber</span>  <span style="color:#D4D4D4">\(</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.integer</span>  <span style="color:#D4D4D4"> \* </span>  <span style="color:#D4D4D4">Math\.pow</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">10</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#D4D4D4">expDiff</span>  <span style="color:#D4D4D4">\) \+ </span>  <span style="color:#D4D4D4">other\.integer</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.exponent</span>  <span style="color:#D4D4D4">\,</span>

<span style="color:#D4D4D4">                \);</span>

<span style="color:#D4D4D4">            \}</span>

<span style="color:#D4D4D4">        \}</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

* What about now?
  * It’s clear what the class represents
  * It’s clear what toString does
  * It’s clear what add does
  * It’s clear what this is for\.

__Topic: General Code Quality__

Programmers should always try to create efficient\, readable\, and maintainable code\.  It’s not that hard to do it right\.

![](img/CISC181-Week%2074.jpg)

In addition to good comments and names\, it is important to write code that is easy to understand\.  Unless there is an efficiency gain\, try not to combine too much work on one line\, as it will be harder to decode what that line does later and also harder to debug\.

__Topic: General Code Quality__

Programmers should always try to create efficient\, readable\, and maintainable code\.  It’s not that hard to do it right\.

Good formatting\, indenting\, and consistency of style are important to maintaining a large code base\.  Many organizations will dictate these types of things\.

![](img/CISC181-Week%2075.jpg)

  * Indents are 2 or 4 spaces
  * Braces at the end of lines or on a new line
  * Parameters on one line or multiple lines
  * The list goes on\.  There are best practices\, but while many are agreed upon\, some are preferences\.
* Rule number 1: be consistent\.

# 

![](img/CISC181-Week%2076.jpg)


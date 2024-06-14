CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 11
Spring 2024

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

Last week we discussed the WebEz EventSubject\, which was a  _Generic_  class that we could pass type parameters to during creation\.

This is a single class definition that works on any type of data\.

We can make our own generic functions\, classes\, interfaces\, or type aliases by creating them with one or more  _type parameters _ that can be specified by the caller\.

Overall\, this allows us to create reusable code that works on various types of data\.

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">event:EventSubject</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    event2:EventSubject\<number> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<number>\(\);</span>

<span style="color:#D4D4D4">    event3:EventSubject\<string> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string>\(\);</span>

<span style="color:#D4D4D4">    event4:EventSubject<</span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4"><</span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">>\(\);</span>

<span style="color:#D4D4D4">    event5:EventSubject\<string\[\]> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string\[\]>\(\);</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

Consider the following simple method:

This method print  _Result: 5_  when called with a parameter of 5\.

What if we wanted to allow other types of data to be printed\.  We could write another function:

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">printNumberResult</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">result:number</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#CE9178">'Result: '</span>  <span style="color:#D4D4D4"> \+ result\);</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">printStringResult</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">result:</span>  <span style="color:#D4D4D4">string</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#CE9178">'Result: '</span>  <span style="color:#D4D4D4"> \+ result\);</span>

<span style="color:#D4D4D4">\}</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

While we could write a different function for each type we wish to support\, it would be better if we could right a single method for all of them\.  Let’s dig into this code a bit more:

We know console\.log will print anything\, so the only issue here is that our method expects a number\.

We can make this function a generic by adding a type parameter and using it as the type of the result parameter\.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">printNumberResult</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">result:number</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#CE9178">'Result: '</span>  <span style="color:#D4D4D4"> \+ result\);</span>

<span style="color:#D4D4D4">\}</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

Here we have added a type parameter\, and use that type parameter to set the type of the function’s parameter\.

Now we can specify the type of data when we call it:

As it turns out\, Typescript can infer the type from the parameter\, so we can also leave it out here:

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">printResult</span>  <span style="color:#D4D4D4">\<T>\(</span>  <span style="color:#D4D4D4">result:T</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">    console\.log\(</span>  <span style="color:#CE9178">'Result: '</span>  <span style="color:#D4D4D4"> \+ result\);</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">printResult</span>  <span style="color:#D4D4D4">\<number>\(</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">printResult</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">printResult</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"hello"</span>  <span style="color:#D4D4D4">\)</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

We can also add multiple type parameters to our function if we need more than one generic type:

This method returns an array with 2 elements\, the first of type T and the second of type S\.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">makePair</span>  <span style="color:#D4D4D4">\<T\,S>\(</span>  <span style="color:#D4D4D4">x:T\,y:S</span>  <span style="color:#D4D4D4">\):\[T\,S\]\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> \[</span>  <span style="color:#D4D4D4">x\,y</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> result=</span>  <span style="color:#D4D4D4">makePair</span>  <span style="color:#D4D4D4"><</span>  <span style="color:#D4D4D4">number\,string</span>  <span style="color:#D4D4D4">>\(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">\,</span>  <span style="color:#CE9178">"hello"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">printResult</span>  <span style="color:#D4D4D4">\(result\);</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

This type checking happens at compile time\.

If we call it with the wrong arguments:

We get a compiler error when we build

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">makePair</span>  <span style="color:#D4D4D4">\<T\,S>\(</span>  <span style="color:#D4D4D4">x:T\,y:S</span>  <span style="color:#D4D4D4">\):\[T\,S\]\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> \[</span>  <span style="color:#D4D4D4">x\,y</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> result=</span>  <span style="color:#D4D4D4">makePair</span>  <span style="color:#D4D4D4"><</span>  <span style="color:#D4D4D4">number\,string</span>  <span style="color:#D4D4D4">>\(</span>  <span style="color:#CE9178">"hello“\,1</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">printResult</span>  <span style="color:#D4D4D4">\(result\);</span>

<span style="color:#569CD6">test\.ts:17:38 \- error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'\.</span>

<span style="color:#569CD6">17 const result=</span>  <span style="color:#569CD6">makePair</span>  <span style="color:#569CD6"><</span>  <span style="color:#569CD6">number\,string</span>  <span style="color:#569CD6">>\("hello"\,1\);</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

We can limit the types that are acceptable as a type parameter by using the  _extends _ keyword\.

Here we are saying that the first type parameter must be a string or a number \(if we used a class\, it would also allow anything derived from that class\.

__Note:__  string|number is referred to as a  _Union Type which _ we will talk more about later\, but basically we can combine types with a | and then either type would be acceptable\.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">makePair</span>  <span style="color:#D4D4D4"><T </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">string|number\,S</span>  <span style="color:#D4D4D4">>\(</span>  <span style="color:#D4D4D4">x:T\,y:S</span>  <span style="color:#D4D4D4">\):\[T\,S\]\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> \[</span>  <span style="color:#D4D4D4">x\,y</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">\}</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

Consider this class hierarchy for various types of shoes\.  If we want a function that takes any kind of shoe\, we can do this easily:

We can also do this with a generic:

In this case\, either would work\, but there are places where a generic is a better solution\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Shoe\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">size:number</span>  <span style="color:#D4D4D4">\)\{\}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Sneaker </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Shoe\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">size:number\,</span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sport:string</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(size\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Boot </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Shoe\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">size:number\,</span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">height:number</span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">\(size\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">getShowSize</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">shoe:Shoe</span>  <span style="color:#D4D4D4">\):number\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">shoe\.size</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">getShowSize</span>  <span style="color:#D4D4D4"><T </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> Shoe>\(</span>  <span style="color:#D4D4D4">shoe:T</span>  <span style="color:#D4D4D4">\):number\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">shoe\.size</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">\}</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

* Just like functions\, we can use generics for classes as well\.  Let’s consider a class for a list of numbers:
  * What if we wanted to extend this soit worked on a list of any type\, even alist of lists\.
  * We could use a generic definition to make ItemList work on any type\, andnot just on numbers
  * As always we can limit the acceptable types using the extend keyword\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">items:number</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(\)\{\}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addItem</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">item:number</span>  <span style="color:#D4D4D4">\):void\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.items\.push</span>  <span style="color:#D4D4D4">\(item\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">list:ItemList</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">list\.addItem</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">\);</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

We can rewrite the class using a generic to make it more useful and reusable\.

Now we can create a homogeneous listof anything by specifying the type of objectthe list contains with a type parameter\.

Now we have created a class that workson any data\, instead of just on numbers\.

We can even add type parameters to themethods within our class to make themmore reusable\.

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<T>\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">items:T</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(\)\{\}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addItem</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">item:T</span>  <span style="color:#D4D4D4">\):void\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.items\.push</span>  <span style="color:#D4D4D4">\(item\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">list:ItemList</span>  <span style="color:#D4D4D4">\<number>=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<number>\(\);</span>

<span style="color:#D4D4D4">list\.addItem</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> list2:ItemList\<string>=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<string>\(\);</span>

<span style="color:#D4D4D4">list2\.addItem\(</span>  <span style="color:#CE9178">"hello"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> list3:ItemList\<Shoe\[\]>=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<Shoe\[\]>\(\);</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

* Finally\, we can provide a default value for our generic to describe how it behaves if no type parameter is provided:
  * If a parameter is provided\, the defaultis ignored\.
  * If no parameter is provided\, then thetype must match the default if we usethe class \(i\.e\. we must pass a number\,anything else will cause a type errorat compile time\)\.
* So let’s look at a real example

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<T=number>\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">items:T</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(\)\{\}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">addItem</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">item:T</span>  <span style="color:#D4D4D4">\):void\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.items\.push</span>  <span style="color:#D4D4D4">\(item\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">list:ItemList</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">list\.addItem</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> list2:ItemList\<string>=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<string>\(\);</span>

<span style="color:#D4D4D4">list2\.addItem\(</span>  <span style="color:#CE9178">"hello"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> list3:ItemList\<Shoe\[\]>=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ItemList</span>  <span style="color:#D4D4D4">\<Shoe\[\]>\(\);</span>

__Aside: Generics in Typescript__

__Topic: Generics__  _Generics_  allow for creation of reusable code that where internal types can be specified externally\.

* Let’s go back to the EventSubject and look at the source code for it\.
  * T defaults to void if no parameter is provided
  * subscribe takes a function whose parameterhas type T\.
  * next takes a value of type T
* This is as expected when you consider how we usedEventSubject previously\.
  * With no type argument its data is void \(nothing\)
  * With a type parameter\, the type it works withis the value specified for T\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<T = void> \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(\) \{\}</span>

<span style="color:#D4D4D4">    subscribe\(callback: \(value: T\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> void\, </span>  <span style="color:#D4D4D4">        error?: \(value: Error\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> void\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//something goes here</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    unsubscribe\(id: number\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//something goes here</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    next\(value: T\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//something goes here</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    error\(value: Error\) \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//something goes here</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

![](img/CISC181-Week%20110.jpg)

# 

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

* Sometimes we want to describe the shape of our data
* Sometimes we want to describe the methods andvalues that a class contains without detailing the entire class\.
  * We can only extend one class\, but we can  _implement_  many interfaces\.
* We say that it is a contract\, because the object mustimplement the things in the interface\, and usersof the object are guaranteed that those things areimplemented\.
* Can contain property or method signatures but not implementations\.

![](img/CISC181-Week%20111.png)

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

* A simple example:
  * Suppose we are building a drawing program and want to be able to pass around point structures \{x:number\,y:number\}\.
  * We can declare this as an interface then use the interface name as a type\.  We can’t create one \(with new\) like a class\, but it will guarantee that the object contains the members of the interface and onlythe members of the interface\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Point\{</span>

<span style="color:#D4D4D4">    x:number;</span>

<span style="color:#D4D4D4">    y:number;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">point:Point</span>  <span style="color:#D4D4D4">=\{x:</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">\,y:</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">\};</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point2:Point=\{x:</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">\,y:</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">\,z:</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">\};</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> point3:Point=\{x:</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">\};</span>

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

We can say a class implements an interface if it contains all of the members of the interface\.  Using the implements keyword guaranteesthat\.

Now I can refer to the DrawPoint object as a Pointand I know it contains an x and a y without havingto know anything else about DrawPoint\.

We are guaranteed that DrawPoint contains an x anda y member\, because it implements point\.  If it doesn’t\, the code won’t compile\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Point\{</span>

<span style="color:#D4D4D4">    x:number;</span>

<span style="color:#D4D4D4">    y:number;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">Draw</span>  <span style="color:#D4D4D4">Point</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">implements</span>  <span style="color:#D4D4D4"> Point\{</span>

<span style="color:#D4D4D4">    x:number;</span>

<span style="color:#D4D4D4">    y:number;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">        x:number\,</span>  <span style="color:#D4D4D4">        y:number\,</span>  <span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">color:string</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.x</span>  <span style="color:#D4D4D4">=x;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.y</span>  <span style="color:#D4D4D4">=y;</span>

<span style="color:#D4D4D4">    \}</span>  <span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">point:Point</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">DrawPoint</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">\,</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#D4D4D4">\,</span>  <span style="color:#CE9178">"red"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">console\.log\(</span>  <span style="color:#D4D4D4">point\.x\,point\.y</span>  <span style="color:#D4D4D4">\);</span>

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

Interfaces can contain methods as well\.  They don’t include the implementation\, they are just stating that the class must contain that method in order to compile\, so users of the class know it contains that method\.

Here we can see that Triangle contains an array ofPoint objects\, and a draw method\, therefore it correctly implements the Drawable interface\.

If a class implements an interface\, then the class canbe referenced as an object of interface type and willalways have the points array and draw method orit would not compile\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Drawable\{</span>

<span style="color:#D4D4D4">    points: Point\[\];</span>

<span style="color:#D4D4D4">    draw\(\):void;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Triangle </span>  <span style="color:#569CD6">implements</span>  <span style="color:#D4D4D4"> Drawable\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">points:Point</span>  <span style="color:#D4D4D4">\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">\(p1:Point\,p2:Point\,p3:Point\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.points</span>  <span style="color:#D4D4D4">=\[p1\,p2\,p3\];</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    draw\(\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//draw triangle</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Serializable\{</span>

<span style="color:#D4D4D4">    serialize\(\):string;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">Iterable</span>  <span style="color:#D4D4D4">\<T>\{</span>

<span style="color:#D4D4D4">    next\(\):T;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">MyList</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">implements</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">Serializable\,Iterable</span>  <span style="color:#D4D4D4">\<number>\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">values:number</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">pos:number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    next\(\):number\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.pos</span>  <span style="color:#D4D4D4"><</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.values\.length</span>  <span style="color:#D4D4D4">\)</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.values</span>  <span style="color:#D4D4D4">\[</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.pos</span>  <span style="color:#D4D4D4">\+\+\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">else</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> \-</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    serialize\(\):string\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">JSON\.stringify</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.values</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

A class cannot extend more than one class in typescript\, but it can implement many interfaces\.

Here we have a class that implements two interfaces\.  We can see that it provides the implementation that matches the signatures in the interface\.  Now I can use it to write a function:

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">serializeAll</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">obj:Serializable</span>  <span style="color:#D4D4D4">\[\]\)\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">result:string</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> o </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> obj\)\{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">result\.push</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">o\.serialize</span>  <span style="color:#D4D4D4">\(\)\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> result;</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">obj:MyList</span>  <span style="color:#D4D4D4">\[\]=\[</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">MyList</span>  <span style="color:#D4D4D4">\(\)\];</span>

<span style="color:#D4D4D4">console\.log\(</span>  <span style="color:#D4D4D4">serializeAll</span>  <span style="color:#D4D4D4">\(obj\)\);</span>

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

* The primary uses for interfaces are to:
  * Describe the shape of data to guarantee that the data is in the right form\.
  * Describe certain features that we want to enforce when we create a class so that if we know the class implements the interface\, we know that the interface members actually exist in the class and are implemented for us\.
  * Using interfaces we can simplify coding by having multiple \(very different\) classes that all implement the interface\, then we can call the interface methods on the objects even though they are otherwise unrelated\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Point\{</span>  <span style="color:#D4D4D4">x:number;y:number</span>  <span style="color:#D4D4D4">;\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Drawable\{points: Point\[\];draw\(\):void;\}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Triangle </span>  <span style="color:#569CD6">implements</span>  <span style="color:#D4D4D4"> Drawable\{ \. \. \. \}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elephant </span>  <span style="color:#569CD6">implements</span>  <span style="color:#D4D4D4"> Serializable\{ \. \. \. \}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Tomato </span>  <span style="color:#569CD6">implements</span>  <span style="color:#D4D4D4"> Serializable\{ \. \. \. \}</span>

__Topic: Interfaces__ An  _interface_  is a contract that describes the shape of data \(or a class\) without values or implementation\.

* Some facts about interfaces:
  * Interfaces allow us to further type our data by specifying what methods and properties an object must contain\.
  * Unlike extending classes \(inheritance\)\, we can implement multiple interfaces in a single class\.
  * If a class implements an interface\, then that class can be stored in a variable whose type is the interface\, and we can access the interfaces members through that variable\.
  * Interfaces can be very useful to describe typescript objects that are otherwise untyped \(like complex data returned from an API call\)\.  Once described\, the interface will enforce that the object is indeed the correct shape and contains all of the interface members \(methods and properties\)\.
  * Interfaces are common in most Object Oriented programming languages and provide a convenient means to strengthen typing within our code\.

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types\.

* We know we can declare new types in typescript by creating classes and interfaces\, and we can use these types in our programs\.
* But what if we don’t know the type\, but we know that it one of a finite number of types:
  * It could be a number or a string
  * It could be a class instance or null
* We can combine types into a new either/or type by creating a union type\.
* When a variable is declared as a union type\, it can take on either type of value\, but the value must be one of those types\.

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types\.

* Imagine we want to create a function that pads a string on the left\.
  * We might want it to take a string to prepend
  * We might want it to take a number and add that many spaces to the front
  * It would be great if we could combine these into one function\, but not allow invalid types\.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\)\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">\}</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString2</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\)\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Array</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">\)\.</span>  <span style="color:#DCDCAA">join</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#CE9178">" "</span>  <span style="color:#CCCCCC">\) </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">\}</span>

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types\.

We can use a uniontype to combine the signatures:

Then check the type of padding and act accordingly:

We can apply this to other types as well\.  Classes\, interfaces\, etc\.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string|number</span>  <span style="color:#CCCCCC">\)\{</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">|</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\)\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#569CD6">typeof</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">===</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">"number"</span>  <span style="color:#CCCCCC">\)\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Array</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">\)\.</span>  <span style="color:#DCDCAA">join</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#CE9178">" "</span>  <span style="color:#CCCCCC">\) </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">\}</span>

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types\.

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Tony"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">\(\)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is a tiger"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">eat</span>  <span style="color:#CCCCCC">\(\)\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#CE9178">"Yum"</span>  <span style="color:#CCCCCC">\);</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Kevin"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">height</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">\(\)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is "</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">height</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" feet tall"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">\}</span>

* Consider these classes:
* We can union these as well:
* Through this variable\, we can access any members that both of these
* But not members that are not shared
  * We cannot access eat\(\) on Tiger or height on Tree since they are not part of both classes\.

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#D4D4D4">|</span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">\(\);</span>

<span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC">\);</span>

<span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">\(\)\);</span>

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types\.

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Tony"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">\(\)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is a tiger"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">eat</span>  <span style="color:#CCCCCC">\(\)\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#CE9178">"Yum"</span>  <span style="color:#CCCCCC">\);</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">\}</span>

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Kevin"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">height</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">\(\)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">\{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is "</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">height</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" feet tall"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    \}</span>

<span style="color:#CCCCCC">\}</span>

We can also create a  _type alias_  to combine them:

Then we can use it as a type:

<span style="color:#569CD6">declare</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">type</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">ThingsThatStartWithT</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#D4D4D4">|</span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">ThingsThatStartWithT</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">\(\);</span>

<span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">\(</span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#CCCCCC">\.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC">\);</span>


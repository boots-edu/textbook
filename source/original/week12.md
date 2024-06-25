CISC 181-INTRODUCTION TO COMPUTER SCIENCE II

# Week 12
Spring 2024

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types.

* We know we can declare new types in typescript by creating classes and interfaces, and we can use these types in our programs.
* But what if we don't know the type, but we know that it one of a finite number of types:
  * It could be a number or a string
  * It could be a class instance or null
* We can combine types into a new either/or type by creating a union type.
* When a variable is declared as a union type, it can take on either type of value, but the value must be one of those types.

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types.

* Imagine we want to create a function that pads a string on the left.
  * We might want it to take a string to prepend
  * We might want it to take a number and add that many spaces to the front
  * It would be great if we could combine these into one function, but not allow invalid types.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">+</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString2</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Array</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">).</span>  <span style="color:#DCDCAA">join</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">" "</span>  <span style="color:#CCCCCC">) </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">}</span>

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types.

We can use a uniontype to combine the signatures:

Then check the type of padding and act accordingly:

We can apply this to other types as well.  Classes, interfaces, etc.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string|number</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">padString</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">|</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#569CD6">typeof</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">===</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">"number"</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Array</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">).</span>  <span style="color:#DCDCAA">join</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">" "</span>  <span style="color:#CCCCCC">) </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">+</span>  <span style="color:#9CDCFE">value</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">}</span>

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types.

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Tony"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is a tiger"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">eat</span>  <span style="color:#CCCCCC">(){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">"Yum"</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Kevin"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">height</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is "</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">height</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" feet tall"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

* Consider these classes:
* We can union these as well:
* Through this variable, we can access any members that both of these
* But not members that are not shared
  * We cannot access eat() on Tiger or height on Tree since they are not part of both classes.

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#D4D4D4">|</span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">();</span>

<span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">());</span>

__Topic: Union Types__  _Union types_  are a way of declaring a variable that can hold values of two or more different types.

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Tony"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is a tiger"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">eat</span>  <span style="color:#CCCCCC">(){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">"Yum"</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Kevin"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#9CDCFE">height</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">getDetails</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">string</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" is "</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">height</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#CE9178">" feet tall"</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

We can also create a  _type alias_  to combine them:

Then we can use it as a type:

<span style="color:#569CD6">declare</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">type</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">ThingsThatStartWithT</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#D4D4D4">|</span>  <span style="color:#4EC9B0">Tiger</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">ThingsThatStartWithT</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#9CDCFE">whatisit</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Tree</span>  <span style="color:#CCCCCC">();</span>

<span style="color:#9CDCFE">console</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">log</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">whatisit</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">name</span>  <span style="color:#CCCCCC">);</span>

__Topic: Higher Order Array Methods__  __Higher order functions is a function that takes as an argument and/or returns a function.__

* The term  _Higher Order Method _ simply refers to any method which takes a function as an argument, returns a function, or both.
* This is nothing new for us.  We have seen this before.
  * The describe and test methods we use in our jest test code.
  * EventSubject.subscribe(…) in our WebEz code

<span style="color:#D4D4D4">describe(</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">MainComponent</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">, () </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    describe(</span>  <span style="color:#CE9178">"Constructor"</span>  <span style="color:#D4D4D4">, () </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        test(</span>  <span style="color:#CE9178">"Create Instance"</span>  <span style="color:#D4D4D4">, () </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        });</span>

<span style="color:#D4D4D4">    });</span>

<span style="color:#D4D4D4">});</span>

<span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.elementAdded.subscribe</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">value:boolean</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {})</span>

__Topic: Higher Order Array Methods__  __Higher order functions is a function that takes as an argument and/or returns a function.__

In Typescript, when passing a function as an argument, it is often convenient to use an  _anonymous function _ which we have talked about already.  You can always spot this because it will have the => operator.

Since functions in typescript are  _first order objects,_  we can use them as parameters and return values.

We can specify the  _shape_  or  _signature _ of the expected parameter or return type.

In this signature for the subscribe method, the parameter named callback is of type  __(value: T) => void __ and the parameter named error is of type  __(__  __value:Error__  __)=>void__  where T is a type parameter used when creating an instance of the class and Error is the error type provided by Typescript.

<span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.elementAdded.subscribe</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">value:boolean</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {})</span>

<span style="color:#D4D4D4">subscribe(callback: (value: T) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> void, error?: (value: Error) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> void):number</span>

__Topic: Higher Order Array Methods__  __Higher order functions is a function that takes as an argument and/or returns a function.__

This language feature of typescript (and many other languages where functions are  _first order objects_ ) allows for some useful and interesting ways to right code and typescript (javascript) provides some built-in functions that take advantage of this.

Use of these built-in methods will make your code shorter, simpler and more readable.

There is nothing these can do that we could not write in some other way, but they simplify things considerably.

We will examine several methods that can be applied to arrays including map, filter, reduce, reduceRight, every, some, find, findIndex, findLastIndex, flatMap, forEach, and sort,

<span style="color:#D4D4D4">subscribe(callback: (value: T) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> void, error?: (value: Error) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> void):number</span>

__Topic: Higher Order Array Methods__  __With __  _forEach_  __ we can execute a method on each element of an array.__

The simplest and most straightforward higher order array method is  _forEach_  which takes a function as its only argument and executes that function on each argument in the list.  If we wanted to do this without using the forEach method, we couldcertainly do it with a simple for loop:

We can also use our new higher order forEach method to accomplish the same thing.  Notice that the only difference is that we are passing a simple method to the forEach function whichaccomplishes whatever we want to do in the loop body by calling that function on each element of the array.

If we want to call a member function instead, we can simply call it in the body of the anonymous function.

__This does not mutate the array in any way.__

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">arr:string</span>  <span style="color:#D4D4D4">\[\] = \[</span>  <span style="color:#CE9178">'a'</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">'b'</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">'c'</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> value </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">arr</span>  <span style="color:#D4D4D4">) {console.log(value)}</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">arr:string</span>  <span style="color:#D4D4D4">\[\] = \[</span>  <span style="color:#CE9178">'a'</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">'b'</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">'c'</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">arr.forEach</span>  <span style="color:#D4D4D4">((value) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {console.log(value)})</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">arr:string</span>  <span style="color:#D4D4D4">\[\] = \[</span>  <span style="color:#CE9178">'a'</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">'b'</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">'c'</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">arr.forEach</span>  <span style="color:#D4D4D4">((value) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.doWork</span>  <span style="color:#D4D4D4">(value)})</span>

__Topic: Higher Order Array Methods__  __With __  _every and some_  __ we can determine things about the array as a whole.__

* The every and some method execute a function that returns a boolean on each element of the array and return true if the function returns true for (every/some) of the elements in the array.
* every
  * Returns true if the function returns true on all of the elements
  * Returns false if the function is false on any single element
* some
  * Returns true if the function returnstrue on any single element
  * Returns false if the function returnsfalse on all of the elements

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> ages= \[</span>  <span style="color:#B5CEA8">21</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">12</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">19</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">6</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">15</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">ages.some</span>  <span style="color:#D4D4D4">((age) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> age > </span>  <span style="color:#B5CEA8">18</span>  <span style="color:#D4D4D4">)){</span>

<span style="color:#D4D4D4">            console.log(</span>  <span style="color:#CE9178">'We have some adults'</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        }</span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">            console.log(</span>  <span style="color:#CE9178">'We have no adults'</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">ages.every</span>  <span style="color:#D4D4D4">((age) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> age > </span>  <span style="color:#B5CEA8">18</span>  <span style="color:#D4D4D4">)){</span>

<span style="color:#D4D4D4">            console.log(</span>  <span style="color:#CE9178">'We have all adults'</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">            console.log(</span>  <span style="color:#CE9178">'We have at least 1 kid'</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        }</span>

__These do not mutate the array in any way.__

__Topic: Higher Order Array Methods__  __With __  _find and _  _findIndex_  __ we can get elements from within an array by their values.__

The find method execute a function (Test method) that returns a boolean on each element of the array and returns the first element where the function returns true.  findIndex returns the cardinal index instead.

find -Returns the first element where the test function returns true

find -Returns undefined if no elements found

findIndex -Returns the index of the first element where the test function returns true

findIndex -Returns -1 if no elements found

__Note: There are Last versions of these methods that return the last element (__  __findLast__  __, __  __findLastIndex__  __)__

<span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Person {</span>

<span style="color:#D4D4D4">    name: string;</span>

<span style="color:#D4D4D4">    age: string;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> people: Person\[\] = \[{ name: </span>  <span style="color:#CE9178">"John"</span>  <span style="color:#D4D4D4">, age: </span>  <span style="color:#CE9178">"21"</span>  <span style="color:#D4D4D4"> },</span>

<span style="color:#D4D4D4">    { name: </span>  <span style="color:#CE9178">"Jane"</span>  <span style="color:#D4D4D4">, age: </span>  <span style="color:#CE9178">"22"</span>  <span style="color:#D4D4D4"> }\];</span>

<span style="color:#D4D4D4">let jane = </span>  <span style="color:#D4D4D4">people.find</span>  <span style="color:#D4D4D4">((person) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> person.name === </span>  <span style="color:#CE9178">Jane"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (jane !== </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) console.log(</span>  <span style="color:#CE9178">\`found </span>  <span style="color:#569CD6">${</span>  <span style="color:#D4D4D4">jane.name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">\`</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> index = </span>  <span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">people.findIndex</span>  <span style="color:#D4D4D4">((person) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> person.name === </span>  <span style="color:#CE9178">"John"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (index !== -</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">) console.log(</span>  <span style="color:#D4D4D4">    </span>  <span style="color:#CE9178">\`found </span>  <span style="color:#569CD6">${</span>  <span style="color:#D4D4D4">people\[index\].name</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178"> \`</span>  <span style="color:#D4D4D4">);</span>

__These do not mutate the array in any way.__

__Topic: Higher Order Array Methods__  __With __  _filter _  __we can get create a new array containing only elements that return true on the test.__

The filter method executes a function (Test method) that returns a boolean on each element of the array. It returns a new array of the elements where the function returns true.

Returns an array with all of the elements (Jane in our example) wherethe function returns true.If the function returns false on all elements, it returns an empty array \[\].

Since it does not mutate the originalarray, you must capture the returnvalue.

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> people: Person\[\] = \[</span>

<span style="color:#D4D4D4">    { name: </span>  <span style="color:#CE9178">"John"</span>  <span style="color:#D4D4D4">, age: </span>  <span style="color:#B5CEA8">17</span>  <span style="color:#D4D4D4"> },</span>

<span style="color:#D4D4D4">    { name: </span>  <span style="color:#CE9178">"Jane"</span>  <span style="color:#D4D4D4">, age: </span>  <span style="color:#B5CEA8">22</span>  <span style="color:#D4D4D4"> },</span>

<span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> adults = </span>  <span style="color:#D4D4D4">people.filter</span>  <span style="color:#D4D4D4">((person) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">person.age</span>  <span style="color:#D4D4D4"> > </span>  <span style="color:#B5CEA8">18</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(adults);</span>

__This does not mutate the array in any way.__

__Topic: Higher Order Array Methods__  __With __  _map_  __ we can create a new array by manipulating the elements in an array.__

The map method executes a function (Test method) that returns a new array consisting of the return values of the function applied to each element.

In the example, the method is called oneach person object, and returns the age of that person.  The result is an array containing the ages ofeach person.

It is not critical that the method USE the element of the array, suppose I wanted to create an array containing 0's for each element in ourarray.

Map is very useful for extracting datafrom an array of objects.

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ages:number</span>  <span style="color:#D4D4D4">\[\]=</span>  <span style="color:#D4D4D4">people.map</span>  <span style="color:#D4D4D4">((person) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">person.age</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(ages)</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">ages:number</span>  <span style="color:#D4D4D4">\[\]=</span>  <span style="color:#D4D4D4">people.map</span>  <span style="color:#D4D4D4">((person) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> 0);</span>

<span style="color:#D4D4D4">console.log(ages)</span>

__These do not mutate the array in any way.__

__Topic: Higher Order Array Methods__  _flatMap_  __ we can create a new array by manipulating the elements in an array and its sub-arrays.__

The flatMap method executes a function (Test method) that returns a new array consisting of the return values of the function applied to each element in a nestedarray.

In the example, the method is called oneach person object, but the functionreturns an array which is then combinedwith the other arrays returned into a singlearray.

Here map would return \[\[‘admin','user'\],\[‘editor'\], but flatMapflattens it into \[‘admin','user','editor'\]

<span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Person {</span>

<span style="color:#D4D4D4">    name: string;</span>

<span style="color:#D4D4D4">    groups: string\[\];</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> people: Person\[\] = \[</span>

<span style="color:#D4D4D4">    { name: </span>  <span style="color:#CE9178">"John"</span>  <span style="color:#D4D4D4">, groups: \[</span>  <span style="color:#CE9178">"admin"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"user"</span>  <span style="color:#D4D4D4">\] },</span>

<span style="color:#D4D4D4">    { name: </span>  <span style="color:#CE9178">"Jane"</span>  <span style="color:#D4D4D4">, groups: \[</span>  <span style="color:#CE9178">"editor"</span>  <span style="color:#D4D4D4">\] },</span>

<span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> groups: string\[\] = </span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">people.flatMap</span>  <span style="color:#D4D4D4">((person) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">person.groups</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(groups);</span>

<span style="color:#D4D4D4">\[‘</span>  <span style="color:#D4D4D4">admin','user','editor</span>  <span style="color:#D4D4D4">'\]</span>

__These do not mutate the array in any way.__

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

The reduce method takes a function of two parameters.  The first is the array element and the second is an  _accumulator _ variable which gets passed to each function along with the array element.

The accumulator value is passed from one function call to the next allowing us to  _Reduce _ the array into a single value.

The reduce method returns a single value that is the accumulated result of all of the functions calls on each element of the array.

The reduce function ignores empty array elements.

In the example we are summing up the numbers in an array by adding each number to acc.  The initial value of acc is the second parameter to reduce.

Here is a product example:

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">vals</span>  <span style="color:#D4D4D4">: number\[\] = \[</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">4</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">5</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> product= </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc * </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">);</span>

__These do not mutate the array in any way.__

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

For something a little bit more interesting, we can compute some basic statistics on an array.

Note that we can do anythinginside the function and any changes we make to the accumulator parameter get passedon to the function call for the nextelement in the array.

We can exclude some values from our count, and also map somevalues first.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> max= </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">Math.max</span>  <span style="color:#D4D4D4">(acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">), -</span>  <span style="color:#569CD6">Infinity</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> min= </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">Math.min</span>  <span style="color:#D4D4D4">(acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">), </span>  <span style="color:#569CD6">Infinity</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> average = </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">) / </span>  <span style="color:#D4D4D4">vals.length</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stdev</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">Math.sqrt</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> acc + (</span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4"> - average) ** </span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">) / </span>  <span style="color:#D4D4D4">vals.length</span>  <span style="color:#D4D4D4">);</span>

Notice that without the braces {} the value is returned automatically, but with the braces I must explicitly call return.  This is true of all anonymous functions

<span style="color:#D4D4D4">sumOdd</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">acc,val</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (val%</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">acc+val</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> acc;</span>

<span style="color:#D4D4D4">},</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

__These do not mutate the array in any way.__

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

Even though we are supposed to return a single value,that value can be a complex object.  Here we computeall the statistics in a single pass through the array.

We can even use it to combine map and filter in asingle step.

This creates an array of the squares of the oddnumbers in the array.

<span style="color:#569CD6">interface</span>  <span style="color:#D4D4D4"> Stats {</span>

<span style="color:#D4D4D4">    max: number;</span>

<span style="color:#D4D4D4">    min: number;</span>

<span style="color:#D4D4D4">    average: number;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">stdev</span>  <span style="color:#D4D4D4">: number;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> stats: Stats = </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">(</span>

<span style="color:#D4D4D4">    (acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            max: </span>  <span style="color:#D4D4D4">Math.max</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">acc.max</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">            min: </span>  <span style="color:#D4D4D4">Math.min</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">acc.min</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">),</span>

<span style="color:#D4D4D4">            average: </span>  <span style="color:#D4D4D4">acc.average</span>  <span style="color:#D4D4D4"> + </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">stdev</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">acc.stdev</span>  <span style="color:#D4D4D4"> + (</span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4"> - </span>  <span style="color:#D4D4D4">acc.average</span>  <span style="color:#D4D4D4">) ** </span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">        };</span>

<span style="color:#D4D4D4">    },</span>

<span style="color:#D4D4D4">    {</span>

<span style="color:#D4D4D4">        max: -</span>  <span style="color:#569CD6">Infinity</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">        min: </span>  <span style="color:#569CD6">Infinity</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">        average: </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">stdev</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">,</span>

<span style="color:#D4D4D4">    },</span>

<span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">OddSqrs</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((acc: number\[\], </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">: number) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    if (val%2) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> \[...acc, </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4"> * </span>  <span style="color:#D4D4D4">val</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">    else return \[…acc\];</span>

<span style="color:#D4D4D4">}, \[\]);</span>

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

Consider this array:

We will use this function to sum the array

The first parameter is our function which takes theaccumulator variable and a variable to receive each element of our array.

The second parameter is the initial value of theaccumulator.

Let's step through the operation of this to makesure we understand what is happening.

| 1 | 4 | 11 | 7 |
| :-: | :-: | :-: | :-: |


<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduce((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

We will call the function on each argument.

First call:

Consider this array:

We will use this function to sum the array

The first parameter is our function which takes theaccumulator variable and a variable to receive each element of our array.

The second parameter is the initial value of theaccumulator.

Let's step through the operation of this to makesure we understand what is happening.

| 1 | 4 | 11 | 7 |
| :-: | :-: | :-: | :-: |


| Acc | 0 |
| :-: | :-: |
| Val | 1 |
| Returns | 1 |

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduce((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

We will call the function on each argument.

First call:

Second call:

Consider this array:

We will use this function to sum the array

The first parameter is our function which takes theaccumulator variable and a variable to receive each element of our array.

The second parameter is the initial value of theaccumulator.

Let's step through the operation of this to makesure we understand what is happening.

| 1 | 4 | 11 | 7 |
| :-: | :-: | :-: | :-: |


| Acc | 0 |
| :-: | :-: |
| Val | 1 |
| Returns | 1 |

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduce((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

| Acc | 1 |
| :-: | :-: |
| Val | 4 |
| Returns | 5 |

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

We will call the function on each argument.

2nd call:

3rd call:

Consider this array:

We will use this function to sum the array

The first parameter is our function which takes theaccumulator variable and a variable to receive each element of our array.

The second parameter is the initial value of theaccumulator.

Let's step through the operation of this to makesure we understand what is happening.

| 1 | 4 | 11 | 7 |
| :-: | :-: | :-: | :-: |


| Acc | 1 |
| :-: | :-: |
| Val | 4 |
| Returns | 5 |

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduce((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

| Acc | 5 |
| :-: | :-: |
| Val | 11 |
| Returns | 16 |

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

We will call the function on each argument.

3rd call:

4th call:

Consider this array:

We will use this function to sum the array

The first parameter is our function which takes theaccumulator variable and a variable to receive each element of our array.

The second parameter is the initial value of theaccumulator.

Let's step through the operation of this to makesure we understand what is happening.

| 1 | 4 | 11 | 7 |
| :-: | :-: | :-: | :-: |


| Acc | 5 |
| :-: | :-: |
| Val | 11 |
| Returns | 16 |

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduce((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

| Acc | 16 |
| :-: | :-: |
| Val | 7 |
| Returns | 23 |

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

We will call the function on each argument.

4th call:

Once there are no more elements, the final value of acc is returned by reduce.

Consider this array:

We will use this function to sum the array

The first parameter is our function which takes theaccumulator variable and a variable to receive each element of our array.

The second parameter is the initial value of theaccumulator.

Let's step through the operation of this to makesure we understand what is happening.

| 1 | 4 | 11 | 7 |
| :-: | :-: | :-: | :-: |


| Acc | 16 |
| :-: | :-: |
| Val | 7 |
| Returns | 23 |

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduce((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

Return value of reduce

__Topic: Higher Order Array Methods__  __The __  _reduce_  __ method allows us to apply an operation to the elements of an arrays, to get a single answer.__

There is a variant of the reduce method that traverses the array in reverse order (i.e. right to left instead of left to right).  This method is reduceRight.

Obviously, for the examples so far, this makes no difference, but there are cases where it would.

Consider a reduce method that returns the first even element in the array.

The same function will return the last even element, if I go from right to left with reduceRight.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> sum = vals.reduceRight((acc, val) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> acc + val, </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">firstEven</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">vals.reduce</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">acc:number,val</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (val%</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">===</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">val</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> acc</span>

<span style="color:#D4D4D4">},</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">lastEven</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">vals.reduceRight</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">acc:number,val</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (val%</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">===</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">val</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> acc</span>

<span style="color:#D4D4D4">}</span>

__Topic: Higher Order Array Methods__  __The __  _sort_  __ method allows us to sort an array and provide a custom comparison function__

With no arguments sort returns the elements in ascending or alphabetical order.

If we provide a comparison function, we can define the sort order.  The function should return positive if the first value comes second in the sort order.

It should return netgative if the first value comes after the second value

It should return 0 if the values are the same.

Since we pass a function, we can sort arrays of complex objects or classes in any way we wish.

_NOTE: This method is destructive and overwrites the array.  If you don't want this to happen, you have to clone _  _the array first._

<span style="color:#D4D4D4">Sorted=</span>  <span style="color:#D4D4D4">vals.sort</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">ascending=</span>  <span style="color:#D4D4D4">vals.sort</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">a,b</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4">a-b);</span>

<span style="color:#D4D4D4">descending=</span>  <span style="color:#D4D4D4">vals.sort</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">a,b</span>  <span style="color:#D4D4D4">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4">b-a);</span>


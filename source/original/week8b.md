CISC 181-INTRODUCTION TO COMPUTER SCIENCE II

# Week 8
Spring 2024

![](../../images/CISC181-Week%208b0.png)

---


Poll Title: Do not modify the notes in this section to avoid tampering with the Poll Everywhere activity.
More info at polleverywhere.com/support

What's your favorite color
https://www.polleverywhere.com/free_text_polls/ylN0S5pYdJ7wNpqYXsIIR

__Topic: __  __Anoymous__  __ Functions__

A function that is declared with no name is an  _anonymous function._

![](../../images/CISC181-Week%208b1.jpg)

Normally, when we create a function or method, we define it with a name that we can use to reference it (call it) later.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">+</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">MyClass</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">+</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">+</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#569CD6">class</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">MyClass</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">+</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

We can then call or reference that method by its defined name

This is normal and a reasonable way to access methods and function in any programming language.

Sometimes, however, we just need a function right where we want to use it, and it is easier to be able to provide the function, rather than declare it elsewhere.

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">MyClass</span>  <span style="color:#CCCCCC">().</span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">);</span>

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#DCDCAA">describe</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test Name'</span>  <span style="color:#CCCCCC">,()</span>  <span style="color:#569CD6">=></span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">test</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test </span>  <span style="color:#CE9178">MyName</span>  <span style="color:#CE9178">'</span>  <span style="color:#CCCCCC">,()</span>  <span style="color:#569CD6">=></span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">a</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#DCDCAA">expect</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">a</span>  <span style="color:#CCCCCC">).</span>  <span style="color:#DCDCAA">toBe</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    });</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">test</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test </span>  <span style="color:#CE9178">MyClass</span>  <span style="color:#CE9178">'</span>  <span style="color:#CCCCCC">,()</span>  <span style="color:#569CD6">=></span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">new</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">MyClass</span>  <span style="color:#CCCCCC">().</span>  <span style="color:#DCDCAA">MyName</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#DCDCAA">expect</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">b</span>  <span style="color:#CCCCCC">).</span>  <span style="color:#DCDCAA">toBe</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    });</span>

<span style="color:#CCCCCC">});</span>

We have already seen this in our jest testsin both the describe method and the testmethod.

Let's take a closer look at the secondparameter to the describe and testmethods.

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#DCDCAA">describe</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test Name'</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#FFFF00">()=>{</span>

<span style="color:#FFFF00">    test('Test </span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">',()=>{</span>

<span style="color:#FFFF00">        let a=</span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">(1,2);</span>

<span style="color:#FFFF00">        expect(a).</span>  <span style="color:#FFFF00">toBe</span>  <span style="color:#FFFF00">(3);</span>

<span style="color:#FFFF00">    });</span>

<span style="color:#FFFF00">    test('Test </span>  <span style="color:#FFFF00">MyClass</span>  <span style="color:#FFFF00">',()=>{</span>

<span style="color:#FFFF00">        let b=new </span>  <span style="color:#FFFF00">MyClass</span>  <span style="color:#FFFF00">().</span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">(1,2);</span>

<span style="color:#FFFF00">        expect(b).</span>  <span style="color:#FFFF00">toBe</span>  <span style="color:#FFFF00">(3);</span>

<span style="color:#FFFF00">    });</span>

<span style="color:#FFFF00">}</span>  <span style="color:#CCCCCC">);</span>

We have already seen this in our jest testsin both the describe method and the testmethod.

Let's take a closer look at the secondparameter to the describe method.

This parameter is an  _anonymous function_

It is a function that takes no arguments, and contains the statements inside the {} block.

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#DCDCAA">describe</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test Name'</span>  <span style="color:#CCCCCC">,()</span>  <span style="color:#569CD6">=></span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">test</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test </span>  <span style="color:#CE9178">MyName</span>  <span style="color:#FFFF00">',()=>{</span>

<span style="color:#FFFF00">        let a=</span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">(1,2);</span>

<span style="color:#FFFF00">        expect(a).</span>  <span style="color:#FFFF00">toBe</span>  <span style="color:#FFFF00">(3);</span>

<span style="color:#FFFF00">    }</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">test</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test </span>  <span style="color:#CE9178">MyClass</span>  <span style="color:#FFFF00">',()=>{</span>

<span style="color:#FFFF00">        let b=new </span>  <span style="color:#FFFF00">MyClass</span>  <span style="color:#FFFF00">().</span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">(1,2);</span>

<span style="color:#FFFF00">        expect(b).</span>  <span style="color:#FFFF00">toBe</span>  <span style="color:#FFFF00">(3);</span>

<span style="color:#FFFF00">    }</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">});</span>

We have already seen this in our jest testsin both the describe method and the testmethod.

And in the test method as well.

This parameter is an  _anonymous function_

It is a function that takes no arguments, and contains the statements inside the {} block.

__NOTE: We are not calling this method, we are just passing it in as an argument to describe or test.__

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#DCDCAA">describe</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test Name'</span>  <span style="color:#CCCCCC">,()</span>  <span style="color:#569CD6">=></span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">test</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test </span>  <span style="color:#CE9178">MyName</span>  <span style="color:#FFFF00">',()=>{</span>

<span style="color:#FFFF00">        let a=</span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">(1,2);</span>

<span style="color:#FFFF00">        expect(a).</span>  <span style="color:#FFFF00">toBe</span>  <span style="color:#FFFF00">(3);</span>

<span style="color:#FFFF00">    }</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#DCDCAA">test</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#CE9178">'Test </span>  <span style="color:#CE9178">MyClass</span>  <span style="color:#FFFF00">',()=>{</span>

<span style="color:#FFFF00">        let b=new </span>  <span style="color:#FFFF00">MyClass</span>  <span style="color:#FFFF00">().</span>  <span style="color:#FFFF00">MyName</span>  <span style="color:#FFFF00">(1,2);</span>

<span style="color:#FFFF00">        expect(b).</span>  <span style="color:#FFFF00">toBe</span>  <span style="color:#FFFF00">(3);</span>

<span style="color:#FFFF00">    }</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">});</span>

We could do this the hard way, and createa named function and pass that as thesecond parameter, but we are only usingit once, and it is much easier to see whatis going on this way.

Anonymous functions behave like anyother function.  We can declare them, callthem, and pass them around as parameters to functions.  Functions in typescript are what is referred to as "first class objects".

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

Let's look at the overall structure of an anonymous function:

( <span style="color:#C00000">param1:type,param2:type,…,</span>  <span style="color:#C00000">paramN:type</span> ):retType  <span style="color:#0000FF">=></span>   <span style="color:#00B0F0">{//function body}</span>

<span style="color:#C00000">Function Parameters</span>

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

* So what can we do with this:
  * We have already seen that we can pass it as a parameter to another method as in "describe" and "test"
  * Many methods in typescript can take a function as a parameter including filter, map, find, reduce, etc.
  * We can use anonymous functions there as well.
  * Since functions are first class objects, we can also store them in variables (i.e. function as value)

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#CCCCCC">\];</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">removeNegativesFor</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#569CD6">const</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4FC1FF">newArr</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">\[\];</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">for</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">num</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">of</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">num</span>  <span style="color:#D4D4D4">>=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">            </span>  <span style="color:#4FC1FF">newArr</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">push</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">num</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">        }</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4FC1FF">newArr</span>

<span style="color:#CCCCCC">}</span>

* Let's look at an example of removingnegative values from a list.
  * We already know how to do thiswith a for loop.
  * We can iterate through the list,adding non-negative numbers to anew list, which we then return.
* There is another way to accomplish this using the typescript Array.filter method

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#CCCCCC">\];</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">removeNegatives</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">filter</span>  <span style="color:#CCCCCC">((</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=>{</span>

<span style="color:#569CD6">       return </span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=0</span>  <span style="color:#D4D4D4">    }</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">}</span>

The filter method takes a function thatreturns true if we want the value includedin the returned list, and false if we want it removed from the list.

Here the anonymous function is:

Now we can use filter to filter any list by providing such a method to specify what we want in the list.

<span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=>{</span>  <span style="color:#569CD6">return </span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=0</span>  <span style="color:#569CD6">}</span>

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

If an anonymous function only contains a single statement that returns a value,then we can shorten this syntax byremoving the braces and the return.

Now the anonymous function is:

This gives a clean concise way to pass around simple methods without naming them.

But wait, there's more.

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#CCCCCC">\];</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">removeNegatives</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">filter</span>  <span style="color:#CCCCCC">((</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=0</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=0</span>

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

* Being "first class objects" functions canbe used in many places.
  * As parameters to methods
  * As the value of a variable or classproperty.
  * As the return value of a function.

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#CCCCCC">,</span>  <span style="color:#B5CEA8">5</span>  <span style="color:#CCCCCC">\];</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">removeNegatives</span>  <span style="color:#CCCCCC">()</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\]{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">arr</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">filter</span>  <span style="color:#CCCCCC">((</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">}</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">f</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">z</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#4EC9B0">boolean</span>  <span style="color:#D4D4D4"> _=_ </span>  <span style="color:#CCCCCC"> _(_ </span>  <span style="color:#9CDCFE"> _x_ </span>  <span style="color:#D4D4D4"> _:_ </span>  <span style="color:#4EC9B0"> _number_ </span>  <span style="color:#CCCCCC"> _)_ </span>  <span style="color:#569CD6"> _=>_ </span>  <span style="color:#9CDCFE"> _x_ </span>  <span style="color:#D4D4D4"> _>=_ </span>  <span style="color:#B5CEA8"> _0_ </span>  <span style="color:#CCCCCC"> _;_ </span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">getGTFunction</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">num</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#4EC9B0">boolean</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">></span>  <span style="color:#9CDCFE">num</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">}</span>

__Topic: Anonymous Functions__

A function that is declared with no name is an  _anonymous function._

Functions have types.

A functions type is defined by itsparameters and return type

We can define variables to be of that type, then store functions in that variable.

We can them call those functions just like we would if they were defined with a name.

We can even declare a type to use forour functions.

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">f</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#4EC9B0">Boolean</span>

<span style="color:#4EC9B0">f</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">f</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#4EC9B0">boolean</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">b</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#DCDCAA">f</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">c</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#DCDCAA">f</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#D4D4D4">-</span>  <span style="color:#B5CEA8">4</span>  <span style="color:#CCCCCC">)</span>

<span style="color:#569CD6">declare</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#569CD6">type</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">Chk</span>  <span style="color:#4EC9B0">Function</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#4EC9B0">boolean</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">f</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">Chk</span>  <span style="color:#4EC9B0">Function</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">)</span>  <span style="color:#569CD6">=></span>  <span style="color:#9CDCFE">x</span>  <span style="color:#D4D4D4">>=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">;</span>


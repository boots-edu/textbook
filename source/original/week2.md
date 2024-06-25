CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 2
Spring 2024

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

* In programming we often have to do things more than once.
  * Rather than copying and pasting our code over and over again, we can use a  __loop__  to run the same section of code repeatedly.
  * There are two basic types of loops that we will look at
    * The while loop
    * The for loop

![](../../images/CISC181-Week%2020.jpg)

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

The  __while__  loop allows us to repeat the following block of code (code in braces {}) while the expression is true.

<span style="color:#FF0000">Evaluates to a </span>  <span style="color:#FF0000">boolean</span>

while (\<expression>){

//thing to repeat

}

//program continues normally

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

Suppose I want to make a countdown.  I could do this with a while loop.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> countdown(</span>  <span style="color:#D4D4D4">count:number</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">while</span>  <span style="color:#D4D4D4">(count></span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        console.log(count);</span>

<span style="color:#D4D4D4">        count\-\-;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#CE9178">"beep </span>  <span style="color:#CE9178">beep</span>  <span style="color:#CE9178"> beep!"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

And I could call the function passing in the number I want to count down from.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> countdown(</span>  <span style="color:#D4D4D4">count:number</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">while</span>  <span style="color:#D4D4D4">(count></span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        console.log(count);</span>

<span style="color:#D4D4D4">        count\-\-;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#CE9178">"beep </span>  <span style="color:#CE9178">beep</span>  <span style="color:#CE9178"> beep!"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D4D4D4">countdown(10);</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

If I compile and run this code, I see the output on the right.  Why?

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> countdown(</span>  <span style="color:#D4D4D4">count:number</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">while</span>  <span style="color:#D4D4D4">(count></span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        console.log(count);</span>

<span style="color:#D4D4D4">        count\-\-;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#CE9178">"beep </span>  <span style="color:#CE9178">beep</span>  <span style="color:#CE9178"> beep!"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D4D4D4">countdown(</span>  <span style="color:#D4D4D4">5</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">$</span>  <span style="color:#D4D4D4">tsc</span>

<span style="color:#D4D4D4">$node example.js</span>

<span style="color:#D4D4D4">5</span>

<span style="color:#D4D4D4">4</span>

<span style="color:#D4D4D4">3</span>

<span style="color:#D4D4D4">2</span>

<span style="color:#D4D4D4">1</span>

<span style="color:#D4D4D4">beep </span>  <span style="color:#D4D4D4">beep</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">beep</span>  <span style="color:#D4D4D4">!</span>

<span style="color:#D4D4D4">$</span>

__A short aside.__

__What's going on here!!!__

* So once I wrote my program and saved it into a .ts file, how did I compile and run it?
  * Previously you could just run your programs, but for typescript we must first compile (transpile) it into javascript so that we can run it.

The tsc command will take the .ts file and convert it into native javascript.  We don't need to worry about the javascript, just that it turns the .ts file into a .js file.

We can then use node to execute our js file.

Usually, we will have our project set up to do this for us with  _npm_  _ run_ .

<span style="color:#D4D4D4">$</span>  <span style="color:#D4D4D4">tsc</span>

<span style="color:#D4D4D4">$node example.js</span>

<span style="color:#D4D4D4">5</span>

<span style="color:#D4D4D4">4</span>

<span style="color:#D4D4D4">3</span>

<span style="color:#D4D4D4">2</span>

<span style="color:#D4D4D4">1</span>

<span style="color:#D4D4D4">beep </span>  <span style="color:#D4D4D4">beep</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">beep</span>  <span style="color:#D4D4D4">!</span>

<span style="color:#D4D4D4">$</span>

__Another short __  __asside__

The console.log(…) function

Something else of note here, is the console.log function.  This allows us to print something to the screen.

For now, this will be our primary way to display something from our program.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> countdown(</span>  <span style="color:#D4D4D4">count:number</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">while</span>  <span style="color:#D4D4D4">(count></span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        console.log(count);</span>

<span style="color:#D4D4D4">        count\-\-;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#CE9178">"beep </span>  <span style="color:#CE9178">beep</span>  <span style="color:#CE9178"> beep!"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D4D4D4">countdown(</span>  <span style="color:#D4D4D4">5</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">$</span>  <span style="color:#D4D4D4">tsc</span>

<span style="color:#D4D4D4">$node example.js</span>

<span style="color:#D4D4D4">5</span>

<span style="color:#D4D4D4">4</span>

<span style="color:#D4D4D4">3</span>

<span style="color:#D4D4D4">2</span>

<span style="color:#D4D4D4">1</span>

<span style="color:#D4D4D4">beep </span>  <span style="color:#D4D4D4">beep</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">beep</span>  <span style="color:#D4D4D4">!</span>

<span style="color:#D4D4D4">$</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

* Let's try this for ourselves
  * Pair up with the person next to you to write a function sillyMultiply that takes two arguments and returns their product.
  * The hard part is you are not allowed to use multiplication inside your function, you must do it by repeatedly adding the first number to itself the correct number of times.  Here is a template to get you started:

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sillyMultiply</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">x:number,y:number</span>  <span style="color:#D4D4D4">):number{</span>

<span style="color:#D4D4D4">    //What goes here?</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

![](../../images/CISC181-Week%2021.gif)

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

How did you do?  Let's try to write it together.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sillyMultiply</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">x:number,y:number</span>  <span style="color:#D4D4D4">):number{</span>

<span style="color:#D4D4D4">    //What goes here?</span>

<span style="color:#D4D4D4">}</span>

---

Switch over to code and write it with student input until we get it right.

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

Here's my solution

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sillyMultiply</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">x:number,y:number</span>  <span style="color:#D4D4D4">):number{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">product:number</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">while</span>  <span style="color:#D4D4D4">(y > </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        product = product \+ x;</span>

<span style="color:#D4D4D4">        y = y \- </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> product</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

The other primary type of loop we will be discussing is the  __for__  loop.

While you have seen for loops in Python, they are somewhat different in typescript, and there are a couple of different versions.

Let's start with the simplest form.

<span style="color:#FF0000">Evaluates to a </span>  <span style="color:#FF0000">boolean</span>

<span style="color:#FF0000">Declares and initializes a loop variable</span>

for (\<initializer>;\<expression>;\<update>){

//thing to repeat

}

//program continues normally

<span style="color:#FF0000">Modifies the loop variable</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

The initializer is simply a variable declaration and initialization like you might use elsewhere in the program.

<span style="color:#FF0000">Evaluates to a </span>  <span style="color:#FF0000">boolean</span>

<span style="color:#FF0000">Declares and initializes a loop variable</span>

for ( __let i=0__ ;\<expression>;\<update>){

//thing to repeat

}

//program continues normally

<span style="color:#FF0000">Modifies the loop variable</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

The expression is the same as the expression we used for our while loop.  The loop will continue to execute so long as the expression is true.

<span style="color:#FF0000">Evaluates to a </span>  <span style="color:#FF0000">boolean</span>

<span style="color:#FF0000">Declares and initializes a loop variable</span>

for (let i=0; __i<10__ ;\<update>){

//thing to repeat

}

//program continues normally

<span style="color:#FF0000">Modifies the loop variable</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

The update statement will usually modify the loop variable so that it approaches a value that will cause the loop to exit.

Note: i\+\+ is just shorthand for i=i\+1 (and i\-\- is similarly shorthand for i=i\-1)

<span style="color:#FF0000">Evaluates to a </span>  <span style="color:#FF0000">boolean</span>

<span style="color:#FF0000">Declares and initializes a loop variable</span>

for (let i=0 ; i<10 ; i\+\+){

//thing to repeat

}

//program continues normally

<span style="color:#FF0000">Modifies the loop variable</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

Let's rewrite our countdown function using a for loop instead of a while loop.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> countdown(</span>  <span style="color:#D4D4D4">count:number</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> i = count; i > </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">; i\-\-){</span>

<span style="color:#D4D4D4">        console.log(i);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#CE9178">"beep </span>  <span style="color:#CE9178">beep</span>  <span style="color:#CE9178"> beep!"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

Let's rewrite our countdown function using a for loop instead of a while loop.

Our initializer sets our loop variable (i) to count

Our expression continues the loop so long as count remains >0

Our update statement decrements the value of I each time the loop runs

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> countdown(</span>  <span style="color:#D4D4D4">count:number</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> i = count; i > </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">; i\-\-){</span>

<span style="color:#D4D4D4">        console.log(i);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    console.log(</span>  <span style="color:#CE9178">"beep </span>  <span style="color:#CE9178">beep</span>  <span style="color:#CE9178"> beep!"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

Now let's redo our sillyMultiply function with a for loop instead of a while loop

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sillyMultiply</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">x:number,y:number</span>  <span style="color:#D4D4D4">):number{</span>

<span style="color:#D4D4D4">    //What goes here?</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

For reference, here is the while loop version from before

![](../../images/CISC181-Week%2022.gif)

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sillyMultiply</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">x:number,y:number</span>  <span style="color:#D4D4D4">):number{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">product:number</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">while</span>  <span style="color:#D4D4D4">(y > </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">        product = product \+ x;</span>

<span style="color:#D4D4D4">        y = y \- </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> product</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

Here's my solution

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">sillyMultiply</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">x:number,y:number</span>  <span style="color:#D4D4D4">):number{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">product:number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> i=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;i<</span>  <span style="color:#D4D4D4">y;i</span>  <span style="color:#D4D4D4">\+\+){</span>

<span style="color:#D4D4D4">        product=</span>  <span style="color:#D4D4D4">product\+x</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> product;</span>

<span style="color:#D4D4D4">}</span>

__Review Topic: __  __Loops__

A  __loop__  is a control flow structure in programming that allows us to repeat a section of code until some boolean condition is met.

So now we can create more complex program logic, but repeating sections of our code to solve problems.

There is another format of the for loop designed to work on collections of things (like arrays) in typescript that we will get to in a little while, but first we need to talk about those collections.

![](../../images/CISC181-Week%2023.png)

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

* Arrays are an extremely important data structure because they allow us to store a collection of objects.
* We can build arrays out of any built\-in or user\-defined type we want, including out of other arrays.
* In Typescript, the size of the array does not need to be defined.  It will grow as necessary to hold the data placed into it ( __NOT TRUE IN C or C\+\+__ ).
* Each element in the array has an index (starting at 0) which we can use to access the individual elements
  * i.e. if an array has 10 elements, the indexes would be 0\-9.

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

In Typescript, we define an array just like any other variable.

<span style="color:#569CD6">//define a single string containing the value Lisa</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">name:string</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Lisa"</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">//define an array of strings containing the values</span>

<span style="color:#569CD6">//</span>  <span style="color:#569CD6">Lisa, Kaitlin and John</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">names:string</span>  <span style="color:#D4D4D4">\[\]=\[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">Lisa"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"Kaitlin"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"John</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

* Once we have an array of strings, we can access the elements by index
  * Since this example has 3 elements, we have indexes 0,1,2
  * This code would print out  _Kaitlin_

<span style="color:#569CD6">//define an array of strings containing the values</span>

<span style="color:#569CD6">//</span>  <span style="color:#569CD6">Lisa, Kaitlin and John</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">names:string</span>  <span style="color:#D4D4D4">\[\]=\[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">Lisa"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"Kaitlin"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"John</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">console.log(names\[1\]);</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

* Using the index, we can also update the values of an element in our array
  * This code would print out  _Jan_

<span style="color:#569CD6">//define an array of strings containing the values</span>

<span style="color:#569CD6">//</span>  <span style="color:#569CD6">Lisa, Kaitlin and John</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">names:string</span>  <span style="color:#D4D4D4">\[\]=\[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">Lisa"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"Kaitlin"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"John</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">names\[1\]=“Jan”;</span>

<span style="color:#D4D4D4">console.log(names\[1\]);</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

There are a number of methods that operate on arrays.  For now, we will use these, but the idea of an object (like an array) having its own methods which operate on it will be central to our discussion of object oriented programming later in the course.

These methods allow us to add elements, remove elements, and otherwise modify an array.

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

We can get the current number of elements in an array with the length method.

Note that length is NOT a function, but rather it is a property of the array so we don't use ().

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">apple"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> size: number=</span>  <span style="color:#D4D4D4">fruits.length</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">console.log(size); </span>  <span style="color:#6A9955">// 3</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Adding to the end of an array can be achieved with the  __push__  method.

Note, the (.) notation.  As we will learn more about this later, for now (waves hands).

The important part is that we can extend the array by adding to the end by simply using this method.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"banana"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">fruits.push</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(fruits);  </span>  <span style="color:#6A9955">// Output: \["apple", "banana", "orange"\]</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Likewise, removing from the end of the array can be handled with the  __pop__  method.

Here not only does the pop method remove the last item from our array, but it returns it so we can store it in a variable.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> last=</span>  <span style="color:#D4D4D4">fruits.pop</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">console.log(fruits);  </span>  <span style="color:#6A9955">// Output: \["apple", "banana"\];</span>

<span style="color:#D4D4D4">console.log(last);   </span>  <span style="color:#6A9955">// Output: orange</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

If we want to add or remove from the front of the list, we can use shift/unshift.

Note: This works, but is rather inefficient with the way typescript implements arrays.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"banana"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">fruits.unshift</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(fruits);  </span>  <span style="color:#6A9955">// Output: \["</span>  <span style="color:#6A9955">orange","apple</span>  <span style="color:#6A9955">", "banana"\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> first=</span>  <span style="color:#D4D4D4">fruits.shift</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">console.log(fruits);  </span>  <span style="color:#6A9955">// Output: \["apple", "banana"\];</span>

<span style="color:#D4D4D4">console.log(first);   </span>  <span style="color:#6A9955">// Output: orange</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

* What about the middle of an array.  We can do this as well with the splice method.
  * index: The array index at which to start changing the array
  * howMany: The number of array elements to remove starting at index, defaults to all of them if no value is passed.
  * element1…elementN: 0 or more elements to add to the array at the index.
* With this method we can both remove and add elements to the middle, or do both at the same time.

array.splice(index, \[howMany\], \[element1\]\[, ..., elementN\]);

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Some examples of using splice

If we only use the first parameter which is required, splice will remove that element and all elements after it from the array.  It also returns what was removed.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"grape"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"mango</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> removed=</span>  <span style="color:#D4D4D4">fruits.splice</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(fruits); </span>  <span style="color:#6A9955">// \["apple", "banana"\]</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">console.log(removed); </span>  <span style="color:#6A9955">// \["orange", "grape", "mango"\]</span>  <span style="color:#D4D4D4">;</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Some examples of using splice

With the second argument set, it only removes that number of items.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"grape"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"mango</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> removed=</span>  <span style="color:#D4D4D4">fruits.splice</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(fruits); </span>  <span style="color:#6A9955">// \["apple", "banana", "mango"\]</span>

<span style="color:#D4D4D4">console.log(removed); </span>  <span style="color:#6A9955">// \["orange", "grape"\]</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Some examples of using splice

Any additional arguments will be added to the array at the index provided after the deletion occurs.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"grape"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"mango</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> removed=</span>  <span style="color:#D4D4D4">fruits.splice</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"pear"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"kiwi"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(fruits); </span>  <span style="color:#6A9955">// \["apple", "banana", "pear", "kiwi", "grape", "mango"\]</span>

<span style="color:#D4D4D4">console.log(removed); </span>  <span style="color:#6A9955">// \["orange"\]</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Some examples of using splice

If we ask it to delete no items (0) splice will insert the additional arguments at the index and remove nothing.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> removed=</span>  <span style="color:#D4D4D4">fruits.splice</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"pear"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"kiwi"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">console.log(fruits); </span>  <span style="color:#6A9955">// \["apple", "banana", "pear", "kiwi", "orange"\]</span>

<span style="color:#D4D4D4">console.log(removed); </span>  <span style="color:#6A9955">// \[\]</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

Lastly, if we want to merge arrays we can use the (…) spread operator.

The spread operator basically extracts the elements from the array so they can be inserted into a new array as their individual elements.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> vegies: string\[\] = \[</span>  <span style="color:#CE9178">"carrot"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"potato"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">allFood</span>  <span style="color:#D4D4D4">: string\[\] = \[...fruits, ...vegies\];</span>

<span style="color:#D4D4D4">console.log(</span>  <span style="color:#D4D4D4">allFood</span>  <span style="color:#D4D4D4">); </span>  <span style="color:#6A9955">// \["apple", "banana", "orange", "carrot", "potato"\]</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

* We mentioned earlier that we can build arrays out of other arrays.
* Now, allFood is an array of string arrays containing two elements. Not the \[\]\[\] in the declaration.
  * Each element is an array of strings
    * allFood\[0\] has 3 string elements
    * allFood\[1\] has 2 string elements

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> vegies: string\[\] = \[</span>  <span style="color:#CE9178">"carrot"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"potato"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">allFood</span>  <span style="color:#D4D4D4">: string\[\]\[\] = \[fruits, vegies\];</span>

<span style="color:#D4D4D4">console.log(</span>  <span style="color:#D4D4D4">allFood</span>  <span style="color:#D4D4D4">); </span>  <span style="color:#6A9955">// \[\["apple", "banana", "orange"\], \["carrot", "potato"\]\]</span>

__Review Topic: __  __Arrays__

An  __array __ is an ordered list of values of the same type where each element in the array can be accessed using its index.

There are many other methods for manipulating arrays many we will cover later in the semester.  This set should be sufficient for the time being.

![](../../images/CISC181-Week%2024.jpg)

__Back to loops for a second__

One important use of loops is to  _iterate_  through the elements of an array.  We can certainly do this using our existing knowledge of loops and arrays.

This will work and print out

But there is another version of the for loop which is better for this type of thing.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"apple"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">size:number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#D4D4D4">fruits.length</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> i = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">; i < size; i\+\+){</span>

<span style="color:#D4D4D4">    console.log(fruits\[i\]);</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">apple</span>

<span style="color:#569CD6">banana</span>

<span style="color:#569CD6">orange</span>

__Back to loops for a second__

We can use this other version called a  _for..of_  loop to automatically iterate through the array.

This is much cleaner, doesn't require getting the length of the array, and accesses every element in order just like the previous version.

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruits: string\[\] = \[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">apple"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"banana"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"orange</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#569CD6">for</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> fruit </span>  <span style="color:#569CD6">of</span>  <span style="color:#D4D4D4"> fruits){</span>

<span style="color:#D4D4D4">    console.log(fruit);</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">apple</span>

<span style="color:#569CD6">banana</span>

<span style="color:#569CD6">orange</span>


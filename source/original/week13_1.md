CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 13
Spring 2024

__Topic: Recursion__

* In general, Recursion involves stating a large problem in terms of a smaller version of the same problem.
* Consider the problem of teaching all of you a concept.
  * We can restate this problem as
    * Teach one student
    * Teach the rest of the students (this is a smaller group with 1 less student)
    * Eventually there are no more students to teach and we are don.
  * That is the basic idea behind recursion

To understand recursion, one must first understand recursion.

\-Stephen Hawking

__Topic: Recursion__

__How to state a problem recursively__

* Let's look at a problem where we have a container of balls, all colored either red or yellow and we want to ask if there is a yellow ball in the container.
* Restate the problem:
  * Checking one ball is easy, so if we remove a ball we know if it isyellow or not.  If it is, we already know the answer that yes there isa yellow ball.  So remove a ball and check it.
  * Now we have the same problem, only there are fewer balls to lookat.

![](../../images/CISC181-Week%2013-Part%2010.wmf)

![](../../images/CISC181-Week%2013-Part%2011.wmf)

__Topic: Recursion__

__How to state a problem recursively__

* Let's look at a problem where we have a container of balls, all colored either red or yellow and we want to ask if there is a yellow ball in the container.
* Restate the problem:
  * Checking one ball is easy, so if we remove a ball we know if it isyellow or not.  If it is, we already know the answer that yes there isa yellow ball.  So remove a ball and check it.
  * Now we have the same problem, only there are fewer balls to lookat.
  * Eventually, we will either find a yellow ball

![](../../images/CISC181-Week%2013-Part%2012.wmf)

__Topic: Recursion__

__How to state a problem recursively__

* Let's look at a problem where we have a container of balls, all colored either red or yellow and we want to ask if there is a yellow ball in the container.
* Restate the problem:
  * Checking one ball is easy, so if we remove a ball we know if it isyellow or not.  If it is, we already know the answer that yes there isa yellow ball.  So remove a ball and check it.
  * Now we have the same problem, only there are fewer balls to lookat.
  * Eventually, we will either find a yellow ball

![](../../images/CISC181-Week%2013-Part%2013.wmf)

__Topic: Recursion__

__Recursion Terminology__

* Stop Conditions (Base Case)
  * When we find the yellow ball we are done
  * We can answer the question without further work (there is a yellow ball)
  * When the container is empty we are done
  * We can answer the question without further work (there is no yellow ball)
* Recursive Step
  * After we remove a ball and determine that it is not yellow, we “start over” trying to find a yellow ball amongst the now fewer balls.

__Topic: Recursion__

__Towards code__

public balls:string\[\] = \[“red”, “red”, “red”, “red” ,”yellow”, “red”, “red”\];

function findYellowBall(container:string\[\]):boolean{

if (container.length==0){ __  //Yellow ball not found if balls array is empty__

return false;

}

else if (container\[0\]===(“yellow”)){ __  //Yellow ball found if the first ball in the array is yellow__

return true;

}

else  {   __//Yellow ball might still be in the container, but is definitely not in the first element__

return findYellowBall(container.slice(1));

}

}

__Topic: Recursion__

__Towards code__

public balls:string\[\] = \[“red”, “red”, “red”, “red” ,”yellow”, “red”, “red”\];

function findYellowBall(container:string\[\]):boolean{

if (container.length==0){ __  //Yellow ball not found if balls array is empty__

return false;

}

else if (container\[0\]===(“yellow”)){ __  //Yellow ball found if the first ball in the array is yellow__

return true;

}

else  {   __//Yellow ball might still be in the container, but is definitely not in the first element__

return findYellowBall(container.slice(1));

}

}

__Topic: Recursion__

__Recursion Rules__

![](../../images/CISC181-Week%2013-Part%2014.png)

A recursive algorithm must have a base case or stop condition

A recursive algorithm must change state and move towards the base case

A recursive algorithm must call itself recursively

__Topic: Recursion__

__A simple example__

* Consider the problem of computing a factorial
  * Factorial is defined as:
    * n! = n \* (n\-1) \* (n\-2) \* (n\-3) \* … \* 1
      * 5! = 5 \* 4 \* 3 \* 2 \* 1
    * This can be restated in terms of an easier instance of factorial n!= n \* (n\-1)!
      * 5! = 5 \* 4!
    * We know that 1! always equals 1
  * We can rewrite the definition as such:
  * This is a recursive definition.  It has a stop condition (n=1), and a recursive step (n \* (n\-1)!)

__Topic: Recursion__

__A simple example__

CODE:

Public factorial(n:number):number{

if (n===1){

return 1;

} else {

return n \* factorial(n\-1);

}

}

__Topic: Recursion__

__A simple example__

CODE:

Public factorial(n:number):number{

if (n===1){

return 1;

} else {

return n \* factorial(n\-1);

}

}

__Topic: Recursion__

__A simple example__

CODE:

Public factorial(n:number):number{

if (n===1){

return 1;

} else {

return n \* factorial(n\-1);

}

}

__What it does:__

factorial(5) returns 5 \* factorial(4)

factorial(4) returns 4 \* factorial(3)

factorial(3) returns 3 \* factorial(2)

factorial(2) returns 2 \* factorial(1)

factorial(1) returns 1

__Topic: Recursion__

__A simple example__

__Recursive Trace:__

factorial(5) returns 5 \* factorial(4)

factorial(4) returns 4 \* factorial(3)

factorial(3) returns 3 \* factorial(2)

factorial(2) returns 2 \* factorial(1)

factorial(1) returns 1

__Return Trace:__

returns 5 \* 24 = 120

returns 4 \* 6 = 24

returns 3 \* 2 = 6

returns 2 \* 1 = 2

returns 1

__Topic: Recursion__

__But why?__

* In the jar of marbles and factorial examples, we could very easily solve these problems without recursion.  A simple loop would be sufficient.  While this is true of most/all problems, there are problems that are considerably easier to deal with by using recursion.
* Let's look at a simple example of  _binary search_ .
  * In binary search, we start with a sorted list.  Instead of checking every element, we check the middle element.
  * Since the list is sorted, if the value is less than the middle element, then we don't have to search the second half of the list.  If it is greater, than we don't have to search the first half.
  * Consider:
    * Find 4 in \[1,2,3,4,5,6,7,8,9\]
    * The middle element is 5, and since 4 is less, we can restrict further searches to \[1,2,3,4\]

__Topic: Recursion__

__A recursive solution__

* Consider:
  * Find 4 in \[1,2,3,4,5,6,7,8,9\]
  * The middle element is 5, and since 4 is less, we can restrict further searches to \[1,2,3,4\]
* In other words, if the middle element is not what we want, then we have reduced the problem to searching half the list.
* Eventually the list will have 0 or 1 elements in it.
  * If 1, it is either wat we are looking for or not.
  * If 0, then we did not find what we were looking for.
* In the example, the middle is 5, 4 is less than 5, so we just search again, but this time on \[1,2,3,4\].

__Topic: Recursion__

__A recursive solution__

* Consider:
  * Find 4 in \[1,2,3,4,5,6,7,8,9\]
  * The middle element is 5, and since 4 is less, we can restrict further searches to \[1,2,3,4\]
* In other words, if the middle element is not what we want, then we have reduced the problem to searching half the list.
* Eventually the list will have 0 or 1 elements in it.
  * If 1, it is either wat we are looking for or not.
  * If 0, then we did not find what we were looking for.
* In the example, the middle is 5, 4 is less than 5, so we just search again, but this time on \[1,2,3,4\].

__Topic: Recursion__

__A recursive solution__

* Consider:
* Find 4 in \[1,2,3,4,5,6,7,8,9\]
  * 4<5 so Find 4 in \[1,2,3,4\]
  * 4>3 so find 4 in \[4\]
  * 4==4 so we found it.
* Find 11 in \[1,2,3,4,5,6,7,8,9\]
  * 11>5 so find 11 in \[6,7,8,9\]
  * 11>8 so find 11 in \[9\]
  * 11!==9 so we did not find it.
* This is a lot faster than searching every element one at a time.

__Topic: Recursion__

__A recursive solution__

* So what is our stop condition.
  * We stop when there are no elements in the list and return false
  * We stop when the middle element is the one we are looking for and return true

__Topic: Recursion__

__A recursive solution__

* So what is our stop condition.
  * We stop when there are no elements in the list and return false
  * We stop when the middle element is the one we are looking for and return true
* And what is our recursive step that makes the problem smaller.
  * We will search again, only on either the first half (if value we want is \< middle) or the second half (if value we want is > middle)
* Each time, we are searching a smaller list, so eventually we will find what we want, or the list will be empty.

__Topic: Recursion__

__A recursive solution__

* So what is our stop condition.
  * We stop when there are no elements in the list and return false
  * We stop when the middle element is the one we are looking for and return true
* And what is our recursive step that makes the problem smaller.
  * We will search again, only on either the first half (if value we want is \< middle) or the second half (if value we want is > middle)

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">length</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">===</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">){</span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\-</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">;}</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">Math</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">floor</span>  <span style="color:#CCCCCC">((</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">length</span>  <span style="color:#D4D4D4">\-</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">) </span>  <span style="color:#D4D4D4">/</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">\] </span>  <span style="color:#D4D4D4">===</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">){</span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">;}</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">else</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">\] </span>  <span style="color:#D4D4D4"><</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">binSearch</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">slice</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">), </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">else</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">binSearch</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">slice</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">), </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    }</span>

__Topic: Recursion__

__A recursive solution__

* Comments:
  * Searching an empty list is easy, nothing is in an empty list
  * Checking if a list with 1 element contains the target is also easy.  The one and only element is either what we want or not.
  * In all other cases, we cut the size of the problem in half and try again.
  * Eventually we will be at one of our stop conditions IN ALL CASES.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">binSearch</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">\[\], </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">length</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">===</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\-</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#569CD6">let</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">Math</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">floor</span>  <span style="color:#CCCCCC">((</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#9CDCFE">length</span>  <span style="color:#D4D4D4">\-</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">) </span>  <span style="color:#D4D4D4">/</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">2</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">\] </span>  <span style="color:#D4D4D4">===</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">;</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">else</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#C586C0">if</span>  <span style="color:#CCCCCC"> (</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">\[</span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">\] </span>  <span style="color:#D4D4D4"><</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">binSearch</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">slice</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#D4D4D4">\+</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#CCCCCC">), </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">    </span>  <span style="color:#C586C0">else</span>  <span style="color:#CCCCCC">{</span>

<span style="color:#CCCCCC">        </span>  <span style="color:#C586C0">return</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">binSearch</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">list</span>  <span style="color:#CCCCCC">.</span>  <span style="color:#DCDCAA">slice</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">mid</span>  <span style="color:#CCCCCC">), </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#CCCCCC">);</span>

<span style="color:#CCCCCC">    }</span>

<span style="color:#CCCCCC">}</span>

__Topic: Recursion__

__A real example__

All of these would have been very easy to implement using a loop instead.  One place where recursion is particularly useful is  _Trees _

Trees are a basic data structure that we can use to represent data in a parent child relationship.

Many problems can be modeled as a tree.  As a matter of fact HTML is actually a tree representation since a parent element can have multiple child elements.

![](../../images/CISC181-Week%2013-Part%2015.jpg)

__Topic: Recursion__

__A real example__

* Consider the garden example.  This is actually a tree of components.
  * The main component has children garden and display\-case
  * The garden component has plants
  * The display\-case component has children of type display\-row
  * The display\-row component has children of type plant
* This is an incredibly common type of relationship in Computer Science, and sometimes we want to use it ourselves to represent data.

__Topic: Recursion__

__A real example__

Imagine a tree of numbers instead.  If we look at the children of any  _node_  I the tree, they are themselves a tree.  Just a smaller one.

Even for the nodes without children we can think of them as trees with no nodes (empty trees).

So in other words, we can treat each  _sub\-tree_  of a tree with a given  _root_  as if it were a tree.

This feels like a good candidate for recursion.

__Topic: Recursion__

__A real example__

* As it turns out, this is a special kind of tree called a  _binary search tree_ .
* It has some specific properties:
  * A node will have 2 subtrees (possibly empty)
  * Every number in the left sub\-tree must be less than the value stored in the node
  * Every number in the right sub\-tree must be greater than the value stored in the node
  * These must hold for the subtree rooted at every node in the tree.

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

Now we compare to 85 and again call treeSearch on the right sub\-tree

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

Now we compare to 85 and again call treeSearch on the right sub\-tree

This time, we see that the value is < 126, so we will call treeSearch on the left sub\-tree.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

We can search this structure by examining the root node then recursively searching the correct subtree based on the values.

Say we have a function

And we want to find the number 100.

Since 100 is greater than 44, we know the answer must be in the right sub\-tree if it is in the BST at all.

So we can call treeSearch on the right sub\-tree since it is also a tree.

Now we compare to 85 and again call treeSearch on the right sub\-tree

This time, we see that the value is < 126, so we will call treeSearch on the left sub\-tree.

When we finally compare our value to the node, we have found the node we are looking for.

Note, if we had been looking for 99, we would try the left sub\-tree here, and stop because it is empty.

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

__Topic: Recursion__

__A real example__

So first we need some way to represent a tree in typescript.  We will create a  _node _ class that will contain a number and 2 children.  Those children themselves will be nodes (possibly empty).

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

* What are our stop conditions:
  * if (target===undefined)
    * We didn't find it
  * if (target === tree.value)
    * We found it

__Topic: Recursion__

__A real example__

* What are our stop conditions:
  * if (target===undefined)
    * We didn't find it
  * if (target === tree.value)
    * We found it

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#DCDCAA">tree</span>  <span style="color:#DCDCAA">Search</span>  <span style="color:#CCCCCC">(</span>  <span style="color:#9CDCFE">tree</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#CCCCCC">, </span>  <span style="color:#9CDCFE">target</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#CCCCCC"> </span>  <span style="color:#4EC9B0">number</span>  <span style="color:#CCCCCC">){</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (tree === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

* For the recursive step, we want to search either the left or right subtree based on whether value is less than or greater than the node's value (we already checked === in our stop conditions)
* When we look at a node, there are only 4 possibilities.
  * The node is empty (undefined)
  * It is the node we are looking for
  * It is > than the node we are looking for
  * It is < than the node we are looking for.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(tree: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined, value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (tree === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"><value){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>  <span style="color:#D4D4D4">      </span>  <span style="color:#6A9955">//must be > value, it is the only </span>  <span style="color:#6A9955">posibility</span>  <span style="color:#6A9955"> left</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

If the node is empty (undefined) then the node with the value we are looking for can't exist, so we return false (did not find it).

If the node's value is === the value we are looking for, then we return true (found it).

If the node's value is < the value we are looking for, then if the value is in the tree, it must be in the right sub\-tree, so we call treeSearch recursively to search that sub\-tree.

If the node's value is > the value we are looking for, then if the value is in the tree, it must be in the left sub\-tree, so we call treeSearch recursively to search that sub\-tree

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode|undefined</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number){</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(tree: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined, value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (tree === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4"><value){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>  <span style="color:#D4D4D4">      </span>  <span style="color:#6A9955">//must be > value, it is the only </span>  <span style="color:#6A9955">posibility</span>  <span style="color:#6A9955"> left</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">    }   </span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

We can also recursively insert a node into the tree.

Search the tree until you find a node where the subtree you would search next is undefined and add a new node there.  This is our stop condition.

If the sub\-tree we would insert into is not empty, then we just insert into that (smaller) sub\-tree.

_Trees_  are a common data structure in Computer Science and recursion is a much more natural way to deal with them.

<span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> insert(tree: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">, value: number): void {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value===</span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value < </span>  <span style="color:#D4D4D4">tree.value</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            insert(</span>  <span style="color:#D4D4D4">tree.left</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">        }</span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">            insert(</span>  <span style="color:#D4D4D4">tree.right</span>  <span style="color:#D4D4D4">, value);</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Recursion__

__A real example__

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> treeRoot = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> TreeNode(</span>  <span style="color:#B5CEA8">44</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">26</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert (treeRoot,</span>  <span style="color:#B5CEA8">11</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">85</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">82</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">126</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot,</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">insert(treeRoot, </span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">insert(treeRoot, </span>  <span style="color:#B5CEA8">65</span>  <span style="color:#D4D4D4">);</span>

This code builds the tree you see to the right.

treeRoot is a reference to node 44.

If I inserted them in a different order, I would have gotten a different tree.

Thought question: What happens if I insert them in sorted order?

__Topic: Recursion__

__Encapsuloation__

* This is nice, but it is NOT very object oriented.
  * A tree node should encapsulate the things we can do to a tree so we won't need external methods.
  * For our implementation of insert, it is pretty straight forward.
  * We just remove the tree parameter, and instead call the member method on the appropriate subtree (which is not null since we already checked that.

<span style="color:#D4D4D4">    insert(value: number): void {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value === </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value < </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Recursion__

__Encapsuloation__

* This is nice, but it is NOT very object oriented.
  * For the search method, it is a little less straight forward.  We need to check for a null subtree before we make the recursive call instead of stopping when the tree is null (otherwise we will not have an object to call search on.
* Now we stop in the parent node if the child node is undefined instead of stopping in the child when the child is undefined

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> < value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Recursion__

__Encapsuloation__

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">treeSearch</span>  <span style="color:#D4D4D4">(value: number): </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> === value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4"> < value) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.treeSearch</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    left: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined = </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    right: </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4"> | undefined = </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> value: number) {}</span>

<span style="color:#D4D4D4">    insert(value: number): void {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value === </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (value < </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.value</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.left.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#569CD6">undefined</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            } </span>  <span style="color:#569CD6">else</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.right.insert</span>  <span style="color:#D4D4D4">(value);</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

This is our Tree class

__Topic: Recursion__

__A real example__

<span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">treeRoot</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">TreeNode</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">44</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">26</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">11</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">85</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">82</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">126</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">100</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">200</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">treeRoot.insert</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#B5CEA8">65</span>  <span style="color:#D4D4D4">);</span>

This code builds the tree you see to the right using the member methods.


---
layout: default
title: Description and Definition of Recursion
nav_order: 13.1
parent: Recursion
---

# Description and Definition of Recursion
[&laquo; Return to the Chapter Index](index.md)

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Key Idea
***Recursion** is a method in Computer Science where we state a problem in terms of a smaller instance of that problem, then write a function which calls itself to solve the smaller version of the problem.

## Stating a problem recursively
In general, Recursion involves stating a large problem in terms of a smaller version of the same problem.

Consider the problem of teaching all of you a concept.
We can restate this problem as

* Teach one student
* Teach the rest of the students (this is a smaller group with 1 less student)

Eventually there are no more students to teach and we are done.
That is the basic idea behind recursion

Consider a problem where we have a container of balls that are all colored either red or yellow.  If we want to know if there are any yellow balls in the container, we can state this problem recursively.

* Checking one ball is easy, so if we remove a ball we know if it is yellow or not.  
	* If the ball is yellow, we are done, so return true.
	* If the ball is red, we can remove the ball from the set
		* Now we have the same problem, only there are fewer balls to look at.

![](../../assets/images/recursion_1.jpg)

Eventually, we will find a yellow ball, or we will empty the container making the problem trivial. *Are there any yellow balls in the empty container?*

## Recursion Terminology
When we find a yellow ball we are done.  The answer is "yes" there is a yellow ball.  When the container is empty we are done.  The answer is "no" because there are clearly no yellow balls in the empty container, and while making it empty, we didn't see any.  These cases where the answer is trivial are know as ***stop conditions*** or the ***base case*** of the recursion.

So how do we get there?  We need to make sure that whatever we do when the stop conditions are not met *approaches* the stop condition.  If we keep removing balls one at a time, either we find the yellow ball or we reduce the number of balls by one.  Clearly in all cases, this approaches the stop conditions of finding a yellow ball or emptying the container.  The step that handles non-stop conditions and approaches the stop conditions is referred to as the ***recursive step***.

<pre><code>public balls:string[] = [“red”, “red”, “red”, “red” ,”yellow”, “red”, “red”];
function findYellowBall(container:string[]):boolean{
	<div style="background:yellow;display:inline-block">	if (container.length==0){  //Yellow ball not found if balls array is empty
		return false;
	}
	else if (container[0]===(“yellow”)){  //Yellow ball found
		return true;
	}
	</div>	else  {  //Yellow ball might still be in the container, but not in the first element
		return findYellowBall(container.slice(1));
	}
}
</code></pre>

The highlighted section above is the ***stop condition***.  We first check if the array is empty, then we check if the first ball in the array is yellow.  If either is true we are done and we know the answer (false/true respectively).

<pre><code>public balls:string[] = [“red”, “red”, “red”, “red” ,”yellow”, “red”, “red”];
function findYellowBall(container:string[]):boolean{
	if (container.length==0){  //Yellow ball not found if balls array is empty
		return false;
	}
	else if (container[0]===(“yellow”)){  //Yellow ball found
		return true;
	}
<div style="background:yellow;display:inline-block">	else  {  //Yellow ball might still be in the container, but not in the first element
		return findYellowBall(container.slice(1));
	}</div>
}
</code></pre>

The highlighted section above is the ***recursive step***.  Since we know it is not the first element, we simply reinitiate our search on the rest of the array (elements 2...n) by slicing the array and passing the result to our function.

## Recursion Rules
* A recursive algorithm must have a base case or stop condition
* A recursive algorithm must change state and move towards the base case
* A recursive algorithm must call itself recursively

## Summary

# Next Step

Next we'll learn about Recursion  [WebZ Timers &raquo;](../13-Recursion/index.md)
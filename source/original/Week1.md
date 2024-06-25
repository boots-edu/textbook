CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 1
Spring 2024

# Welcome to CISC181

* What is this course about?
  * In this course we will continue to study the field of Computer Science delving deeper into core concepts and introducing new concepts and paradigms for producing well engineered software solutions
  * Specifically, we will study Objects and Object\-Oriented programming techniques as well as various structures and algorithms to promote good software design.

# CISC181 Details

This semester, the course will be taught in Typescript.  Typescript is a free and open\-source programming language that adds static typing and type annotations to Javascript.

Typescript is used widely and has become the most common language for developing applications for the web.

Through labs, activities, and programming assignments you will become familiar with the Typescript language and developing well engineered software solutions.

# Policies and Procedures

The course will have lectures (2 or 3 per week depending on your section) as well as weekly lab periods.  Attendance at lectures is required.

Attendance at the weekly lab periods is mandatory unless you have completed the weeks assignment and received a grade above 90%.

Weekly assignments will be released on Sunday and be due the following Sunday.

There will be no extensions for weekly assignments.  To deal with special circumstances, the lowest 2 grades for weekly assignments will be dropped from the final grade.  You must do all of the assignments regardless.

# Additional Policies

Your overall course grade cannot be more than one letter grade higher than your average exam grade.  If your average exam grade is a C\+, you cannot receive a grade above B\+ for the course.

In order to pass the class, you must pass the last exam of the semester (there will be 3 total).

In order to pass the class, you must receive a passing grade on the final project.

Final course grades will be assigned at the discretion of the instructor.  Automatically assigned grades can be changed at any time at the instructor's discretion.

# Getting help

* We have many Teaching Assistants for this course.  Each will maintain office hours throughout the semester.  Contact and office hour information will be posted to the canvas site.
* Your faculty instructor will also have office hours throughout the semester to assist.
* IF YOU ARE HAVING AN ISSUE, GET HELP SOONER RATHER THAN LATER!!!
  * This course is additive, and if you fall behind, you will have difficulty with later concepts and assignments.

# Grades and Assignments

| Lab Grades | 20% |
| :-: | :-: |
| Lab Attendance | 10% |
| Lecture Participation and Quizes | 5% |
| Exam 1 | 15% |
| Exam 2 | 15% |
| Exam 3 | 15% |
| Final Project | 20% |

# Procedures

Procedures for late policy, requesting extensions, etc. go here.

# ChatGPT and Co-Pilot

* For this course, use of these tools will not be allowed.  Using these tools will be considered as academic dishonesty and dealt with accordingly.
* This is not an arbitrary decision:
  * These tools, while impressive, are imperfect and often generate poor, inefficient, or downright incorrect code.  In order to use these tools, one must already know how to program well in order to be certain that the generated code is correct.
  * In some cases, these tools may not be available, and thus it is important to learn to work without it.
* Once you achieve mastery, you may be able to use these tools in future courses.  When used correctly they are powerful, but incorrectly they are dangerous.

# Semester Schedule

* There will be 3 exams this semester, each of equal weight.
  * First Exam during the 4th week of the semester
  * Second Exam during the 10th week of the semester
  * Third Exam during the 14th week of the semester
* There will be a final project which should start around week 11.

# Final Thoughts before we begin

Computer Science is hard until it is not.  Be patient with yourself and get help early if you need it.  The TA's and instructors are here to help you learn, we do not expect you to know it already.

We are not "scary" or a "last resort".  Visiting office hours is a normal part of the learning process.

We will have a discord channel for the course.  TA's will monitor the discord channel, but communication with the instructor should be through email.  Please be kind and respectful when communicating on Discord.

Office hours are blocked so we can be available.  If you need help outside these times, just ask the TA or instructor to schedule an appointment.   __We are here to help.__

![](../../images/CISC181-Week%2010.jpg)

# But first…

It has been a couple of months since you completed your CS1 course, so let's review some concepts from last semester.

While Python and Typescript (and many other languages) are different, the basic concepts we learned in CS1 are still valid.

Concepts such as variables, operators, functions, conditionals and looping might have different syntax, but largely operate in the same way between languages.

If you understand the basic concepts, picking up a new language like Typescript is easier.  This is a critical skill as new languages and paradigms come into fashion all the time.  Learning how to apply your core knowledge to a new situation is critical to stay current throughout your career as a Computer Scientist.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

* Consider a simple math expression:
  * 3\+4
  * This is useful in computing this specific value (7), but is only useful in that one particular case.
* On the other hand:
  * X\+4
  * This would compute the same value if X=3, but would also compute a correct value for any other value of X.
* This is the basic idea of why we use variables.  We can write a single expression that computes a correct answer for many possible values of X.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

* Consider a simple math expression:
  * 3\+4
  * This is useful in computing this specific value (7), but is only useful in that one particular case.
* On the other hand:
  * X\+4
  * This would compute the same value if X=3, but would also compute a correct value for any other value of X.
* This is the basic idea of why we use variables.  We can write a single expression that computes a correct answer for many possible values of X.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

Using variables we can represent concepts like the equation of a line.

Here m is the slope of the line (change in y over change in x) and c is where the line intersects the Y access.

The equation y=mx\+c represents every possible straight line.

y=2x\+4 represents a specific line.  By assigning a value to the variable x we can compute the appropriate y for this line.

![](../../images/CISC181-Week%2011.png)

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

![](../../images/CISC181-Week%2012.png)

Just like we can use variables in math to create an expression that represents a line, in Computer Science we can use the same idea to create code that computes the correct answer for a variety of input values.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

* But what happens if we do this:
  * x="hello"
  * y=2x\+4
* This doesn't make any sense.
* To make sure that our code makes sense, we attach a type to our variables so that we will get an error if we try to assign a value to the variable that is not appropriate.
* We do this by declaring the variable and specifying what type of data it can contain.  Once declared, we will not be able to assign an inappropriate value type to that variable.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

So how do we  _declare_  a variable.  It depends on the language we are using, but in general, we specify its name, its type and potentially its initial value.  Note, if we do not specify its initial value, then we cannot read its value until we do.

In this short typescript code snippet, we declare the variable myValue to hold a number and assign it an initial value of 4.

We declare the variable answer as a number, but do not give it a value.

We then compute myValue\+3 and store it in answer.

<span style="color:#0060B1"> __Typescript:__ </span>

<span style="color:#0060B1">let myValue:number=4;</span>

<span style="color:#0060B1">let answer:number;</span>

<span style="color:#0060B1">answer=myValue\+3;</span>

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

_Use a ":" symbol after the name_

_= an initial value_

_Use "let" to declare a variable._

let myValue : number = 4;

_Line ends with a ";"_

_The name of the variable_

_Specify a valid type._

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

* __Types in Typescript__
* Typescript has only three basic types.
  * number: Holds any numeric data (e.g. 42 or 3.14159)
  * string: Holds a string of characters (e.g. "Hello World")
  * boolean: Holds the value true or false
* There are other more complex types we will examine later (like arrays) and we can even create our own types to use in our programs.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

__Code to compute the area of a circle with radius 2.__

__let pi:number=3.1415927;__

__let r:number=2;__

__let answer:number=pi\*r\*r;__

If we change the value of r, then we compute the area of a different circle.

Later we will look at turning this into a __ __  _function_  that can be called with different values of r and reused.

If we assign a non\-numeric value to r (which makes no sense) we would get a compiler error telling us where the problem is so we can fix it.

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

Since a variable can take on many values, we might want to compare the value to something to see if it is the same, or greater than or less than.

In typescript, we do this with a "===", "\<==",">==" or a simple "\<" or ">" and the result of the expression will have the type  _boolean_  _._

let myValue:number=5;

let isEqual:boolean = (myValue===5);

let isGreater:boolean = (myValue>5);

let isLessEqual:boolean = (myValue <== 5);

let myString:string="Hello"

let isStrEqual:boolean=(myValue==="Hello");

__Review Topic: Variables__

A  _variable_  is a named container for some unknown value.  We can use variables to create generic code that works on different values.

Variables are a powerful way to create generic code that produces expected results on a variety of different inputs.

The values that we assign to variables can come from many sources like data files, user input, databases, or online resources.  The code will work regardless of the values so long as they are of the correct type.

Throughout the semester we will use variables to create reusable code.  We will later learn other data types, and even how to create our own types containing complex data.

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

For now, we will discuss functions as named blocks of code.  Later we will learn how to create  _anonymous functions_  which do not have a name, but for this review, functions will have names.

We  _declare_  a function in typescript by specifying its name, its parameters (these are just local variables that we can set the value of when we call the function), and its return type.  We also include the code that we want to execute.

Once declared, we can use (call) that function anywhere in our code to execute it without worrying about the code inside.  As long as we know how to call it and the meaning of what it returns, we can use it.

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__An example function in Typescript__

__function areaOfCircle(radius: number):number{__

__let pi:number=3.1415927;__

__return pi\*radius\*radius;__

__}__

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__An example function in Typescript__

_A comma separated list of parameters and their types_

_This is the name of the function_

_Stand alone functions start with the function keyword_

__function areaOfCircle(radius: number):number{__

__let pi:number=3.1415927;__

__return pi\*radius\*radius;__

__}__

_The return value of the function_

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__An example function in Typescript__

_This is the name of the function_

__function areaOfCircle(radius: number):number{__

__let pi:number=3.1415927;__

__return pi\*radius\*radius;__

__}__

_The code that makes up the function goes inside_

_In typescript (and many other languages, we specify the start and end of blocks of code with braces_

_We specify what the function returns with the return statement_

__Review Topic: Functions__

A  __function__  is a collection of code which performs a specific task.  It can take parameters and return a value.

__We can call this function from anywhere in our code by using its name.__

__let myArea:number=areaOfCircle(2);__

This code will call our functionSubstituting 2 for the parameterradius, then return the calculationand store it in the variable myArea.

function areaOfCircle(radius: number):number{

let pi:number=3.1415927;

return pi\*radius\*radius;

}

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value (truthiness) of some boolean expression.

* In typescript, the most common conditional is the  __if __ statement.
  * The if statement evaluates it an expression and executes the code inside the if statement only if that expression is true.
  * The if statement can have an else branch.  The else branch is only executed if the expression evaluates to false.
* Using if statements we can execute different code based on the values of variables at run time, allowing us to create programs that are reactive to different states as the program runs.

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value (truthiness) of some boolean expression.

* Consider the case of a program that asks the user their year.
  * If they are not a senior, the program registers them for next semester.
  * If they are a senior it does not.

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value (truthiness) of some boolean expression.

function registerForClasses(year:string){

if (year!=="senior"){

//register for classes

}

}

__Aside: Boolean expressions__

* Equality and inequality
  * X===Y.  X and Y are equal
  * X!==Y, X and Y are not equal
  * X<Y, x is less than Y
  * X>Y x is greater than Y
  * X>=Y, x is greater than or equal to Y
  * X<=Y, X is less than or equal to Y

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value (truthiness) of some boolean expression.

Now suppose instead of doing nothing special when the user enters senior, we want to send them an invitation to graduation.

We can handle this with an  __else __ branch on our if statement.

__Review Topic: Conditionals__

A  __conditional__  is a way to alter program flow based on the value (truthiness) of some boolean expression.

function registerForClasses(year:string){

if (year!=="senior"){

console.log("You must register for classes");

}else{

console.log("Come to graduation");

}

}

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* The string type is a primitive data type in Typescript.  We can declare a variable to be of type string directly:
  * let username:string="gauss";
* There are several functions which we can use to operate on strings in Typescript.
* We will look at some of the most common ones briefly

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* Assume the string let myStr:string="Hello World";
* __charAt__  __(): __ This method will return character at the specified index.
  * myStr.charAt(2); //this will return an l (the third character at index 2)
* __indexOf__  __():__  It will return the index. first occurrence of specified value else \-1 if not found.
  * myStr.indexOf("o"); //this will return a 4
* __lastIndexOf__  __():__  It will return index, last occurrence of specified value else \-1 if not found.
  * myStr.lastIndexOf("o"); //this will return 7

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* Assume the string let myStr1:string="Hello";
* Assume the string let myStr2:string="World";
* __concat__  __():__  This method will combine the two separate string and return that combined string.
  * myStr1.concat(myStr2); //returns "HelloWorld"
  * myStr1.concat(" ",myStr2); //returns "Hello World"
  * myStr2.concat(myStr1); //returns "WorldHello"
  * myStr2.concat(",",myStr1); //returns "World,Hello"

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* Assume the string let myStr:string="Hello World";
* __slice():__  Extract the specified string and return a new string (does not modify string).
  * myStr.slice(2); //returns "llo World"
  * myStr.slice(2,5); //returns "llo"
  * _Note: the first parameter is the index of the first character to return, and the second is the index of the first character NOT returned._

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* Assume the string let myStr="Hello World";
* __split():__  Splits the specified String object into an array of strings.
  * myStr.split(" "); //returns the array \["Hello","World"\]
* __substring():__  Returns character of string between two define indexes.
  * myStr.substring(2); // returns "llo World"
  * myStr.substring(2,5); // returns "llo"
  * _Note: the first parameter is the index of the first character to return, and the second is the index of the first character NOT returned._

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* Assume the string let myStr="Hello World";
* toLowerCase(): This method convert the string into lowercase.
  * myStr.toLowerCase(); //returns "hello world"
* toUpperCase(): This method convert the string into uppercase.
  * myStr.toUpperCase(); //returns "HELLO WORLD"

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

* What if the string contains a number and we want to convert it to a number type?
  * let myNumStr:string="42";
  * let myNum:number=parseInt(myNumStr); //this function does the trick
  * Let myNum2:number=\+myNumStr; //this also works, but is less explicit
* If myNumStr did not contain a valid number, the parseInt function would return NaN to specify "Not a number"
* If we want to go the other way
  * Let myNum:number=42;
  * Let myNumStr:string=myNum.toString();

__Strings in Typescript:  __

In TypeScript, the string is sequence of char values used to store text data

There are MANY other methods available to the string type, but these are some of the more useful and common.  Some other useful ones we will not cover in detail here are:

startsWith/endsWith

includes

padStart/padEnd

replace/replaceAll

search

trim/trimStart/trimEnd

![](../../images/CISC181-Week%2013.jpg)

__More on Boolean Expressions:  __

A Boolean  __expression__  is an expression that evaluates to either  __true__  or  __false__

* So far we have looked at comparison operators which can form Boolean expressions
  * ===,!==,\<=,>=,\<,>
    * For example,  _happiness>=7_  evaluates to true if the value of the variable happiness is 7 or more
    * luckiness>7 evaluates to true if the value of the variable luckiness is more than 7
  * We can use Boolean operators for and (&&), or (||) to combine many of these Boolean expressions into a single expression.

__More on Boolean Expressions:  __

A Boolean  __expression__  is an expression that evaluates to either  __true__  or  __false__

* We can use Boolean operators for and (&&), or (||) to combine many of these Boolean expressions into a single expression.
  * let happyLucky:boolean=(happiness>=7 && luckiness>7);
    * Sets happyLucky to true when both conditions are true
  * let happyOrLucky:boolean=(happiness>=7 || luckiness>7);
    * Sets happyOrLucky to true when at least one of the conditions is true
* __Note: Just think of this in words.  A and B implies both.  A or B implies either. __

__More on Boolean Expressions:  __

A Boolean  __expression__  is an expression that evaluates to either  __true__  or  __false__

* An additional Boolean operator that we have available is the not (!) operator
  * Unlike the other operator, this operator simply negates whatever comes next.
    * !A && B  // true when A is false and B is true
    * !(A && B) // true when at least one of A and B are false
    * !A || !B // true when at least one of A and B are false (DeMorgan's Law)
    * !(A && B) || C // true when at least one of A and B are false or any time C is true
* By using a combination of comparison operators, logical connectors, and nots we can build complex logic to test state to use in conditionals and loops…


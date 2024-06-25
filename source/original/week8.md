CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 8
Spring 2024

* Welcome back\!\!\!
  * Remember:
    * There is a lab assignment this week so you should attend lab as normal\.
    * Next week is the second midterm\, make sure you are signed up and ready\.
      * Your note sheet must be hand written \(not typed\)
      * Please review the rules for the testing center to make sure you don't have any problems\.
* And now\, back to our show\!\!\!

![](../../images/CISC181-Week%2080.jpg)

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* What we are concerned with in software testing:
  * Validate the software is bug free
  * Validate the software meets requirements
  * Validate the software behaves as expected on boundary cases
  * Validate the software behaves as expected on exceptional cases

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

![](../../images/CISC181-Week%2081.jpg)

* Verification and Validation
  * __Verification__  refers to the set of tasks that ensure that the software correctly implements a specific function\. It means “Are we building the  _product correctly_ ?”\.
  * __Validation __ refers to a different set of tasks that ensure that the software that has been built is traceable to customer requirements\. It means “Are we building the  _correct product_ ?”\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Software bugs can be expensive\, but they can also be very dangerous\.  Here are a few examples of software bugs causing terrible outcomes:
  * 1985: Canada's Therac\-25 radiation therapy malfunctioned due to a software bug and resulted in lethal radiation doses to patients\.
  * 1994: China Airlines Airbus A300 crashed due to a software bug killing 264 people\.
  * 1999: A software bug caused the failure of a $1\.2 billion military satellite launch\.
  * 2015: A software bug in an F\-35 resulted in it being unable to detect targets correctly\.
  * Starbucks was forced to close more than 60% of its outlet in the U\.S\. and Canada due to a software failure in its POS system\.
  * Nissan cars were forced to recall 1 million cars from the market due to a software failure in the car's airbag sensory detectors\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* We have to get it right\!\!\!
* Types of testing:
  * Functional: Does it do what it is supposed to do?  Does it meet requirements?  Does it work correctly on all possible inputs?
  * Non\-Functional: How does it perform on various inputs? Does it scale? How usable is it?  How does it behave under heavy use/load?
  * Regression Testing: After the software is modified\, verify that the modifications did not damage previously working components of the system\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Testing levels
  * Unit testing: Test small independent components for correct behavior\.  The purpose is to validate that each unit of the software performs as designed\.
  * Integration testing: Combining units and testing as a group\.  The purpose of this level of testing is to expose faults in the interaction between integrated units\.
  * System testing: Tests of the completed system\. The purpose of this test is to evaluate the system's compliance with the specified requirements\.
  * Acceptance testing: Test to ensure compliance with the requirements specification\. The purpose of this test is to evaluate the system's compliance with the business requirements and assess whether it is acceptable for delivery\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Best Practices
  * Test continuously throughout the development process\.
  * Make tests small and include many to make finding issues easier
  * Use tools to evaluate things like code coverage to ensure thorough testing
  * Don't skip regression testing\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

![](../../images/CISC181-Week%2082.png)

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Some comments from experience:
  * While time consuming\, testing is critical to writing good software systems\.
  * Poorly written tests are like having no tests at all\.  This requires some thought\.
  * Failure to write tests will eventually cause problems in any system of a reasonable size\.
  * Seemingly unrelated code segments can and do break each other\.
  * Test after each change to aid in solving issues that arise as you code\.
    * In other words\, you should write tests early in the process\.  Possibly even before writing a line of code\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

We will be using jest to write tests in Typescript\.  You have already seen this in lab\, but now we are going to write our own tests\.

Jest provides a format for writing tests in a simple and organized way\.

Jest can run tests on the entire system or on individual components\.

Jest can produce a coverage report to let you know which lines are not “covered” by the test \(i\.e\. functions not called\, branches not taken\, etc\.\)

Testing can easily be built into the build cycle\, so that tests are run as part of each build\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* So what makes a good test?
  * Start at the unit level \(function\) and validate that the function behaves as expected in all cases\.
    * Make sure you test its behavior on edge cases
    * Make sure you test its behavior on exceptional/invalid inputs
    * Make sure your comments document the behavior in exceptional/invalid instances\. \(ie\. Does it replace the value\, throw an exception\)
  * Once you have unit tests\, start testing higher level operations \(i\.e\. instantiate classes that use your unit tested code\.  Simulate the overall behavior of the system\.  Again\, use the same methodology\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

Let's look at an example:  Consider the following code:

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">valueArray:number</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> Takes a number and adds its square root to the array </span>  <span style="color:#6A9955">valueArray</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> value \{number\} \- The number to be squared</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{number\} \- The square root of the number</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Adds the square root of the number to the </span>  <span style="color:#6A9955">valueArray</span>

<span style="color:#6A9955"> \*/</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">buildRootArray</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">value:number</span>  <span style="color:#D4D4D4">\):number\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> root=</span>  <span style="color:#D4D4D4">Math\.sqrt</span>  <span style="color:#D4D4D4">\(value\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">valueArray\.push</span>  <span style="color:#D4D4D4">\(root\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> root;</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

Some questions we might ask about this code:

  * How does it behave on a positive integer?
  * How does it behave on a positive real number?
  * How does it behave when passed a 0\.
  * How does it behave on a negative integer\.
  * How does it behave on a negative real number?

<span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">valueArray:number</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> Takes a number and adds its square root to the array </span>  <span style="color:#6A9955">valueArray</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@param</span>  <span style="color:#6A9955"> value \{number\} \- The number to be squared</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{number\} \- The square root of the number</span>

<span style="color:#6A9955"> \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Adds the square root of the number to the </span>  <span style="color:#6A9955">valueArray</span>

<span style="color:#6A9955"> \*/</span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">function</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">buildRootArray</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#D4D4D4">value:number</span>  <span style="color:#D4D4D4">\):number\{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> root=</span>  <span style="color:#D4D4D4">Math\.sqrt</span>  <span style="color:#D4D4D4">\(value\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">valueArray\.push</span>  <span style="color:#D4D4D4">\(root\);</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> root;</span>

<span style="color:#D4D4D4">\}</span>

  * How does it behave when the array is empty/populated already?
  * Are those behaviors what we expect and what is documented?

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

Let's look at another example:  Consider the following code:

Can I construct one of these?

Does it work normally?

What happens if the array is empty?

What happens if the array has only oneelement in it?

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Let's look at another example:  Consider the following code:
* Can I construct one of these?
  * Call the constructor and verify
* Does it work normally?
  * Populate with some items and try
* What happens if the array is empty?
  * Ensure array is empty and try
* What happens if the array has only oneelement in it?
  * Populate with 1 item and try

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

__Topic: Using Jest__

_Jest _ is a test runner and testing framework that works with javascript and Typescript

* To create tests in a project that is already configured for jest\, we create files with the word ‘test' in their filename \(i\.e\. myprogram\.test\.ts\)
  * Note: This can be changed\, but our projects will be pre\-configured to work this way\.
* Running jest on the command line by itself within the project folder will run tests in all properly named files\.
* Running jest on the command line with the name of the file \(without the test\.ts\) will run tests in only that file\.
* Running jest on the command line with –coverage will produce a coverage report\.

__Topic: Using Jest__

_Jest _ is a test runner and testing framework that works with javascript and Typescript

* Standard simple Jest syntax
  * describe:  Create a new test section
  * test:  Write a specific test
  * expect: expect an expression to behave a certain way
    * Example: expect\(value\)\.toBeInstanceOf\(MyClass\)
  * There are many others\, but we can get by with these three for now\.

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

Back to our example\, let's look at what we want to do for each of these:

We will start with a describe block forthe Elements class:

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">describe\(</span>  <span style="color:#CE9178">"Elements"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">//Our tests go here</span>

<span style="color:#D4D4D4">\}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Back to our example\, let's look at what we want to do for each of these:
* Can I construct one of these?
  * We add a test block to call the constructor and verify

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">describe\(</span>  <span style="color:#CE9178">"Elements"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Create Instance"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        expect\(elements\)\.</span>  <span style="color:#D4D4D4">toBeInstanceOf</span>  <span style="color:#D4D4D4">\(Elements\);</span>

<span style="color:#D4D4D4">    \}\);</span>

<span style="color:#D4D4D4">\}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Back to our example\, let's look at what we want to do for each of these:
* Does it work normally?
  * Create a test block to populate with some items and try

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Array populated 2 or more"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">=\[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">a"</span>  <span style="color:#D4D4D4">\,</span>  <span style="color:#CE9178">"b"</span>  <span style="color:#D4D4D4">\,</span>  <span style="color:#CE9178">"c</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> value = </span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        expect\(value\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"c"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"b"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">not\.toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"c"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Back to our example\, let's look at what we want to do for each of these:
* What happens if the array is empty?
  * Create a test to ensure array is empty and try

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">  test\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">      </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">      </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4"> = \[\];</span>

<span style="color:#D4D4D4">      expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">      expect\(</span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\)\)</span>  <span style="color:#D4D4D4">         \.</span>  <span style="color:#D4D4D4">toThrowError</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Back to our example\, let's look at what we want to do for each of these:
* What happens if the array is empty?
  * Create a test to ensure array is empty and try
* This fails because we don't throw an exception and neither does pop\.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">  test\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">      </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">      </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4"> = \[\];</span>

<span style="color:#D4D4D4">      expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">      expect\(</span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\)\)</span>  <span style="color:#D4D4D4">         \.</span>  <span style="color:#D4D4D4">toThrowError</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

Back to our example\, let's look at what we want to do for each of these:

We can fix this\, by modifying our code\,or our test\, but either way we need todocument the behavior\.

Now it works as expected

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@throws</span>  <span style="color:#6A9955"> \{Error\} \- If the array is empty</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.length</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\) </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">  test\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">      </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">      </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4"> = \[\];</span>

<span style="color:#D4D4D4">      expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">      expect\(</span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\)\)</span>  <span style="color:#D4D4D4">         \.</span>  <span style="color:#D4D4D4">toThrowError</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Back to our example\, let's look at what we want to do for each of these:
* What happens if the array has only oneelement in it?
  * Populate with 1 item and try

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> Elements \{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">stringArray</span>  <span style="color:#D4D4D4">: string\[\] = \[\];</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#6A9955">/\*\*</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@description</span>  <span style="color:#6A9955"> This function returns and</span>  <span style="color:#6A9955">     \* removes the last element</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@returns</span>  <span style="color:#6A9955"> \{string\} \- The last element of the</span>

<span style="color:#6A9955">     \*</span>  <span style="color:#6A9955"> array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@sideEffects</span>  <span style="color:#6A9955"> \- Removes the last element of </span>

<span style="color:#6A9955">     \* </span>  <span style="color:#6A9955">the array</span>

<span style="color:#6A9955">     \* </span>  <span style="color:#569CD6">@throws</span>  <span style="color:#6A9955"> \{Error\} \- If the array is empty</span>

<span style="color:#6A9955">     \*/</span>

<span style="color:#D4D4D4">     </span>  <span style="color:#D4D4D4">getLastElement</span>  <span style="color:#D4D4D4">\(\): string \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> \(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.length</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\) </span>  <span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">throw</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Error\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">\.stringArray\.pop</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">    \}</span>

<span style="color:#D4D4D4">\}</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Array populated 1 item"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">=\[</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> value = </span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        expect\(value\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">“a"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">not\.toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">“a"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

Putting it all together\, we have a test suite for this class that looks like this:

<span style="color:#D4D4D4">describe\(</span>  <span style="color:#CE9178">"Elements"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Create Instance"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        expect\(elements\)\.</span>  <span style="color:#D4D4D4">toBeInstanceOf</span>  <span style="color:#D4D4D4">\(Elements\);</span>

<span style="color:#D4D4D4">    \}\);</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Array populated 2 or more"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4"> = \[</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#CE9178">"b"</span>  <span style="color:#D4D4D4">\, </span>  <span style="color:#CE9178">"c"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> value = </span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        expect\(value\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"c"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"b"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">not\.toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"c"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4"> = \[\];</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\)\)\.</span>  <span style="color:#D4D4D4">toThrowError</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"Array is empty"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

<span style="color:#D4D4D4">    test\(</span>  <span style="color:#CE9178">"Array populated 1 item"</span>  <span style="color:#D4D4D4">\, \(\) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> \{</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> elements = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> Elements\(\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4"> = \[</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\];</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> value = </span>  <span style="color:#D4D4D4">elements\.getLastElement</span>  <span style="color:#D4D4D4">\(\);</span>

<span style="color:#D4D4D4">        expect\(value\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray\.length</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">toBe</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">        expect\(</span>  <span style="color:#D4D4D4">elements\.stringArray</span>  <span style="color:#D4D4D4">\)\.</span>  <span style="color:#D4D4D4">not\.toContain</span>  <span style="color:#D4D4D4">\(</span>  <span style="color:#CE9178">"a"</span>  <span style="color:#D4D4D4">\);</span>

<span style="color:#D4D4D4">    \}\);</span>

<span style="color:#D4D4D4">\}\);</span>

__Topic: Testing__

_Software Testing_  is the process of validating that software is bug free and meets requirements\.

* Now I can run my test
  * Here I see that all 4 tests passed\.
  * Now I know that the class methodworks as expected\, in all of the cases that I could think of\.
  * I have also verified that it behaves as documented on exceptions
  * Once written this test will run every time I run tests\, handling regression testing of this particular method of this class when future updates are made elsewhere in the program\.

<span style="color:#D4D4D4">PASS  </span>  <span style="color:#D4D4D4">src</span>  <span style="color:#D4D4D4">/app/</span>  <span style="color:#D4D4D4">mathpain\.test\.ts</span>

<span style="color:#D4D4D4">Test Suites: 1 passed\, 1 total</span>

<span style="color:#D4D4D4">Tests:       4 passed\, 4 total</span>

<span style="color:#D4D4D4">Snapshots:   0 total</span>

<span style="color:#D4D4D4">Time:        1\.151 s</span>

__Topic: Using Jest__

_Jest _ is a test runner and testing framework that works with javascript and Typescript

* Coverage is important when writing tests
  * While you should not specifically write tests to coverage\, since those tests will not cover all possible inputs\, you should make sure that your tests actually cover your code\.  Let's look at our example again\, from a coverage standpoint
* Running: jest –coverage will produce a shortened coverage report like this:

<span style="color:#D4D4D4">\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-</span>

<span style="color:#D4D4D4">File                 | % </span>  <span style="color:#D4D4D4">Stmts</span>  <span style="color:#D4D4D4"> | % Branch | % </span>  <span style="color:#D4D4D4">Funcs</span>  <span style="color:#D4D4D4"> | % Lines | Uncovered Line \#s </span>

<span style="color:#D4D4D4">\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-</span>

<span style="color:#D4D4D4">All files            |   97\.61 |    92\.66 |   94\.84 |   97\.78 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent\.ts</span>  <span style="color:#D4D4D4">      |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzDialog\.ts</span>  <span style="color:#D4D4D4">         |    93\.1 |       75 |   83\.33 |   94\.44 | 135\-140           </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">bind\.decorators\.ts</span>  <span style="color:#D4D4D4">  |   97\.38 |    93\.65 |   91\.66 |   97\.27 | 601\-602\,621\-622   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">bootstrap\.ts</span>  <span style="color:#D4D4D4">        |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">event\.decorators\.ts</span>  <span style="color:#D4D4D4"> |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">eventsubject\.ts</span>  <span style="color:#D4D4D4">     |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4">\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-</span>

__Topic: Using Jest__

_Jest _ is a test runner and testing framework that works with javascript and Typescript

* If we add \-\-coverageDirectory=‘\./coverage' to our jest command with –coverage\, we still get the same information\, but we also get a website with detailed info including source links\.
* You can see an example here: [https://gsilber\.github\.io/WebEZ/cover/lcov\-report/](https://gsilber.github.io/WebEZ/cover/lcov-report/)
  * Note this example may go away in the future\, it is just temporary for today\.

<span style="color:#D4D4D4">\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-</span>

<span style="color:#D4D4D4">File                 | % </span>  <span style="color:#D4D4D4">Stmts</span>  <span style="color:#D4D4D4"> | % Branch | % </span>  <span style="color:#D4D4D4">Funcs</span>  <span style="color:#D4D4D4"> | % Lines | Uncovered Line \#s </span>

<span style="color:#D4D4D4">\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-</span>

<span style="color:#D4D4D4">All files            |   97\.61 |    92\.66 |   94\.84 |   97\.78 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent\.ts</span>  <span style="color:#D4D4D4">      |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzDialog\.ts</span>  <span style="color:#D4D4D4">         |    93\.1 |       75 |   83\.33 |   94\.44 | 135\-140           </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">bind\.decorators\.ts</span>  <span style="color:#D4D4D4">  |   97\.38 |    93\.65 |   91\.66 |   97\.27 | 601\-602\,621\-622   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">bootstrap\.ts</span>  <span style="color:#D4D4D4">        |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">event\.decorators\.ts</span>  <span style="color:#D4D4D4"> |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">eventsubject\.ts</span>  <span style="color:#D4D4D4">     |     100 |      100 |     100 |     100 |                   </span>

<span style="color:#D4D4D4">\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-</span>


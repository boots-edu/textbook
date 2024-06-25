CISC 181-INTRODUCTION TO COMPUTER SCIENCE II

# Week 9
Spring 2024

__Topic: Basic Web Development__

* First some stuff you might already know, but is good to know:
  * The internet is the network over which many protocols can be transmitted (like email, IM, www, etc).
  * DNS (Domain Name Service) is a distributed database that maps names to network addresses (e.g. [udel.edu](http://www.udel.edu/) => 128.175.13.247)
  * One of the protocols the internet supports is Hyper Text Transport Protocol (http) or it's secure cousin (https).
  * Over this protocol, we send regular text files, that contain a specialized language called HyperText Markup Language (html) that tells a web browser reading the file how to render the page.
  * That's right, the web is basically just a bunch of text files (and a lot of cat videos).

__Topic: Basic Web Development__

* HTML is a simple tag based language where elements are defined with an opening and closing tag
  * <p>Something</p>
  * <button>Click Me</button>
  * <span>Something else</span>
  * <br/> (has no body, so no closing tag
* These tags can be nested inside of each other
  * <span>Hello <button>Click</button></br><span>World</span>
* If a tag is inside another tag, it can be affected by the parent's size, position, and style.

__Topic: Basic Web Development__

* HTML is a simple tag based language where elements are defined with an opening and closing tag
  * <p>Something</p>
  * <button>Click Me</button>
  * <span>Something else</span>
  * <br/> (has no body, so no closing tag
* These tags can be nested inside of each other
  * <span>Hello <button>Click</button></br><span>World</span>
* If a tag is inside another tag, it can be affected by the parent's size, position, and style.

__Topic: Basic Web Development__  __HTML__

* Common tags:
  * __<div></div>__  : Create a block which can be styled.
  * __<p></p>__  :  A paragraph
  * __<input type="text" />__  : An input box
  * __<input type="password" />__  : An input box with the letters obscured
  * __<input type="radio" /> __ : A radio button
  * __<input type="checkbox" /> __ : A checkbox
  * __<button>Button Text</button>__
  * __<span></span>__  : An enclosing element that doesn't do much but can be styled.
  * __<select><option>1</option><option>2</option></select>__  : A drop down

__Topic: Basic Web Development__  __HTML__

Tags in action:

Here are two of the common tag types.  The outerdiv is not really doing anything other than grouping the other tags, but later we will learn to style that div which will make it important.

The 2 paragraph tags simply output the text to the browser with paragraph spacing between them.

![](../../images/CISC181-Week%2090.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">p</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Here is the first paragraph of text</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">p</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">p</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Here is the second paragraph of text</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">p</span>  <span style="color:#808080">></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

Tags in action:

By removing the <p></p> tags, and adding a <br/>I get line spacing instead of paragraph spacing.

![](../../images/CISC181-Week%2091.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    Here is the first paragraph of text</span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    Here is the second paragraph of text</span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

You can set various attributes on each tag:

Here is a simple login screen.

Notice the placeholder attribute being set (and the type attribute)

![](../../images/CISC181-Week%2092.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"text"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">placeholder</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"User Name"</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"password"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">placeholder</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Password"</span>  <span style="color:#808080">/><</span>  <span style="color:#808080">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Login</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Register</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">><</span>  <span style="color:#808080">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"checkbox"</span>  <span style="color:#808080">/></span>  <span style="color:#D4D4D4"> </span>

<span style="color:#D4D4D4">    Remember Me?</span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

And here are a set of radio buttons:

If they have the same name, they will act as a group, where selecting one deselects the others.

![](../../images/CISC181-Week%2093.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    Please select an option:</span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"radio"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"option"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"1"</span>  <span style="color:#808080">/></span>  <span style="color:#D4D4D4"> </span>

<span style="color:#D4D4D4">    Option 1</span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"radio"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"option"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"2"</span>  <span style="color:#808080">/></span>  <span style="color:#D4D4D4"> </span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">Option 2</span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"radio"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">name</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"option"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"3"</span>  <span style="color:#808080">/></span>  <span style="color:#D4D4D4"> </span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">Option 3</span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

And a dropdown box:

Note the id attribute.  This uniquely identifies that object.Every object in a file must have a unique id if one is assigned (no duplicates).

Later, this will be a very important attribute when we start building our projects.

![](../../images/CISC181-Week%2094.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    Please select an option:</span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">select</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"options"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">option</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"1"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Option 1</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">option</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">option</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"2"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Option 2</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">option</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">option</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">value</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"3"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Option 3</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">option</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">select</span>  <span style="color:#808080">></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

Web development in vscode:

Clicking this button, will bring up a preview panel on the right which will change automatically as you edit the file.

![](../../images/CISC181-Week%2095.png)

__Topic: Basic Web Development__  __HTML__

Web development in vscode:

Makes things a lot easier.

![](../../images/CISC181-Week%2096.png)

__Topic: Basic Web Development__  __HTML__

* So that's pretty cool, but websites are supposed to look good too.
* Styling our elements allows us to alter colors, shapes, behaviors, appearance, and placement.
* There are basically a few ways to style:
  * Style a tag:  Note: This styles all tags of that type, so should not be used
  * Inline style:  Add the style attribute in the html and set styles there.
  * Style a class: We can add one or more CSS classes to any element, and they will take on that style.  The style affects all elements with that class.
  * Style a specific element: We can apply a style to an id (remember from a few slides ago).  The style will only affect that element.
* Often these styles are placed in a separate file with a .css extension (stands for cascading style sheets).

__Topic: Basic Web Development__  __HTML__

Here is our example, with id and class tags added

Still looks the same, but now we have things to style.

![](../../images/CISC181-Week%2097.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"text"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"username"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">placeholder</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"User Name"</span>  <span style="color:#808080">/><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"password"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"password"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">placeholder</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Password"</span>  <span style="color:#808080">/><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">loginBtn</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">btn</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Login</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">registerBtn</span>  <span style="color:#CE9178">" class="</span>  <span style="color:#9CDCFE">btn</span>  <span style="color:#F44747">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Register</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">rememberMe</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"checkbox"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">rememberMe</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">/></span>  <span style="color:#D4D4D4"> Remember Me?</span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

Here is our example, with id and class tags added

First let's style the div.  It has an id, so we will style it by id.

To reference an id in a style, we put a \# in front.

The style for the outer div tag is \#loginForm

![](../../images/CISC181-Week%2098.png)

<span style="color:#808080"><</span>  <span style="color:#569CD6">div </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">loginForm</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"text"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"username"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">placeholder</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"User Name"</span>  <span style="color:#808080">/><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"password"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"password"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">placeholder</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"Password"</span>  <span style="color:#808080">/><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">loginBtn</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">btn</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Login</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">registerBtn</span>  <span style="color:#CE9178">" </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">btn</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Register</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">rememberMe</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"checkbox"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">rememberMe</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">/></span>  <span style="color:#D4D4D4"> Remember Me?</span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Basic Web Development__  __HTML__

Here is our example, with id and class tags added

We can combine rules.  This rule effects all input tags insideloginForm.

Now we have a 5 pixel margin around our input elements.

Now what can we do about the buttons.  Remember, theywere both defined with a class of btn.  For classes, we specify the style by preceding the class name with a ".".  So btn is referenced as .btn.

![](../../images/CISC181-Week%2099.png)

<span style="color:#D7BA7D">\#loginForm</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D7BA7D">input</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">margin</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#B5CEA8">5px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

__Topic: Basic Web Development__  __HTML__

We can then add a style for our btn class

We are setting the background and foreground colors.  Thepadding inside, the size of the text, spacing around the buttons,and making the corners round.  Notice it affects both buttons.

What a difference it makes when we add just a little bit of styling to our tags.

<span style="color:#D7BA7D">.</span>  <span style="color:#D7BA7D">btn</span>  <span style="color:#D4D4D4">{</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">background-color</span>  <span style="color:#D4D4D4">: blue;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">color</span>  <span style="color:#D4D4D4">: white;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">10px</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#B5CEA8">20px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">font-size</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">16px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">border-radius</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">10px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">margin</span>  <span style="color:#D4D4D4">:</span>  <span style="color:#B5CEA8">15px</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

![](../../images/CISC181-Week%20910.png)

__Topic: Basic Web Development__  __HTML__

There are many html tags, and styles.  I am not sure anybodyknows them all.  They are not even 100% consistent across web browsers.  You only need a few to do everything.

We will provide you with resources to look up what you needand vs code has excellent IntelliSense with html and styles.

This is an incredibly useful skill that is worth learning foryour future careers.

![](../../images/CISC181-Week%20911.jpg)

__Topic: Basic Web Development__  __HTML – Box Positioning__

* As part of styling, we have a few very important styles we will use constantly.
  * position: This sets how the element is positioned within its parent.
    * relative: The most common.  It doesn't affect the object it is applied to, but it causes everything inside to be positioned relative to the object to which it is applied.  By default, everything is page relative (ignores the parent) unless this is set.
    * absolute: Positions the object outside the normal model.  This object has no affect on other objects (i.e. next object could be at the same position).
    * fixed: Positioned relative to the window.  It stays there.
    * sticky: Positioned with a scrolling window, stays in position relative to the scroll position.

__Topic: Basic Web Development__  __HTML – Box Positioning__

* As part of styling, we have a few very important styles we will use constantly.
  * display:  (Too many to list, here are the ones you will probably use)
    * Inline: Next element will be right after it (or on the next line if no room).  Sizes to the content
    * Block: Element will be displayed by itself vertically and can be sized manually with width and height, or top, button, left, and right.
    * Inline-block: Best of both worlds.  Sizable but still can be next to each other.

__Topic: Basic Web Development__  __WebEz__

Once we have some html, we would like it to do something.  That's where the typescript comes in.

You can create a web application without a framework, but it can be difficult and requires a deeper knowledge of how a web browser works.

Many frameworks exist, but because they are for commercial purposes, they are large and have steep learning curves (angular, vuejs, react, etc.)

We created WebEz to be a lighter weight, easier to learn framework that will prepare you for more complex frameworks that may come later and allow you to create impressive applications without a steep learning curve (still a curve, just not as steep).

__Topic: Basic Web Development__  __WebEz__

The WebEz model uses standard html and css like we have been talking about inside the basic unit of a component.

Every project starts with 1 component called MainComponent.  It has an html file, a css file, and a ts file to get you started (and a file for your tests).

Additional components can be created and inserted into the MainComponent to build an object-oriented web application.

The html is plain html.

The css is plain css.

The ts file uses decorators to attach methods and properties of the class to the html by the element's id attribute (I told you we would need it later).

The finished product is compiled into a website that can be published on any web server.

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

To get started, we need to install the WebEZ command line tool from NPM.

To create a new project called Example Project, we can use the cli to build (scaffold) the code.

![](../../images/CISC181-Week%20912.png)

Here is the command to create your project.  It will create a fully working website with one component in it (MainComponent).

This installs a basic WebEz project with a single component in it that you can edit, and a lot of support files that you can ignore.

You are only interested in what is inside the src/app folder (src\\app on Windows)

![](../../images/CISC181-Week%20913.png)

![](../../images/CISC181-Week%20914.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

WebEz is a component-based system.  Individual elements should be broken up into components and attached to the web document in the constructor.

If we navigate to the src/app folder at a command prompt, we can add more components using the CLI interface.

This will create a folder with the 4 files in it (Just like MainComponent)

![](../../images/CISC181-Week%20915.png)

![](../../images/CISC181-Week%20916.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

Here you can see the structure created for us.  This does not attach the component to anything, it just creates the files for us.

To add the fancy-image somewhere inside main-component, we edit main component's files.

The div image-holder is where we attach our component.  We have also added two buttons which we can use to control our fancy image component.

We can run this to make sure it worked with npm run start.  We should see the default text for fancy-image and 2 buttons on the screen.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">MainComponent</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">fancyImg:FancyImageComponent</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">FancyImageComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(html, </span>  <span style="color:#D4D4D4">css</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#569CD6">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.</span>  <span style="color:#D4D4D4">fancyImg</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"image-holder"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"image-holder"</span>  <span style="color:#808080">></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">><</span>  <span style="color:#569CD6">br</span>  <span style="color:#808080">/></span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">prev</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Previous</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"next"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Next</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

![](../../images/CISC181-Week%20917.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

Now we will add the html and css for the fancy-image component.  We will also put two images img1.jpg and img2.jpg into the assets folder.

And let's bind the src attribute of the image to a variable in the .ts file.

Here we just create aproperty, give it a defaultvalue, and use a  _bind_  _decorator_  to attach it to the html element that we have already defined.  This will cause the src attribute of the img tag to contain the string (and display a cat).

If you run it you will see the image img1.jpg.

<span style="color:#D7BA7D">\#image</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">height</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">300px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">img</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"image"</span>  <span style="color:#808080">></</span>  <span style="color:#569CD6">img</span>  <span style="color:#808080">></span>

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">FancyImageComponent</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    @BindAttribute(</span>  <span style="color:#CE9178">"image"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">src</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> image: string = </span>  <span style="color:#CE9178">"assets/img1.jpg"</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(html, </span>  <span style="color:#D4D4D4">css</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

![](../../images/CISC181-Week%20918.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

* I would rather choose my image through a numeric property (i.e. 1 or 2), and I can do that in WebEz by using a custom transformer.
* Notice that we pass a function tothe bind decorator that takes anumber and returns a string.
* Now we can just change the imagenumber and it will just modify the img tag to load the correct image.
* Now we hook up the buttons.  What do we want them to do:
  * If we are at the first image, disable the previous button.
  * If we are at the second image, disable the next button.
  * If next is pushed increment the image number
  * If previous is pushed decrement the image number

<span style="color:#D4D4D4">@BindAttribute(</span>  <span style="color:#CE9178">"image"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">src</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#D4D4D4">    (</span>  <span style="color:#D4D4D4">imgNum</span>  <span style="color:#D4D4D4">: number): string </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">return</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#CE9178">\`assets/</span>  <span style="color:#CE9178">img</span>  <span style="color:#569CD6">${</span>  <span style="color:#D4D4D4">imgNum</span>  <span style="color:#569CD6">}</span>  <span style="color:#CE9178">.jpg\`</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">})</span>

<span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> image: number = </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">;</span>

![](../../images/CISC181-Week%20919.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

* So let's look at how to do this back in MainComponent.
  * If we are at the first image, disable the previous button.
  * If we are at the second image, disable the next button.
  * If next is pushed increment the image number

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">MainComponent</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">fancyImg</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">FancyImageComponent</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">FancyImageComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    @BindDisabledToBoolean(</span>  <span style="color:#CE9178">"prev"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">prevDisabled</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    @BindDisabledToBoolean(</span>  <span style="color:#CE9178">"next"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">nextDisabled</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

We increment the image property

Enable previous button

If we are at the end, we disable the next button

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"next"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNext</span>  <span style="color:#D4D4D4">(){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.fancyImg.image</span>  <span style="color:#D4D4D4">++;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.prevDisabled</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.fancyImg.image</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#B5CEA8">2</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.nextDisabled</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

![](../../images/CISC181-Week%20920.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

* So let's look at how to do this back in MainComponent.
  * If we are at the first image, disable the previous button.
  * If we are at the second image, disable the next button.
  * If prev is pushed decrement the image number

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">MainComponent</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">fancyImg</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">FancyImageComponent</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">FancyImageComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    @BindDisabledToBoolean(</span>  <span style="color:#CE9178">"prev"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">prevDisabled</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    @BindDisabledToBoolean(</span>  <span style="color:#CE9178">"next"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">public</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">nextDisabled</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">boolean</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

We decrement the image property

Enable next button

If we are at the beginning, we disable the previous button

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"prev"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onPrev</span>  <span style="color:#D4D4D4">(){</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.fancyImg.image</span>  <span style="color:#D4D4D4">--;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.nextDisabled</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.fancyImg.image</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">){</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.prevDisabled</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">        }</span>

<span style="color:#D4D4D4">    }</span>

![](../../images/CISC181-Week%20921.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

![](../../images/CISC181-Week%20922.png)

Initially, the previous button is disabled, and the image displays img1.jpg.

Clicking next enables the previous button, and disables the next button while loading img2.jpg.

![](../../images/CISC181-Week%20923.png)

![](../../images/CISC181-Week%20924.png)

__Topic: Basic Web Development__  __WebEz__  __: Getting Started__

![](../../images/CISC181-Week%20925.png)

There really isn't much more to it.  Bind decorators connect properties to elements.  If we change the property, the element changes (NOT THE OTHER WAY AROUND).

Event Decorators capture events from the web page allowing us to react to those events.  These are decorators like @Click(…)

We will cover some more advanced features next week, but these are the basics.

__Topic: Basic Web Development__  __WebEz__  __: Cheat Sheet__

__Event Decorators__

* General
  * @BindAttribute(id,attr,?trans)
  * @BindCSSClass(id,class,?trans)
  * @BindStyle(id,style,?trans)
  * @BindValue(id,?trans)
* Specialized
  * @BindValueToNumber(id,?append)
  * @BindCSSClassToBoolean(id,class)
  * @BindDisabledToBoolean(id)
  * @BindVisibleToBoolean(id)
  * @BindStyleToNumber(id,style,?append)
  * @BindStyleToNumberAppendPx(id,style)

* General
  * @GenericEvent(id,eventType) (e:Event)=>{}
  * @WindowEvent(eventType) (e:WindowEvent)=>{}
  * @Timer(milliseconds) (f:TimerCancelFunction)=>{}
* Specialized
  * @Blur(id) (e:Event)=>{}
  * @Change(id) (e:ValueEvent)=>{}
  * @Click(id) (e:MouseEvent)=>{}
  * @Input(id) (e:ValueEvent)=>{}

__Note: You can only use these on a class derived from __  __EzComponent__  __.  All classes created with the CLI will automatically subclass __  __EzComponent__  __.__

__Topic: Basic Web Development__  __WebEz__  __: Cheat Sheet__

* HTML References
  * Intro:  https://developer.mozilla.org/en-US/docs/Learn/Getting\_started\_with\_the\_web/HTML\_basics
  * Reference: [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
* CSS References
  * Intro: [https://developer.mozilla.org/en-US/docs/Learn/CSS/First\_steps/Getting\_started](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
  * Reference: [https://www.w3schools.com/cssref/index.php](https://www.w3schools.com/cssref/index.php)
* Playgrounds
  * [https://playcode.io/html](https://playcode.io/html)
  * [https://www.w3schools.com/tryit/](https://www.w3schools.com/tryit/)
  * [https://jsfiddle.net/](https://jsfiddle.net/)

__Topic: Basic Web Development__  __WebEz__  __: Coming Soon to a classroom near you.__

* Next week:
  * More advanced WebEz concepts
  * Getting events from child components
  * Popups and Dialogs
  * Timers
* And some parting advice:
  * This is not hard, but for many of you, it is brand new.  I highly suggest you go to one of those playground sites and get comfortable with html and css so you will be ready for the final project.  If you can make it look the way you want, then we can focus on the code.


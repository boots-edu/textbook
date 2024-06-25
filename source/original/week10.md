CISC 181\-INTRODUCTION TO COMPUTER SCIENCE II

# Week 10
Spring 2024

![](../../images/CISC181-Week%20100.png)

---


Poll Title: Do not modify the notes in this section to avoid tampering with the Poll Everywhere activity.
More info at polleverywhere.com/support

Are you here today?
https://www.polleverywhere.com/multiple_choice_polls/qhWRGVDkYpIXTpXRmR3E8?state=opened&flow=Default&onscreen=persist

__Topic: Advanced __  __WebEz__

* Last week we introduced the WebEz library which we intend to use for our final project.
* We learned how to:
  * Author html and css for individual components
  * Use various @Bind decorators to connect variables to elements on our page
    * Class property => html element
    * This can bind value, class, style, or general attribute
  * Use various @Event decorators to connect elements on our page to code within the class.
    * Html element => class method
    * This can be @Change, @Input, @Blur, @Click, or @GenericEvent
* Combining these, we can create deep interactive web applications:

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

__Topic: Advanced __  __WebEz__  __Dynamic components__

* So far, we have looked at well defined html documents where we know the number and type of elements that our page will contain when we build the application.
* Sometimes, we don't.
  * A task list (see WebEz\-Example in the WebEz Repository)
  * Point of sale (multiple items)
* We can dynamically add components to our page with addComponent.  So far we have only done this in the constructor, but that doesn't mean we can't do it elsewhere.
* Let's look at a simple data input screen for a point of sale system to see how this type of functionality works.

__Topic: Advanced __  __WebEz__  __Dynamic components__

* Let's start with some simple html
  * Some inputs that always appear
  * Some buttons that always appear
  * A counter that is always on the page.
  * A place to put our line items as we create them.

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"form\-container"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    Customer Name: </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"text"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">customerName</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#808080">/><</span>  <span style="color:#569CD6">br</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    Order Number: </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"text"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderNumber</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#808080">/></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"detail\-header"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        Order Details: </span>  <span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">addItemButton</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">New Item</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">button</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">addCommentButton</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">New Comment</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">button</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"counter"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">0</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D7BA7D">.detail\-header</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">font\-size</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">20px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">color</span>  <span style="color:#D4D4D4">: white;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">margin\-bottom</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">20px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">background\-color</span>  <span style="color:#D4D4D4">: black;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">10px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D7BA7D">\#counter</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">display</span>  <span style="color:#D4D4D4">: inline\-block;</span>

<span style="color:#D4D4D4">}</span>

We already know how to hook a lot of this up.  We will attach input events to the two inputs, click events to the two buttons, and bind the counter to a property of the class.

__Topic: Advanced __  __WebEz__  __Dynamic components__

* Here is the content of the MainComponent class.
  * Variables to hold values from html
  * Our bound counter
  * Input handlers for the two text boxes
  * Click handlers for the two buttons
    * Note: We still have to implement these.

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">orderNumber</span>  <span style="color:#D4D4D4">: string = </span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">customerName</span>  <span style="color:#D4D4D4">: string = </span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    @BindValueToNumber(</span>  <span style="color:#CE9178">"counter"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">" items in cart"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    count: number = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    @Input(</span>  <span style="color:#CE9178">"orderNumber"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onOrderNumberChange</span>  <span style="color:#D4D4D4">(e: </span>  <span style="color:#D4D4D4">ValueEvent</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.orderNumber</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">e.value</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    @Input(</span>  <span style="color:#CE9178">"customerName"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onCustomerNameChange</span>  <span style="color:#D4D4D4">(e: </span>  <span style="color:#D4D4D4">ValueEvent</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.customerName</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#D4D4D4">e.value</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"addItemButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewItemClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//Add the item here</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"addCommentButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewCommentClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#6A9955">        //Add the comment here</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __Dynamic components__

* So what do we do inside the click handlers?  Assume we have created components for one line item or one line comment already using the cli.
  * Create the correct type of child component (info or comment) and store it somewhere so we can reference it later.
  * Add it to our orderDetails div so they show up in order created where we want them.
  * Increment the counter if it's an item

<span style="color:#D4D4D4">    items: </span>  <span style="color:#D4D4D4">LineItemComponent</span>  <span style="color:#D4D4D4">\[\] = \[\];</span>

<span style="color:#D4D4D4">    comments: </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4">\[\] = \[\];</span>

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"addItemButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewItemClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> item = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineItemComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.items.push</span>  <span style="color:#D4D4D4">(item);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(item, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4">\+\+;</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"addCommentButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewCommentClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> comment = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.comments.push</span>  <span style="color:#D4D4D4">(comment);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(comment, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

Since counter is bound already, updating it updates the webpage automatically.

__Topic: Advanced __  __WebEz__  __Dynamic components__

![](../../images/CISC181-Week%20101.png)

This is what our website looks like when we run it.

If we type in the text boxes, our member variables are automatically updated.

* If the count property of the class is changed, the number of items in the cart will change.
* If we click on our buttons, our event handlers are called.
  * Those click handlers create a new component and add it to the orderDetails in the order they are created.

__Topic: Advanced __  __WebEz__  __Dynamic components__

![](../../images/CISC181-Week%20102.png)

* This is what our website looks like after we press new item twice, comment twice, then new item a third time.
  * Since the click handler updated count, the correct count is displayed.
  * The different types of line items are interspersed.
  * They are displayed in the page where we want them since we added them to the  _orderDetails_  element.

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

* If we implement our child components, they will contain some data.
  * For comment, likely just a text string.
  * For items, a quantity and description
* We know how to run code if an html element changes, but how do we do it if a component changes?
* We can create a public  _EventSubject_  member on the child class and  _subscribe_  to that event in the parent class.  That event can then be triggered in the child to notify the parent that something has changed.
* The contents of the subject can be anything we want from a value to a class to an array of either.

__Aside: Generics in Typescript__

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

* We will talk about generics in detail later, but we need a basic understanding in order to use EventSubject.
* EventSubject is a  _Generic Class_  in that we can change the internal type of the class by specifying what type of event object the EventSubject emits.
* First, let's look at the EventSubject class that we will be using:
  * It has a method next(data) that fires the event (usually called in the child component)
  * It has a method subscribe((data)=>void) that attaches a function to the event when it is called.
* What type of object is data?  Because EventSubject is  _Generic_  we get to choose.

__Aside: Generics in Typescript__

When we create a variable of type EventSubject we can supply a type parameter to tell us what type of object EventSubject emits.

The first line creates an EventSubject that does not emit data, just a notification.

The second line creates an EventSubject that emits a number.

The third line creates an EventSubject that emits a string.

The fourth line creates an EventSubject that emits an instance of a custom class

The fifth line creates an EventSubject that emits an array of strings.

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">event:EventSubject</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    event2:EventSubject\<number> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<number>();</span>

<span style="color:#D4D4D4">    event3:EventSubject\<string> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string>();</span>

<span style="color:#D4D4D4">    event4:EventSubject<</span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4"><</span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">>();</span>

<span style="color:#D4D4D4">    event5:EventSubject\<string\[\]> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string\[\]>();</span>

__Aside: Generics in Typescript__

The <> syntax is used to specify one or more  _type parameters _ that alter the class internally to support that type. _ _

The type parameter specifies the type expected for the next method.  Using the wrong type will be an error.

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">event:EventSubject</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    event2:EventSubject\<number> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<number>();</span>

<span style="color:#D4D4D4">    event3:EventSubject\<string> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string>();</span>

<span style="color:#D4D4D4">    event4:EventSubject<</span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4"><</span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">>();</span>

<span style="color:#D4D4D4">    event5:EventSubject\<string\[\]> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string\[\]>();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.event.next</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.event2.next(</span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.event3.next(</span>  <span style="color:#CE9178">"hello"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.event4.next(</span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">SomeClass</span>  <span style="color:#D4D4D4">());</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.event5.next(\[</span>  <span style="color:#CE9178">"hello"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">eventsubject</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"world"</span>  <span style="color:#D4D4D4">\]);</span>

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

Let's look at these two methods

We call next to ask the EventSubject to emit our data (call any subscribed methods).

We pass it the data we want to emit which must be of the type specified in the type parameter we used to create the property.

Calling this repeatedly will repeatedly call the subscribed methods.  In other words it is subscriptions last until they are  _unsubscribed._

next(data:T):void

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

Let's look at these two methods

When the child calls next, the method passed in the first parameter is called.  When the error method of the EventSubject is called, the function in the second parameter is called.

subscribe((data:T)=>void,?(err:Error)=>void)

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

* In the parent, we can call subscribe to attach an  _anonymous function _ that will run each time the child calls next and optionally, another to hand when the child calls error.
* event2.next(4) called in the child would print 5 from the parent.
* Event2.error(new Error("Bad stuff")) would print the error object as an error from the parent.
  * Note: This second parameter is optional if you don't want error notifications.

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.event2.subscribe(</span>

<span style="color:#D4D4D4">            (value: number) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                console.log(value \+ </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">            },</span>

<span style="color:#D4D4D4">            (err: Error) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#D4D4D4">console.error</span>  <span style="color:#D4D4D4">(err);</span>

<span style="color:#D4D4D4">            },</span>

<span style="color:#D4D4D4">        );</span>

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

Let's apply this to our LineCommentComponent.  First we need to define it:

Keeping it simple, we are just gettingthe input event from the text input box and calling a method.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(html, </span>  <span style="color:#D4D4D4">css</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    @Input(</span>  <span style="color:#CE9178">"comment"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onItemInputChange</span>  <span style="color:#D4D4D4">(e: </span>  <span style="color:#D4D4D4">ValueEvent</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//emit the value to parent</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D7BA7D">.line\-comment</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">border\-bottom</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">1px</span>  <span style="color:#D4D4D4"> solid black;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">padding</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">10px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"line\-comment"</span>  <span style="color:#808080">></span>

<span style="color:#808080">  </span>  <span style="color:#D4D4D4">Comment: </span>

<span style="color:#D4D4D4">  </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">input</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"comment"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">type</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"text"</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#808080">/></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

Now let's add an EventSubject that emits a string:

And that's it, our child class snow emits to its subscriptions whenever the user types and this will happen for  _each_  line comment we create.

We would do something similar for each of the fields in a line item.

The public property commentChange is of type EventSubject and emits a string.

The method now calls  _next_  with the new value.

<span style="color:#569CD6">export</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">class</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#569CD6">extends</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EzComponent</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">commentChange</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">EventSubject</span>  <span style="color:#D4D4D4">\<string>();</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(html, </span>  <span style="color:#D4D4D4">css</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    @Input(</span>  <span style="color:#CE9178">"comment"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onItemInputChange</span>  <span style="color:#D4D4D4">(e: </span>  <span style="color:#D4D4D4">ValueEvent</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#569CD6">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentChange.next</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#D4D4D4">e.value</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">}</span>

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

Back in our parent class, let's subscribe to that event when we create the child so that we are notified about changes to each comment.

Since we never threw an error, we did not bother with a method to handle the error.  Now each time the user types in any of the input boxes for comments, the value will be logged by the parent.

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"addCommentButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewCommentClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> comment = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.comments.push</span>  <span style="color:#D4D4D4">(comment);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(comment, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">comment.commentChange.subscribe</span>  <span style="color:#D4D4D4">((</span>  <span style="color:#D4D4D4">comment:string</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            console.log(comment);</span>

<span style="color:#D4D4D4">        });</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//Add the comment here</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

Now that we have the value in the parent, we can store it.  Let's create an array to hold comments and a counter to keep track of how many we have.

Now we can push a new empty string onto our new array when we create the comment and update it in our subscribe callback.

Now at any point, commentTextin the parent contains the currentvalue of all the comment children.

<span style="color:#D4D4D4">commentText:string</span>  <span style="color:#D4D4D4">\[\]=\[\];</span>

<span style="color:#D4D4D4">commentCount:number</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;    </span>

<span style="color:#D4D4D4">@Click(</span>  <span style="color:#CE9178">"addCommentButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewCommentClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> comment = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.comments.push</span>  <span style="color:#D4D4D4">(comment);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText.push</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(comment, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> index = </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentCount</span>  <span style="color:#D4D4D4">\+\+;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">comment.commentChange.subscribe</span>  <span style="color:#D4D4D4">((comment: string) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText</span>  <span style="color:#D4D4D4">\[index\] = comment;</span>

<span style="color:#D4D4D4">            console.log(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        });</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __EventSubject__  __: Passing events between components.__

We could do something similar for our line items and store them in an array itemList

If we added a save button in the parent, we would have the commentText and itemList which we could save in any way we want.

As we type in the child component, it catches the Input event and emits the current value through the EventSubject of each line item.

Each time the EventSubject emits a value, we update the appropriate element in our value array.

Now we don't even need to think about what is going on in the child in order to get the values from them.

We could do this by querying each child component for its value when we need it, but this is a much nicer solution and gives us real time updates in the parent class.

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

* Sometimes we want to create an overlay window that sits on top of our page, prevents us from clicking elsewhere on our page, and has its own content and behaviors.
* WebEz provides two methods for doing this:
  * Popup: Creates a popup window with a title, some text, and buttons that returns the text on the button through an EventSubject
  * Dialog: Creates a popup window whose content is determined by a component.  These can be created with the cli (webez dialog my\-dialog).

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

The popup window is provided as an easy way to interact with your user for a quick message or question.  This is similar to the javascript alert/confirm methods, but looks a lot better and is more flexible.

To show a popup we simply call the popup method of the EzDialog class.  This is a static method (means it does not exist on an instance of EzDialog but rather can be called directly on the type).

We can call this method to show a dialog box:

Popup returns an EventSubject\<string> which emits the text of the button pressed.

We can subscribe to the returned value to be notified when the popup closed.

__EzDialog.popup__  __(__  __attachTo__  __: __  __EzComponent__  __, message: string, title?: string, __  __    buttons?: string\[\], __  __btnClass__  __?: string):__  __EventSubject__  __\<string>__

<span style="color:#D4D4D4">EzDialog.popup</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"Hello</span>  <span style="color:#CE9178"> </span>  <span style="color:#CE9178">World"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"I</span>  <span style="color:#CE9178"> am the title"</span>  <span style="color:#D4D4D4">,\[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">Yes"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"No</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\],</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">btnClass</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

__EzDialog.popup__  __(__  __attachTo__  __: __  __EzComponent__  __, message: string, title?: string, __  __    buttons?: string\[\], __  __btnClass__  __?: string):__  __EventSubject__  __\<string>__

* Let's examine this in detail:
  * attachTo (required): is the component that you want to attach the element to.  Usually you will pass in  _this_  to specify the current component.
  * Message (required): The text inside the popup
  * Title (optional): The title for your popup, displayed at the top.
  * buttons (optional): An array of strings that are the labels of the buttons that you want to display.
  * btnClass(optional): An optional css class string to style the buttons.
  * Returns: An event subject that emits the label of the pressed button.
* Pressing a button, closes the popup.

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

Here we have added a popup with the default title "Alert" and the default buttons \["Ok"\].

We have not subscribed since I do not need notification of when the window closes, and there is only one button the user could have clicked.

We could have subscribed if I needed to know that the popup was closed.

<span style="color:#D4D4D4">@Click(</span>  <span style="color:#CE9178">"addCommentButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewCommentClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        const comment = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">this.comments.push</span>  <span style="color:#D4D4D4">(comment);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">this.commentText.push</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">this.addComponent</span>  <span style="color:#D4D4D4">(comment, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        let index = </span>  <span style="color:#D4D4D4">this.commentCount</span>  <span style="color:#D4D4D4">\+\+;</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">comment.commentChange.subscribe</span>  <span style="color:#D4D4D4">((comment: string) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText</span>  <span style="color:#D4D4D4">\[index\] = comment;</span>

<span style="color:#D4D4D4">            console.log(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        });</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">EzDialog.popup</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"Item</span>  <span style="color:#CE9178"> added."</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

Notice how the popup greys out the underlying website.  You cannot click buttons or enter text while the popup is open.

Once it is closed, the gray background goes away and the rest of the page will again accept input.

With this screen, the only thing I can do is click ok.

![](../../images/CISC181-Week%20103.png)

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

Here I have added a popup to ask the user if they are sure before adding the item, and then only adding it if they click the "Yes" button.

We subscribe to the EventSubject returned by the popup method to see when the window closes and which button was pressed.

<span style="color:#D4D4D4">    @Click(</span>  <span style="color:#CE9178">"addCommentButton"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#D4D4D4">onNewCommentClick</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#D4D4D4">EzDialog.popup</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"Are you sure?"</span>  <span style="color:#D4D4D4">, </span>  <span style="color:#CE9178">"Add new item"</span>  <span style="color:#D4D4D4">,\[</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">Yes"</span>  <span style="color:#D4D4D4">,</span>  <span style="color:#CE9178">"No</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">\],</span>

<span style="color:#D4D4D4">        ).subscribe((result: string) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">            </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (result == </span>  <span style="color:#CE9178">"Yes"</span>  <span style="color:#D4D4D4">) {</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">const</span>  <span style="color:#D4D4D4"> comment = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">LineCommentComponent</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.comments.push</span>  <span style="color:#D4D4D4">(comment);</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText.push</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(comment, </span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">orderDetails</span>  <span style="color:#CE9178">"</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#569CD6">let</span>  <span style="color:#D4D4D4"> index = </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentCount</span>  <span style="color:#D4D4D4">\+\+;</span>

<span style="color:#D4D4D4">                </span>  <span style="color:#D4D4D4">comment.commentChange.subscribe</span>  <span style="color:#D4D4D4">((comment: string) </span>  <span style="color:#569CD6">=></span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">                    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText</span>  <span style="color:#D4D4D4">\[index\] = comment;</span>

<span style="color:#D4D4D4">                    console.log(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.commentText</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">                });</span>

<span style="color:#D4D4D4">            }</span>

<span style="color:#D4D4D4">        });</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

![](../../images/CISC181-Week%20104.png)

You can see the two buttons displayed as we requested.

Clicking No will emit "No" which will cause our method to ignore the click.

Clicking Yes will emit "Yes" which will cause our method to add the component.

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

Dialogs work similarly, except they do not have a pre\-defined structure.  You can create them as a component where you control the layout and any EventSubjects you want to implement.

Creating a new dialog is as simple as:

Like webez component, this creates a new component, but it will behave and look like a popup window, only its content will be your new component.

The default implementation is a simple popup with an ok button that closes when the user clicks it.  We can close a window by calling the member method this.show(true/false).

We add it just like any component using addComponent, then display it by calling show(true).

<span style="color:#D4D4D4">Webez</span>  <span style="color:#D4D4D4"> dialog </span>  <span style="color:#D4D4D4">myDialog</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

* First we need to create a variable to hold our dialog:
* We can then hide it and add it to the component:
  * Note, if you want it to display immediately, then you can call show with true _this.dialog.show_  _(true);_
* Whenever we want to show the dialog, we just pass true to it's show method
* If we want to get an event to subscribe to when the window is closed, or something happens in the dialog, we can implement our on EventSubjects and subscribe to them in the parent.

<span style="color:#D4D4D4">    dialog: </span>  <span style="color:#D4D4D4">MyDialog</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">MyDialog</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">constructor</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">super</span>  <span style="color:#D4D4D4">(html, </span>  <span style="color:#D4D4D4">css</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.dialog</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">    }</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.dialog.show</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">);</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

* Example: A simple please wait dialog with no buttons.
  * To make this simple, I am just going to use text, but you could use an animated gif or do some css magic to add some movement to this dialog (we will do that in a few minutes with a timer).
  * First we will create a new dialog with the cli:
  * For the body of our dialog, we will just center a string that says "Please Wait…"

<span style="color:#D4D4D4">webez</span>  <span style="color:#D4D4D4"> dialog </span>  <span style="color:#D4D4D4">PleaseWait</span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"content"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"body"</span>  <span style="color:#808080">></span>  <span style="color:#D4D4D4">Please Wait...</span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D7BA7D">.content</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">width</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">600px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

<span style="color:#D7BA7D">.body</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">text\-align</span>  <span style="color:#D4D4D4">: center;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">font\-size</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">40px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">line\-height</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">100px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">}</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

* Example: A simple please wait dialog with no buttons.
  * In the parent, we can create a property for our dialogand add it to the component.
  * When we want the dialog we can simply display it while some time consuming task is occurring, then hide it after.

<span style="color:#D4D4D4">plsWait</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">PleaseWaitDialog</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">PleaseWaitDialog</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.plsWait</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.plsWait.show</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//do something that takes a while</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.plsWait.show</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">);</span>

__Topic: Advanced __  __WebEz__  __Dialogs and Popups__

![](../../images/CISC181-Week%20105.png)

Here you can see the output aftera call to plsWait.show(true).

Just like the popup, the rest of thewebsite is grayed out and cannotbe interacted with.

<span style="color:#D4D4D4">plsWait</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#D4D4D4">PleaseWaitDialog</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">new</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">PleaseWaitDialog</span>  <span style="color:#D4D4D4">();</span>

<span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.addComponent</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.plsWait</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.plsWait.show</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">true</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#6A9955">//do something that takes a while</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.plsWait.show</span>  <span style="color:#D4D4D4">(</span>  <span style="color:#569CD6">false</span>  <span style="color:#D4D4D4">);</span>

__Topic: Advanced __  __WebEz__  __Timers__

![](../../images/CISC181-Week%20106.jpg)

* Sometimes we want to do something periodically while our site is displayed
  * Update a timer
  * Refresh data from a backend
  * Move a game element
  * Animation
  * Anything else we want to accomplish on an interval.
* This can be useful to provide more interactivity to your site.

__Topic: Advanced __  __WebEz__  __Timers__

Returning to our PleaseWait dialog, we can use a timer to make it more interesting.

First, we will bind a variable to the text we are displaying:

We will modify the html and add a div with the id displayDots.

And style it so that it has a fixed width and will appear inline after the words Please Wait.

The plan is to change displayDots to contain 1, 2, or 3 dots and change it once a second.

<span style="color:#D4D4D4">@BindValue(</span>  <span style="color:#CE9178">"displayDots"</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#D4D4D4">displayDots</span>  <span style="color:#D4D4D4">: string = </span>  <span style="color:#CE9178">""</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"content"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">class</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"body"</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">        Please Wait</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#808080"><</span>  <span style="color:#569CD6">div</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#9CDCFE">id</span>  <span style="color:#D4D4D4">=</span>  <span style="color:#CE9178">"</span>  <span style="color:#CE9178">displayDots</span>  <span style="color:#CE9178">"</span>  <span style="color:#808080">></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D4D4D4">    </span>  <span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#808080"></</span>  <span style="color:#569CD6">div</span>  <span style="color:#808080">></span>

<span style="color:#D7BA7D">\#displayDots</span>  <span style="color:#D4D4D4"> {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">width</span>  <span style="color:#D4D4D4">: </span>  <span style="color:#B5CEA8">50px</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">display</span>  <span style="color:#D4D4D4">: inline\-block;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#9CDCFE">text\-align</span>  <span style="color:#D4D4D4">: left;</span>

<span style="color:#D4D4D4">}</span>

__Topic: Advanced __  __WebEz__  __Timers__

* To implement the behavior, we will use the @Timer decorator to decorate a function hat we want called periodically.
  * Passing 1000 to the timer methodcauses onTimer to be called once asecond while the page is displayed(forever: more on this later).
  * Each time it is called, we check a counter that will keep track of how many dots aredisplayed.  When we get to 3, we set it back to 0.  Otherwise, we draw the correctnumber of dots (count\+1 because count goes from 0\-2) by updating our displayDots property which is bound to the page.
  * We will see something like …

<span style="color:#D4D4D4">@Timer(</span>  <span style="color:#B5CEA8">1000</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">onTimer</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.displayDots</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#CE9178">"."</span>  <span style="color:#D4D4D4">.repeat(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __Timers__

* To implement the behavior, we will use the @Timer decorator to decorate a function hat we want called periodically.
  * Passing 1000 to the timer methodcauses onTimer to be called once asecond while the page is displayed(forever: more on this later).
  * Each time it is called, we check a counter that will keep track of how many dots aredisplayed.  When we get to 3, we set it back to 0.  Otherwise, we draw the correctnumber of dots (count\+1 because count goes from 0\-2) by updating our displayDots property which is bound to the page.
  * We will see something like …

<span style="color:#D4D4D4">@Timer(</span>  <span style="color:#B5CEA8">1000</span>  <span style="color:#D4D4D4">)</span>

<span style="color:#569CD6">private</span>  <span style="color:#D4D4D4"> </span>  <span style="color:#D4D4D4">onTimer</span>  <span style="color:#D4D4D4">() {</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">if</span>  <span style="color:#D4D4D4"> (</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> === </span>  <span style="color:#B5CEA8">3</span>  <span style="color:#D4D4D4">) </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#B5CEA8">0</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.displayDots</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#CE9178">"."</span>  <span style="color:#D4D4D4">.repeat(</span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">);</span>

<span style="color:#D4D4D4">        </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> = </span>  <span style="color:#569CD6">this</span>  <span style="color:#D4D4D4">.count</span>  <span style="color:#D4D4D4"> \+ </span>  <span style="color:#B5CEA8">1</span>  <span style="color:#D4D4D4">;</span>

<span style="color:#D4D4D4">    }</span>

__Topic: Advanced __  __WebEz__  __Timers__

![](../../images/CISC181-Week%20107.gif)


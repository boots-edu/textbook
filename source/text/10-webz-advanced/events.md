---
layout: default
title: Webz Events
nav_order: 10.2
parent: Advanced Webz
---

# Webz Events

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

We can pass events between components so that our components can communicate.

## Component Hierarchy

We can view the component hierarchy as a tree where MainComponent is the root. Each time MainComponent creates a new component, it is a _child_ of MainComponent. Those children can themselves create and attach new components. What we are left with is a heirarchy of components related to each other as _parent_ and _child_

## Talking to our children

Talking to our children is easy. We created them, so we probably have (or at least we should have) a reference to them. Through this reference we can modify public properties and call public methods on the child. In this way we can communicate important information (that something has changed or some action is required) to the child. For deeper heirarchies, we can have each parent notify its child down the heirarchy until the child we wish to notify is reached.

## Talking to our parents

Unlike communicating with children, a child likely does not have a reference to the parent object. This means we need a mechanism for a child to send inforamtion to its parent that some event has occurred.

### The Webz Notifier

We can create a public Notifier member on the child class and subscribe to that event in the parent class. That event can then be triggered in the child to notify the parent that something has changed. The contents of the Notifier can be anything we want from a value to a class to an array of either.

We will talk about generics in detail later, but we need a basic understanding in order to use Notifier.
Notifier is a Generic Class in that we can change the internal type of the class by specifying what type of event object the Notifier emits.
First, let's look at the Notifier class that we will be using:

-   It has a method notify(data) that fires the event (usually called in the child component)
-   It has a method subscribe((data)=>void) that attaches a function to the event when it is called.

What type of object is data? Because Notifier is Generic we get to choose.
When we create a variable of type Notifier we can supply a type parameter to tell us what type of object Notifier emits.

{: .no-run }

```typescript
event: Notifier = new Notifier();
event2: Notifier<number> = new Notifier<number>();
event3: Notifier<string> = new Notifier<string>();
event4: Notifier<SomeClass> = new Notifier<SomeClass>();
event5: Notifier<string[]> = new Notifier<string[]>();
```

-   The first line creates an Notifier that does not emit data, just a notification.
-   The second line creates an Notifier that emits a number.
-   The third line creates an Notifier that emits a string.
-   The fourth line creates an Notifier that emits an instance of a custom class
-   The fifth line creates an Notifier that emits an array of strings.

The <> syntax is used to specify one or more **type parameters** that alter the class internally to support that type.

Now we can pass that type of data to the notify method.
The type parameter specifies the type expected for the notify method. Using the wrong type will be an error.

{: .no-run }

```typescript
this.event.notify();
this.event2.notify(1);
this.event3.notify("hello");
this.event4.notify(new SomeClass());
this.event5.notify(["hello", "notifier", "world"]);
```

Let's look at the two methods we will be using (there are others, but we don't need them yet).

**`notify(data:T):void`**

We call notify to ask the Notifier to emit our data (call any subscribed methods).
We pass it the data we want to emit which must be of the type specified in the type parameter we used to create the property.
Calling this repeatedly will repeatedly call the subscribed methods. In other words, the subscriptions last until they are unsubscribed.

`subscribe((data:T)=>void, ?(err:Error)=>void)`

When the child calls `notify(...)`, the method passed in the first parameter is called. When the `error(...)` method of the Notifier is called, the function in the second parameter is called. The second parameter is optional.

In the parent, we can call subscribe to attach an anonymous function that will run each time the child calls `notify(...)` and optionally, another to hand when the child calls `error(...)`.

{: .no-run }

```typescript
this.event2.subscribe(
    (value: number) => {
        console.log(value + 1);
    },
    (err: Error) => {
        console.error(err);
    }
);
```

-   `this.event2.notify(4)` called in the child would print 5 from the parent.
-   `this.event2.error(new Error("Bad stuff"))` would print the error object as an error from the parent.

> Note: This second parameter is optional if you don't want error notifications.

Let's apply this to our LineCommentComponent from the previous section. First we need to define it:

{: .no-run }

```html
<div class="line-comment">
    Comment:
    <input id="comment" type="text" />
</div>
```

{: .no-run }

```css
.line-comment {
    border-bottom: 1px solid black;
    padding: 10px;
}
```

{: .no-run }

```typescript
export class LineCommentComponent extends WebzComponent {
    constructor() {
        super(html, css);
    }
    @Input("comment")
    onItemInputChange(e: ValueEvent) {
        //emit the value to parent
    }
}
```

Keeping it simple, we are just getting the input event from the text input box and calling a method (onItemInputChange).

Now we can add our Notifier to the class and use it to notify when the text changes:

{: .no-run }

```typescript
export class LineCommentComponent extends WebzComponent {
    commentChange: Notifier<string> = new Notifier<string>();

    constructor() {
        super(html, css);
    }

    @Input("comment")
    onItemInputChange(e: ValueEvent) {
        this.commentChange.notify(e.value);
    }
}
```

-   The public property commentChange is of type `Notifier` and emits a string.
-   The method now calls `notify` with the new value.

And that's it, our child class now emits to its subscriptions whenever the user types and this will happen for each line comment we create.
We could do something similar for each of the fields in a line item.

Now we have to subscribe to the event in the parent. We can do this when we create the child so that we will be notified about changes to each comment.  The following code would appear in ```MainComponent```.

{: .no-run }

```typescript
@Click("addCommentButton")
onNewCommentClick() {
	const comment = new LineCommentComponent();
	this.comments.push(comment);
	this.addComponent(comment, "orderDetails");
	comment.commentChange.subscribe((comment:string) => {
        //Store the comment here
		console.log(comment);
	});
}
```

Since we never threw an error, we did not bother with a method to handle the error. Now each time the user types in any of the input boxes for comments, the value will be logged by the parent. Of course so far, we are just looging the comment. Let's create an array and counter to store the comments and update them when they change.

{: .no-run }

```typescript
private commentText:string[]=[];
private commentCount:number=0;

@Click("addCommentButton")
	onNewCommentClick() {
		const comment = new LineCommentComponent();
		this.comments.push(comment);
		this.commentText.push("");
		this.addComponent(comment, "orderDetails");
		let index = this.commentCount++;
		comment.commentChange.subscribe((comment: string) => {
			this.commentText[index] = comment;
			console.log(this.commentText);
		});
	}
```

Now we can push a new empty string onto our new array when we create the comment and update it in our subscribe callback.
Now at any point, commentText in the parent contains the current value of all the comment children.

We could do something similar for our line items and store them in an array itemList.
If we added a save button in the parent, we would have the commentText and itemList which we could save in any way we want.
As we type in the child component, it catches the Input event and emits the current value through the Notifier of each line item.
Each time the Notifier emits a value, we update the appropriate element in our value array.
Now we don't even need to think about what is going on in the child in order to get the values from them.
We could do this by querying each child component for its value when we need it, but this is a much nicer solution and gives us real time updates in the parent class.

### How Does Notifier Work?

Notifier is a simple class that holds a list of functions that are called when the notify method is called. The subscribe method adds a function to the list. The notify method calls each function in the list with the data passed to notify. The data is of the type specified in the type parameter of the Notifier.

{: .no-run }

```typescript
type Subscriber<InputType> = (data: InputType) => void;

export class Notifier<T> {
    private subscriptions: Subscriber<T>[] = [];

    notify(data: T): void {
        for (let aFunction of this.subscriptions) {
            aFunction(data);
        }
    }

    subscribe(subscription: Subscriber<T>) {
        this.subscriptions.push(subscription);
    }
}
```
## Working Example
Here we pull all of the code for our event notifier together so that you can work with it and see it in action.

{:data-filename="main.component.ts"}

```typescript
import html from "./main.component.html";
import css from "./main.component.css";
import {BindValueToNumber, Click, Input, ValueEvent, WebzComponent} from "@boots-edu/webz";
import { LineItemComponent } from "./LineItem.component";
import { LineCommentComponent } from "./LineComment.component";

export class MainComponent extends WebzComponent {
    constructor() {
        super(html, css);
    }

    private commentText: string[] = [];
    private commentCount: number = 0;

    orderNumber: string = "";
    customerName: string = "";

    @BindValueToNumber("counter", " items in cart")
    count: number = 0;

    //Arrays added to hold custom components.  Initially empty.
    items: LineItemComponent[] = [];
    comments: LineCommentComponent[] = [];

    @Input("orderNumber")
    onOrderNumberChange(e: ValueEvent) {
        this.orderNumber = e.value;
    }

    @Input("customerName")
    onCustomerNameChange(e: ValueEvent) {
        this.customerName = e.value;
    }

    @Click("addItemButton")
    onNewItemClick() {
        const item = new LineItemComponent();
        this.items.push(item);
        this.addComponent(item, "orderDetails");
        this.count++;
    }
    @Click("addCommentButton")
    onNewCommentClick() {
        const comment = new LineCommentComponent();
        this.comments.push(comment);
        this.commentText.push("");
        this.addComponent(comment, "orderDetails");
        let index = this.commentCount++;
        comment.commentChange.subscribe((comment: string) => {
            this.commentText[index] = comment;
            console.log(this.commentText);
        });
    }
}
```


{:data-filename="main.component.html"}

```html
<div class="form-container">
    Customer Name: <input type="text" id="customerName" /><br /><br />
    Order Number: <input type="text" id="orderNumber" /><br /><br />
    <div class="detail-header">
        Order Details: <br />
        <button id="addItemButton">New Item</button>
        <button id="addCommentButton">New Comment</button>
        <div id="counter">0</div>
    </div>
    <div id="orderDetails"></div>
</div>
```

{:data-filename="main.component.css"}

```css
.detail-header {
    font-size: 20px;
    color: white;
    margin-bottom: 20px;
    background-color: black;
    padding: 10px;
}
#counter {
    display: inline-block;
}
```

{:data-filename="LineItem.component.html"}

```html
<p>LineItem Component</p>
```

{:data-filename="LineItem.component.ts"}

```typescript
import { WebzComponent } from "@boots-edu/webz";
import html from "./LineItem.component.html";

export class LineItemComponent extends WebzComponent {
    constructor() {
        super(html, "");
    }
}
```

{:data-filename="LineComment.component.html"}

```html
<div class="line-comment">
    Comment:
    <input id="comment" type="text" />
</div>
```

{:data-filename="LineComment.component.css"}

```css
.line-comment {
    border-bottom: 1px solid black;
    padding: 10px;
}
```

{:data-filename="LineComment.component.ts"}

```typescript
import { Input, Notifier, ValueEvent, WebzComponent } from "@boots-edu/webz";
import html from "./LineComment.component.html";

export class LineCommentComponent extends WebzComponent {
    commentChange: Notifier<string> = new Notifier<string>();
    
    constructor() {
        super(html, "");
    }
     @Input("comment")
    onItemInputChange(e: ValueEvent) {
        this.commentChange.notify(e.value);
    }
}
```

## Summary

Passing information between components is critical to developing web applications. Passing information is simple from parent to child because the parent created the child and thus has a reference to it. Passing information from child to parent can be accomplished in Webz using the **_notifier_** class. A child calls the `notify(...)` method, and the parent can subscribe to that Notifier.

# Next Step

Next we'll learn about dialogs and popups [Webz Dialogs &raquo;](../10-webz-advanced/dialogs.md)

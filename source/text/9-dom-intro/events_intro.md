---
layout: default
title: Events and EventTarget
nav_order: 9.4
parent: The Browser DOM
---

# Events and EventTarget

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

Browser programs become interactive by listening for events on objects that implement the `EventTarget` interface.

## What is an event?

An event is an object representing something that happened.

-   the user clicked the mouse
-   the user pressed a key
-   the value in an input changed
-   a custom notification was dispatched by our own code

The browser packages that occurrence into an event object and sends it to any listeners that are interested.

## `Event` and its subclasses

Just as the DOM has a class hierarchy for nodes, the browser also has a hierarchy for events.

-   `Event`
    -   `UIEvent`
        -   `MouseEvent`
        -   `KeyboardEvent`
        -   `InputEvent`
    -   `CustomEvent`

These subclasses carry specialized information.

-   A `MouseEvent` knows things such as mouse coordinates and which button was pressed.
-   A `KeyboardEvent` knows which key the user typed.
-   A `CustomEvent` can carry data that our own program defines.

## `EventTarget`

Many browser objects can receive events. The common interface for that is `EventTarget`.

DOM nodes implement `EventTarget`, which is why you can write code like this:

{:.no-run}

```typescript
const button = document.querySelector("#count-button");
button?.addEventListener("click", () => {
    console.log("The button was clicked.");
});
```

The method `addEventListener` takes two important pieces of information:

-   the event name, such as `"click"`
-   a function to call when that event occurs

That second parameter is exactly the kind of higher-order function usage we studied earlier. The browser stores our callback and calls it later.

## A click counter example

Here is a complete small example using only browser APIs.

{:.no-run}

```html
<button id="count-button">Click me</button>
<p id="count-output">Count: 0</p>
```

{:.no-run}

```typescript
let count: number = 0;

const button = document.querySelector("#count-button");
const output = document.querySelector("#count-output");

if (button !== null && output !== null) {
    button.addEventListener("click", () => {
        count++;
        output.textContent = `Count: ${count}`;
    });
}
```

This example looks simple, but it combines several big ideas:

-   querying the DOM
-   storing program state in a variable
-   passing an anonymous function as a callback
-   updating the page when the event occurs

## Using the event object itself

Sometimes we want information from the event.

{:.no-run}

```typescript
document.addEventListener("keydown", (event: KeyboardEvent) => {
    console.log(`You pressed ${event.key}`);
});
```

Or with a mouse event:

{:.no-run}

```typescript
document.addEventListener("click", (event: MouseEvent) => {
    console.log(event.clientX, event.clientY);
});
```

In both cases, the object passed to our callback contains extra information provided by the event subclass.

## Removing a listener

Event listeners persist until the page is unloaded or we remove them. This means we sometimes want to keep a reference to the function we attached.

{:.no-run}

```typescript
const button = document.querySelector("#count-button");

const onClick = () => {
    console.log("clicked");
};

button?.addEventListener("click", onClick);
button?.removeEventListener("click", onClick);
```

This is a good example of functions being first-class values. The same function value is first passed into `addEventListener`, then later passed into `removeEventListener`.

## Events are not only for DOM nodes

One of the most interesting facts about browser programming is that `EventTarget` is broader than the DOM node hierarchy. Other browser APIs also implement it. Later in the next chapter we will see this idea appear again in places such as audio APIs and custom events.

## Summary

Browser interactivity is built around event objects and event listeners. The `Event` hierarchy gives different kinds of events specialized data, while `EventTarget` gives many browser objects the shared ability to register listeners. This makes the browser event system another strong example of object-oriented design.

# Next Step

Next we'll build on these ideas with more advanced browser features: [Advanced Browser APIs &raquo;](../10-dom-advanced/index.md)

---
layout: default
title: Accessing and Modifying DOM Elements
nav_order: 9.3
parent: The Browser DOM
---

# Accessing and Modifying DOM Elements

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

Browser programs become interactive when TypeScript finds DOM objects, reads their state, and changes them.

## Finding elements on the page

The browser exposes several useful methods for locating elements in the current document.

-   `document.getElementById(id)` finds one element by id.
-   `document.querySelector(selector)` finds the first element matching a CSS selector.
-   `document.querySelectorAll(selector)` finds all matching elements.

These methods are useful because most browser programs begin with the same question: “Which object on the page do I want to work with?”

{:.no-run}

```typescript
const title = document.getElementById("page-title");
const addButton = document.querySelector("#add-button");
const tasks = document.querySelectorAll(".task");
```

The last line returns many elements rather than one. The browser gives those results as a `NodeList`, which behaves a lot like an array of nodes.

## Reading and writing content

Once we have an element, we can often change its content or attributes.

### `textContent`

`textContent` is the safest and most direct way to read or write plain text.

{:.no-run}

```typescript
const status = document.getElementById("status");
if (status !== null) {
    status.textContent = "Ready";
}
```

### `innerHTML`

`innerHTML` lets us replace the inside of an element with HTML text.

{:.no-run}

```typescript
const box = document.getElementById("message-box");
if (box !== null) {
    box.innerHTML = "<strong>Saved!</strong>";
}
```

This can be convenient, but it is also more powerful and therefore easier to misuse. If your goal is plain text, prefer `textContent`.

## Changing appearance from code

TypeScript can also change how elements look.

### Direct style changes

{:.no-run}

```typescript
const panel = document.getElementById("panel");
if (panel !== null) {
    panel.style.backgroundColor = "lavender";
    panel.style.border = "2px solid navy";
}
```

### CSS classes with `classList`

Often it is cleaner to toggle CSS classes than to set many individual style properties.

{:.no-run}

```typescript
const panel = document.getElementById("panel");
if (panel !== null) {
    panel.classList.add("highlighted");
    panel.classList.remove("hidden");
}
```

This approach keeps most appearance rules in CSS where they are easier to reuse.

## Creating elements dynamically

Pages become much more interesting when we create elements while the program runs.

{:.no-run}

```typescript
const list = document.getElementById("task-list");
if (list !== null) {
    const item = document.createElement("li");
    item.textContent = "Review the DOM tree chapter";
    list.appendChild(item);
}
```

Notice the pattern:

1. Create an element object.
2. Configure it.
3. Insert it into the document tree.

We can also attach more than one item at once with `append`.

{:.no-run}

```typescript
const list = document.getElementById("task-list");
if (list !== null) {
    const first = document.createElement("li");
    const second = document.createElement("li");
    first.textContent = "Practice querySelector";
    second.textContent = "Practice classList";
    list.append(first, second);
}
```

## Example: rendering data from an array

Suppose we have a list of course topics and want to display them as cards.

{:.no-run}

```typescript
const topics: string[] = [
    "Classes",
    "Inheritance",
    "Polymorphism",
    "Browser DOM",
];

const container = document.getElementById("topics");
if (container !== null) {
    for (const topic of topics) {
        const card = document.createElement("div");
        card.classList.add("topic-card");
        card.textContent = topic;
        container.appendChild(card);
    }
}
```

This is a very natural first browser application. We start with program data, create element objects, and attach them to the page. That idea scales surprisingly far.

## Built-in elements are still objects

Even though we usually create DOM elements with `document.createElement` instead of `new`, those elements still behave like normal objects.

They have:

-   types such as `HTMLButtonElement`
-   properties such as `textContent`, `disabled`, and `value`
-   methods such as `append`, `remove`, and `setAttribute`

In other words, the DOM is not a break from object-oriented programming. It is an excellent example of it.

## Summary

Browser code usually works by locating DOM objects with methods such as `getElementById` or `querySelector`, then reading or changing those objects through their properties and methods. With `document.createElement`, `appendChild`, and `append`, TypeScript can also build new parts of the page dynamically.

# Next Step

Next we'll see how browser objects react to user input: [Events and EventTarget &raquo;](./events_intro.md)

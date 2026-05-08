---
layout: default
title: Dynamic DOM Manipulation
nav_order: 10.2
parent: Advanced Browser APIs
---

# Dynamic DOM Manipulation

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

We can build dynamic interfaces in plain TypeScript by creating, inserting, removing, and replacing DOM elements directly.

## The core operations

A surprisingly large number of browser programs can be built from a small group of DOM methods.

-   `document.createElement(...)`
-   `appendChild(...)` or `append(...)`
-   `removeChild(...)` or `remove()`
-   `replaceChild(...)`

These methods let us grow and reshape the page while the program runs.

## Example: a tiny task list

Suppose we begin with this HTML:

{:.no-run}

```html
<input id="task-input" type="text" placeholder="New task" />
<button id="add-task">Add Task</button>
<ul id="task-list"></ul>
```

We can turn this into a dynamic list with a small amount of TypeScript.

{:.no-run}

```typescript
const taskInput = document.querySelector("#task-input") as HTMLInputElement | null;
const addTask = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTask?.addEventListener("click", () => {
    if (taskInput === null || taskList === null) {
        return;
    }

    const trimmed = taskInput.value.trim();
    if (trimmed.length === 0) {
        return;
    }

    const item = document.createElement("li");
    item.textContent = trimmed;
    taskList.appendChild(item);
    taskInput.value = "";
});
```

This is a good illustration of the DOM programming model. We are not using a framework. We are simply creating objects and attaching them to the page.

## Managing many created elements

Sometimes we also want to keep our own references to created objects.

{:.no-run}

```typescript
const taskItems: HTMLLIElement[] = [];
```

Each time we create a new list item, we can push it into this array. This is useful if we later want to count, remove, sort, or replace those items. In that sense, a dynamic DOM program often combines two structures:

-   the browser's own DOM tree
-   our program's own arrays or objects that track important elements

## Removing or replacing nodes

DOM updates do not stop at insertion.

{:.no-run}

```typescript
const oldItem = document.querySelector("li");
oldItem?.remove();
```

Or by replacement:

{:.no-run}

```typescript
const list = document.querySelector("#task-list");
const first = list?.firstElementChild;

if (list !== null && first !== null) {
    const replacement = document.createElement("li");
    replacement.textContent = "Updated task";
    list.replaceChild(replacement, first);
}
```

## Efficient insertion with `DocumentFragment`

If we want to add many elements at once, a `DocumentFragment` can make the code cleaner and reduce repeated insertion work.

{:.no-run}

```typescript
const courses = ["CISC181", "CISC210", "CISC220"];
const list = document.querySelector("#course-list");

if (list !== null) {
    const fragment = document.createDocumentFragment();

    for (const course of courses) {
        const item = document.createElement("li");
        item.textContent = course;
        fragment.appendChild(item);
    }

    list.appendChild(fragment);
}
```

Here we build a small subtree first, then attach it to the document in one step.

## A natural project idea

One excellent introductory project is a static data page. Read data from an array of objects and render it as cards, rows, or tiles using `document.createElement`. This keeps the focus on objects, loops, arrays, and DOM manipulation rather than on a framework's special rules.

## Summary

Dynamic browser applications do not require a framework. With the DOM's built-in creation and tree-manipulation methods, TypeScript can add, remove, replace, and reorganize page elements directly. This gives us a very object-oriented way to build simple interfaces.

# Next Step

Next we'll pass messages between parts of the page using browser-native events: [Custom Events and Component Communication &raquo;](./custom_events.md)

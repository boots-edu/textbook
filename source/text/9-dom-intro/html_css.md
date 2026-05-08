---
layout: default
title: HTML and CSS Review
nav_order: 9.1
parent: The Browser DOM
---

# HTML and CSS Review

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

The browser starts with HTML and CSS, then turns that description into live objects we can control from TypeScript.

## From source code to page

In chapter 1 we introduced the basic ideas behind HTML and CSS. Here we revisit them because they are the raw materials from which the browser builds the DOM.

HTML describes the content and structure of the page. CSS describes how that content should look. Once the browser parses the HTML, it creates an in-memory object structure representing the page. That structure is the **Document Object Model**.

That means an HTML file is not the final form of the page. It is more like the source code for the page. The DOM is the live, running object graph produced from that source.

## A slightly richer example

{:.no-run}

```html
<section id="todo-app" data-owner="student">
    <h1 class="title">Study Tasks</h1>
    <p class="description">Complete one small task before dinner.</p>
    <button id="add-button" class="primary">Add Task</button>
    <ul id="task-list">
        <li class="task">Read chapter 9</li>
        <li class="task">Review inheritance notes</li>
    </ul>
</section>
```

This example includes several features that are especially useful when we begin writing TypeScript for the browser.

-   The `id` attribute gives a unique name to a specific element.
-   The `class` attribute groups elements that should be styled similarly.
-   The `data-owner` attribute stores custom data on an element.

The browser stores all of these in the DOM, so our TypeScript code can retrieve or modify them later.

## `id`, `class`, and `data-*`

Three of the most useful HTML features are `id`, `class`, and custom data attributes.

### `id`

An `id` should be unique within the page.

{:.no-run}

```html
<button id="save-button">Save</button>
```

A unique id is useful because TypeScript can later find that exact element with methods such as `document.getElementById("save-button")`.

### `class`

A `class` is for reuse. Many elements can share the same class.

{:.no-run}

```html
<button class="primary">Save</button>
<button class="primary">Submit</button>
```

This is useful when many elements should share one style rule.

### `data-*`

Custom data attributes let us attach small pieces of extra information to elements.

{:.no-run}

```html
<button data-sound="440">A</button>
<button data-sound="494">B</button>
```

Later, TypeScript can read those values through the DOM. This is a very convenient way to connect markup to behavior without inventing lots of separate variables.

## External CSS versus inline CSS

CSS can be written in a few places.

### Inline style

{:.no-run}

```html
<p style="color: red; font-weight: bold;">Warning</p>
```

Inline style works, but it mixes structure and presentation together. It is usually better for very small experiments than for serious programs.

### Internal style block

{:.no-run}

```html
<style>
    .warning {
        color: red;
        font-weight: bold;
    }
</style>
```

This keeps style rules together, but still places them inside the HTML file.

### External stylesheet

{:.no-run}

```html
<link rel="stylesheet" href="styles.css" />
```

External CSS is usually the cleanest choice because it separates structure from appearance.

## Common CSS selectors

Some selectors appear over and over again:

-   `p` selects all paragraph elements.
-   `#save-button` selects the element with that id.
-   `.primary` selects every element with that class.
-   `#todo-app .task` selects elements with class `task` inside the element with id `todo-app`.

{:.no-run}

```css
#todo-app {
    width: 320px;
    padding: 16px;
    border: 2px solid navy;
}

.title {
    color: navy;
    margin-bottom: 8px;
}

.primary {
    background-color: navy;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
}

.task {
    margin-top: 6px;
}
```

## The box model

Every element on the page occupies space according to the **box model**. The four most important parts are:

-   **content**: the text or image inside the element
-   **padding**: space between the content and the border
-   **border**: the visible edge around the element
-   **margin**: space outside the border

When you give an element a width, padding, margin, or border, you are shaping its box on the page. Understanding this makes layout much less mysterious.

## Why this matters for TypeScript

A browser program does not merely send text to the page. It works with objects representing the page. When your TypeScript changes an element's `textContent`, adds a CSS class, or creates a new `<li>` element, it is updating the DOM that came from the HTML and CSS.

This is why it is useful to think in terms of structure first. HTML describes what exists. CSS describes how it should appear. Then TypeScript can ask the browser to inspect or modify those existing pieces.

## Summary

HTML gives the page structure, CSS gives it presentation, and the browser turns both into a live document we can control with code. Attributes such as `id`, `class`, and `data-*` are especially important because they help us style elements and later locate or configure them from TypeScript.

# Next Step

Next we'll look at the DOM as a real class hierarchy: [The DOM as a Type Hierarchy &raquo;](./dom_tree.md)

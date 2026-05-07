---
layout: default
title: HTML, CSS, and the DOM
nav_order: 9.1
parent: Browser APIs Foundations
---

# HTML, CSS, and the DOM

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

A web page is an object graph in memory. HTML and CSS define structure and style, and the DOM lets our TypeScript code read and change that structure through objects.

## HTML Essentials We Need

We only need a small set of elements to build useful programs:

- `div`, `section`, `main`, `header` for structure
- `h1`-`h6`, `p`, `span` for text
- `button`, `input`, `select` for interaction
- `ul`/`li` and `table` elements for collections of data
- `canvas` for custom drawing

A minimal page skeleton:

{: .no-run }

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Demo</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <main id="app"></main>
        <script type="module" src="main.js"></script>
    </body>
</html>
```

## CSS Essentials We Need

For this course, focus on:

- Layout: `display`, `position`, `width`, `height`, `padding`, `margin`
- Visual style: `color`, `background`, `border`, `font-size`
- Reuse: class selectors (`.card`) and id selectors (`#score`)

{: .no-run }

```css
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
}

.highlight {
    background: #fffbcc;
}
```

## DOM as an Object-Oriented Model

When a browser loads HTML, it creates objects in a tree:

- `document` is the root entry point.
- Nodes in the page are objects in a hierarchy (`Node`, `Element`, `HTMLElement`, and more specific subclasses).
- Parent/child relationships mirror the nested HTML structure.

This is why the DOM is a strong OOP example:

- Shared behavior lives higher in the hierarchy (`remove`, `appendChild`, `querySelector`).
- Concrete subclasses add specialized fields and methods (`HTMLInputElement.value`, `HTMLCanvasElement.getContext`).
- Many APIs are polymorphic because they accept broad parent types like `Node` or `EventTarget`.

## First DOM Reads and Writes

{: .no-run }

```typescript
const title = document.querySelector("h1");
if (title instanceof HTMLElement) {
    title.textContent = "Browser API Demo";
}

const app = document.querySelector("#app");
if (app instanceof HTMLElement) {
    const msg = document.createElement("p");
    msg.textContent = "Created at runtime";
    app.appendChild(msg);
}
```

## Week-by-Week Browser API Thread

From this chapter onward, each week includes one browser API activity tied to current CS topics:

1. Build and style static pages from structured data.
2. Traverse DOM collections with loops and arrays.
3. Model UI state with classes and object references.
4. Encapsulate UI behavior with methods.
5. Use inheritance via custom elements.
6. Practice polymorphism with `Node` and `Event` hierarchies.
7. Handle invalid inputs with exceptions and validation messages.
8. Test DOM logic with small isolated functions.

## Summary

HTML defines structure, CSS defines presentation, and the DOM exposes both as objects that our TypeScript code can manipulate.

# Next Step

Next we will build DOM objects directly and connect behavior with events in [DOM Objects and Element Creation &raquo;](../9-webz-intro/beginning_webz.md)

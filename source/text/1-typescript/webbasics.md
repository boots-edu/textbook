---
layout: default
title: HTML, CSS, and the Browser
nav_order: 1.5
parent: Introduction To TypeScript
---

# HTML, CSS, and the Browser

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

A web page is a text document that the browser turns into a structured collection of objects on the screen.

## Why learn this now?

Later in this book we will use TypeScript to control real web pages in the browser. Before we can do that, we need a small amount of background knowledge about what the browser is looking at.

A browser does not magically invent a page out of thin air. It starts with an HTML document. That document describes the structure of the page: headings, paragraphs, buttons, images, lists, and other pieces of content. CSS then controls how those pieces look. TypeScript can then read, change, and react to those pieces while the program is running.

You can think of the three technologies this way:

-   **HTML** describes the structure and content.
-   **CSS** describes the appearance.
-   **TypeScript** describes the behavior.

## HTML is a language of elements

HTML is a tag-based language. Most tags come in pairs: an opening tag and a closing tag. The text or elements inside that pair are the contents of the element.

{:.no-run}

```html
<p>Hello world</p>
<button>Click me</button>
<div>
    <span>Nested text</span>
</div>
```

In the example above, the `<p>` element contains text, the `<button>` element contains a label, and the `<div>` contains another element. This parent/child relationship will become very important later when we study the Document Object Model, or **DOM**.

Some common HTML elements are:

-   `<h1>` through `<h6>` for headings
-   `<p>` for a paragraph
-   `<div>` for a generic block of content
-   `<span>` for a small inline piece of content
-   `<button>` for a clickable button
-   `<input>` for user input
-   `<img>` for an image
-   `<ul>` and `<li>` for unordered lists and list items

## Attributes add extra information

HTML elements can also have **attributes**. These are name/value pairs written inside the opening tag.

{:.no-run}

```html
<input type="text" placeholder="Enter your name" id="username" />
<button class="primary">Save</button>
<img src="cat.png" alt="A photo of a cat" />
```

Attributes let us describe or configure an element.

-   `type="text"` tells the browser what kind of input this is.
-   `placeholder="Enter your name"` gives temporary hint text.
-   `id="username"` gives a unique name to one element.
-   `class="primary"` groups elements that should share styling.
-   `src="cat.png"` tells an image where to load from.

A useful way to think about this is that the tag name gives the element its basic kind, while the attributes customize that specific instance.

## A complete tiny page

Here is a very small HTML page:

{:.no-run}

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Page</title>
    </head>
    <body>
        <h1>Study Tracker</h1>
        <p>I studied TypeScript for 30 minutes today.</p>
        <button>Mark Complete</button>
    </body>
</html>
```

The `<head>` contains information about the page itself. The `<body>` contains the visible content. If you save this in a file called `index.html` and open it in a browser, the browser will render it as an actual page.

## CSS controls appearance

CSS stands for **Cascading Style Sheets**. CSS rules say how elements should look: their colors, spacing, borders, size, position, and more.

{:.no-run}

```css
h1 {
    color: darkblue;
}

button {
    background-color: navy;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
}
```

A CSS rule has two parts:

-   A **selector** that says which elements should be affected
-   A block of **properties** and **values** that describe the appearance

In the example above, the selector `h1` styles every heading level 1 element on the page. The selector `button` styles every button.

## Styling by `id` and `class`

We often want more control than “style every button.” Two of the most useful selectors are `id` and `class`.

{:.no-run}

```html
<div id="login-box">
    <input class="field" type="text" placeholder="Username" />
    <input class="field" type="password" placeholder="Password" />
    <button class="primary">Log In</button>
</div>
```

{:.no-run}

```css
#login-box {
    background-color: lightcyan;
    padding: 16px;
}

.field {
    display: block;
    margin-bottom: 8px;
}

.primary {
    background-color: darkblue;
    color: white;
}
```

In CSS:

-   `#login-box` means “the element whose `id` is `login-box`”
-   `.field` means “every element with the class `field`”
-   `.primary` means “every element with the class `primary`”

The `id` should be unique on the page. A class can be reused many times.

## HTML and TypeScript already fit together

If you have mostly written console programs so far, a web page may feel very different. But some familiar ideas still apply.

A paragraph element holds text content much like a string variable holds text data. A button element can be thought of as an object with data and behavior: it has properties such as its text and disabled state, and it can react when the user clicks it. A web page itself is a structured collection of related objects.

Later, TypeScript code will be able to ask questions like:

-   “Find the button with this id.”
-   “Change the text inside this paragraph.”
-   “Add a CSS class to this element.”
-   “Create a new list item and attach it to the page.”

That is one of the reasons the browser is such a good setting for object-oriented programming. The page is not just text. It becomes a rich object structure that our program can inspect and modify.

## Summary

HTML describes the structure of a web page using nested elements. Attributes provide extra information about those elements. CSS styles those elements to control how they look. In later chapters, TypeScript will let us treat those page elements as objects that we can access and change while the program runs.

# Next Step

Now onto [Loops and Arrays &raquo;](../2-loops/index.md)

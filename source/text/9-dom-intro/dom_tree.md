---
layout: default
title: The DOM as a Type Hierarchy
nav_order: 9.2
parent: The Browser DOM
---

# The DOM as a Type Hierarchy

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

The DOM is not just a convenient browser feature. It is a rich object-oriented type hierarchy with inheritance, abstract concepts, and polymorphic behavior.

## The browser turns the page into objects

Once the browser reads your HTML, it does not keep treating the page as a plain string. It builds objects that represent the document, its elements, and the text inside them. These objects are connected to each other in a tree.

The top of that tree is the `document` object. Each object in the tree is a **node**, and many of those nodes are visible elements on the screen.

This should already sound familiar from earlier chapters. We have a superclass-like idea, more specialized subclasses, and a parent/child relationship between objects.

## A simplified view of the hierarchy

The real DOM hierarchy is very large, but this simplified view is enough to see the main idea:

-   `Node`
    -   `Document`
    -   `Text`
    -   `Comment`
    -   `Element`
        -   `HTMLElement`
            -   `HTMLDivElement`
            -   `HTMLSpanElement`
            -   `HTMLButtonElement`
            -   `HTMLInputElement`
            -   `HTMLCanvasElement`
            -   `HTMLImageElement`

Every item farther down the list is a more specialized type of the item above it.

-   A button **is an** `HTMLElement`.
-   An `HTMLElement` **is an** `Element`.
-   An `Element` **is a** `Node`.

This is exactly the kind of reasoning we used in our inheritance chapter.

## `Node` behaves like an abstract idea

In the DOM, `Node` is the general concept that ties the tree together. You do not usually think “I would like to create a plain `Node` object.” Instead, you work with concrete node types such as a `Document`, an `Element`, or a `Text` node.

This is very similar to how abstract classes work in object-oriented programming. An abstract base class captures what many concrete types have in common. The browser's DOM API uses `Node` in almost exactly that spirit.

## Polymorphism in the DOM

One of the reasons this hierarchy is useful is that some methods are defined high in the tree and therefore work on many different subclasses.

For example, `remove()` is defined on `Node`. That means a paragraph element, a button element, or a text node can all use it.

{:.no-run}

```typescript
const firstItem = document.querySelector("li");
firstItem?.remove();
```

Here we do not care whether the selected element is a list item, a paragraph, or some other specific HTML element. We only care that it is a node that can be removed from the tree.

This is real polymorphism: one method name, many possible concrete receiver types.

## `querySelector` and general types

A method such as `document.querySelector` often returns a general type such as `Element | null` because the browser does not know exactly what you meant unless you narrow it further.

{:.no-run}

```typescript
const element = document.querySelector("#submit");
```

At this point, `element` is known to be some kind of `Element`, but not necessarily a button. If we know our selector points at a button, we can narrow the type.

{:.no-run}

```typescript
const element = document.querySelector("#submit");
if (element instanceof HTMLButtonElement) {
    element.disabled = true;
}
```

The `instanceof` check asks whether the object is an instance of a more specific class. This is a useful bridge between the type hierarchy and actual program logic.

## Parent and child nodes

The DOM is also a tree structure. A document contains child nodes. Elements contain child nodes. Some of those children are other elements, and some are text nodes.

{:.no-run}

```html
<ul>
    <li>Read chapter 9</li>
    <li>Write notes</li>
</ul>
```

In a simplified sense:

-   the `ul` element is a node
-   each `li` is a child node of the `ul`
-   the text inside each `li` is another node

This tree structure is why recursion becomes so useful later when we want to traverse the DOM.

## Why `document.createElement` feels unusual

One small quirk of the DOM is that we do not usually construct built-in HTML elements with the `new` operator. Instead, we ask the document to create them:

{:.no-run}

```typescript
const button = document.createElement("button");
```

This can feel a little surprising in a course on object-oriented programming. Even so, the returned object is still a real object with a class, properties, methods, and a place in the inheritance hierarchy.

In the next chapter we will see one place where the `new` operator does appear naturally in browser programming: **custom elements**, where we define our own element classes.

## Summary

The DOM is a large inheritance hierarchy rooted in the idea of a `Node`. More specialized classes such as `Element`, `HTMLElement`, and `HTMLButtonElement` build on that base. Because methods such as `remove()` are defined high in the hierarchy, the DOM gives us a concrete, real-world example of subtype polymorphism.

# Next Step

Next we'll start working with those objects directly: [Accessing and Modifying DOM Elements &raquo;](./querying.md)

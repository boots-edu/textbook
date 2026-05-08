---
layout: default
title: Custom HTML Elements
nav_order: 10.1
parent: Advanced Browser APIs
---

# Custom HTML Elements

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

Custom elements let us define our own HTML tag types by writing classes that extend `HTMLElement`.

## Why custom elements matter in this course

Up to this point, one frustration of browser programming may have been that many built-in elements are created with `document.createElement(...)` instead of the `new` operator. Custom elements give us a cleaner object-oriented moment.

We can define a class, extend an existing browser class, call `super()`, override lifecycle methods, and then use our new type as an actual HTML tag. That makes custom elements one of the nicest places to connect browser programming back to inheritance and polymorphism.

## A first custom element

{:.no-run}

```typescript
class StudyCard extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("study-card", StudyCard);
```

After the call to `customElements.define`, the browser knows that `<study-card></study-card>` should create an instance of our `StudyCard` class.

## Rendering in `connectedCallback`

The browser calls `connectedCallback` when the element is inserted into the page. This is a common place to set up the element's contents.

{:.no-run}

```typescript
class StudyCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(): void {
        this.innerHTML = `
            <article class="study-card">
                <h2>${this.getAttribute("title") ?? "Untitled"}</h2>
                <p>${this.getAttribute("topic") ?? "No topic yet"}</p>
            </article>
        `;
    }
}

customElements.define("study-card", StudyCard);
```

Now the markup:

{:.no-run}

```html
<study-card title="Chapter 9" topic="The Browser DOM"></study-card>
```

creates a real instance of our class and asks it to render itself.

## Watching attributes with `attributeChangedCallback`

Custom elements can react when certain attributes change.

{:.no-run}

```typescript
class StudyCard extends HTMLElement {
    static get observedAttributes(): string[] {
        return ["title", "topic"];
    }

    constructor() {
        super();
    }

    connectedCallback(): void {
        this.render();
    }

    attributeChangedCallback(): void {
        this.render();
    }

    private render(): void {
        this.innerHTML = `
            <article class="study-card">
                <h2>${this.getAttribute("title") ?? "Untitled"}</h2>
                <p>${this.getAttribute("topic") ?? "No topic yet"}</p>
            </article>
        `;
    }
}
```

When one of the observed attributes changes, the browser calls `attributeChangedCallback`, and we can update the rendered output.

## Inheritance and overriding are real here

This API gives us an unusually direct example of object-oriented programming in the browser.

-   Our class extends `HTMLElement`.
-   The `super()` call initializes the inherited browser behavior.
-   The browser treats our object as both a `StudyCard` and an `HTMLElement`.
-   Overridden methods such as `connectedCallback` let us specialize behavior.

In other words, this is not an example invented just for class practice. It is a production browser API built around the same ideas.

## A natural project direction

Custom elements are a good way to build a tiny UI library. For example, a student project might create:

-   `<star-rating>`
-   `<color-swatch>`
-   `<warning-box>`

Those custom elements could share a common abstract base class or helper superclass, giving you an authentic use of inheritance in a browser setting.

## Summary

Custom elements let us define new HTML tag types by extending `HTMLElement`. They provide one of the clearest places in browser programming to see `extends`, `super()`, and overridden methods working together in a real API.

# Next Step

Next we'll build dynamic interfaces with plain DOM operations: [Dynamic DOM Manipulation &raquo;](./dom_manipulation.md)

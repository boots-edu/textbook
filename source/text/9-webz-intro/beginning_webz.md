---
layout: default
title: DOM Objects and Element Creation
nav_order: 9.2
parent: Browser APIs Foundations
---

# DOM Objects and Element Creation

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

Instead of relying on a framework, we can construct interactive interfaces directly with browser objects and TypeScript classes.

## Working Directly with Existing Elements

Most programs begin by selecting existing elements:

{: .no-run }

```typescript
const countLabel = document.querySelector("#count");
const button = document.querySelector("#increment");

let count = 0;

if (button instanceof HTMLButtonElement && countLabel instanceof HTMLElement) {
    button.addEventListener("click", () => {
        count += 1;
        countLabel.textContent = count.toString();
    });
}
```

This already uses course concepts:

- Variables and numeric updates
- Functions as callback values
- Type narrowing with `instanceof`

## Creating New Elements Programmatically

The browser creates typed element objects with `document.createElement(...)`.

{: .no-run }

```typescript
const list = document.querySelector("#items");
if (list instanceof HTMLUListElement) {
    const item = document.createElement("li");
    item.textContent = "Created from TypeScript";
    list.appendChild(item);
}
```

## Where Inheritance Shows Up

You do not usually write `new HTMLDivElement()`, but you still use inheritance constantly:

- Objects returned by the DOM belong to a class hierarchy.
- Shared methods (for example, `remove`) come from parent classes.
- Specialized behavior appears on subclasses.

This makes DOM programming a concrete OOP environment.

## Custom Elements: When We Do Use `new`

Custom elements let us define our own classes that extend built-in browser classes.

{: .no-run }

```typescript
class ScoreCardElement extends HTMLElement {
    private score: number = 0;

    constructor() {
        super();
        this.textContent = "Score: 0";
    }

    increment(): void {
        this.score += 1;
        this.textContent = `Score: ${this.score}`;
    }
}

customElements.define("score-card", ScoreCardElement);

const card = new ScoreCardElement();
document.body.appendChild(card);
```

This directly supports discussion of `extends`, `super`, overriding, and encapsulation.

## Summary

We can build useful interactive pages using only native browser APIs, while naturally reinforcing classes, inheritance, and callbacks.

# Next Step

Next we will complete a full browser-native walkthrough in [Browser API Walkthrough &raquo;](./walkthrough.md)

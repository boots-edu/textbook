---
layout: default
title: Dynamic DOM Trees
nav_order: 10.1
parent: Browser APIs in Practice
---

# Dynamic DOM Trees

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

The DOM is a mutable tree. We can add, remove, and reorder nodes at runtime to represent changing program state.

## Core Pattern

1. Keep application state in classes and arrays.
2. Render that state into DOM nodes.
3. Rerender only the section that changed.

## Useful APIs

- `document.createElement`
- `append`, `appendChild`, `prepend`
- `remove`, `replaceWith`
- `querySelector`, `querySelectorAll`
- `classList.add/remove/toggle`

## Example Activity: Dynamic Task Board

Students build a mini board with three lists: "Todo", "Doing", "Done".

Practice goals:

- Add cards dynamically from form input
- Move cards between lists with buttons
- Keep underlying state and rendered tree in sync

## OOP Connection

- A `TaskItem` class models each task.
- A `TaskBoard` class encapsulates mutation and rendering methods.
- DOM nodes are manipulated through base type `Node` APIs, showing polymorphic behavior.

## Summary

Dynamic UI does not require a framework: state + DOM tree operations provide a clear and testable architecture.

# Next Step

Next we will formalize browser event communication in [Events and EventTarget &raquo;](../10-webz-advanced/events.md)

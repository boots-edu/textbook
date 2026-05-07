---
layout: default
title: Browser API Project Tutorial
nav_order: 10.5
parent: Browser APIs in Practice
---

# Browser API Project Tutorial

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

The final project should stay technically meaningful but scoped to what CS2 students can implement confidently.

## Recommended Project Tracks

Choose one:

1. **Data Dashboard**: Read a local file and render interactive summaries.
2. **Custom Element UI Kit**: Build reusable controls with classes extending `HTMLElement`.
3. **Click Arcade Game**: Use canvas, custom events, and timers.
4. **Mini Piano or Drum Machine**: Use keyboard/mouse events with the Web Audio API.

## Shared Project Architecture

All tracks should include:

- A domain model layer (classes and arrays)
- A rendering layer (DOM or canvas)
- An event layer (event listeners and/or custom events)
- A small error-handling strategy for invalid user states

## Suggested Milestones

1. Define domain classes and sample data.
2. Render initial UI from state.
3. Add user interaction events.
4. Add validation and error reporting.
5. Add one extension feature (audio, persistence, or accessibility).

## How This Aligns with Course Goals

- Inheritance and abstract thinking appear in DOM/custom element hierarchies.
- Polymorphism appears in shared node/event interfaces.
- Recursion can be applied to DOM tree traversal tasks.
- Higher-order functions remain central via event callbacks and array methods.

## Summary

Native browser APIs allow simpler, coherent final projects that reinforce core CS2 OOP concepts instead of introducing a separate framework mental model.

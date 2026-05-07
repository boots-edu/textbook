---
layout: default
title: Composition and Inheritance
nav_order: 5
has_children: true
---

# Chapter 5 - Composition and Inheritance

[&laquo; Return to the Table of Contents](../../index.md)

Building complex objects can be accomplished by combining classes in various ways. Let's learn the primary methods for doing this: ***Composition*** and ***Inheritance***.

## Browser API Framing

The browser platform gives us concrete examples of both composition and inheritance.

### Composition in browser programs

Most interfaces are composed from smaller parts:

- A page contains sections.
- A section contains controls and data displays.
- Those controls often coordinate through shared state.

This is composition in practice: larger behavior assembled from smaller cooperating objects.

### Inheritance in browser programs

The DOM and custom elements make inheritance visible and practical:

- Built-in classes form hierarchies (for example, node and element types).
- We can define our own elements by extending browser classes.
- Constructors and shared methods reinforce how base classes provide reusable behavior.

As you learn composition and inheritance here, you are preparing for the exact structure used in later browser API chapters.

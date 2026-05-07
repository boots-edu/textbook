---
layout: default
title: Recursion
nav_order: 13
has_children: true
---

# Chapter 13 - Recursion

[&laquo; Return to the Table of Contents](../../index.md)

Recursion gives us a way to solve problems where data is defined in terms of smaller versions of itself.

## Browser API Framing

The DOM is a tree, and trees are a natural recursive structure.

That makes recursion useful for browser tasks such as:

- Traversing nested elements
- Collecting matching nodes under a subtree
- Applying transformations through a hierarchy
- Building outline/navigation views from nested content

Recursion also reinforces object references and parent/child relationships, which are central to both OOP and browser document structures.

As you work this chapter, connect each recursive pattern to DOM trees so the concept is not abstract but directly tied to visible interface behavior.

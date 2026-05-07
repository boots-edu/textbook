---
layout: default
title: Testing
nav_order: 8
has_children: true
---

# Chapter 8 - Testing

[&laquo; Return to the Table of Contents](../../index.md)

Testing code is critical! In this chapter, we'll discuss how to write tests for your code, including both unit tests and integration tests. We'll also discuss how to use Jest, a popular testing framework for JavaScript and TypeScript. This will also be an opportunity to discuss anonymous functions and how they can be used in testing.

## Browser API Framing

Browser code becomes much easier to test when we separate "what the program decides" from "how the page is updated."

A good strategy is to isolate:

- Pure logic functions (easy to unit test)
- Event-handler logic (test input/output behavior)
- Small render functions (verify expected DOM changes)

This chapter's testing habits will be reused in later browser activities where we need confidence that user actions produce correct updates.

Testing also helps with refactoring. As browser examples grow more interactive, tests let us simplify code without fear of accidentally changing behavior.

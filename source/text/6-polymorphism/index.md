---
layout: default
title: Overrides and Polymorphism
nav_order: 6
has_children: true
---

# Chapter 6 - Overrides and Polymorphism

[&laquo; Return to the Table of Contents](../../index.md)

While classes are a powerful tool for Software Engineering, the real power comes from the ability to alter behavior in a derived class. This is accomplished by ***overriding*** members of the superclass in the subclass. This opens up ***polymorphism***, which allows us to write concise programs that behave differently based on the overridden member.

## Browser API Framing

Browser APIs are one of the most accessible real-world polymorphism examples you will use.

- Many operations are defined on broad parent types and then work across many concrete subclasses.
- Event objects share a common base type while specialized event subclasses carry extra data.
- Custom elements can override lifecycle behavior while still fitting into shared interfaces.

This gives us a practical workflow:

1. Program against a general type when possible.
2. Narrow to a more specific subtype only when specialized behavior is needed.
3. Use overriding to customize behavior without changing the surrounding architecture.

That is exactly the same design strategy taught in this chapter, now applied to the browser's object model.

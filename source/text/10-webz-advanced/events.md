---
layout: default
title: Events and EventTarget
nav_order: 10.2
parent: Browser APIs in Practice
---

# Events and EventTarget

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

Browser programs are event-driven. `EventTarget` and `Event` provide a shared communication model across many APIs.

## EventTarget Beyond the DOM

`EventTarget` is implemented by many browser objects, including:

- DOM nodes (`Element`, `Document`, `Window`)
- `FileReader`
- `XMLHttpRequest`
- Audio and animation related objects

This gives us a consistent mental model: subscribe with listeners, react to emitted events.

## Event Class Hierarchy

Common subclasses include:

- `MouseEvent`
- `KeyboardEvent`
- `InputEvent`
- `CustomEvent<T>`

This supports polymorphism: one handler can accept `Event`, while specialized handlers can use subclass fields.

## Example Activity: Custom Events for Game Actions

Students build a click-based mini game where:

- Game objects dispatch `CustomEvent` instances (for score, miss, level-up)
- A controller listens and updates game state
- UI views rerender based on updated state

## Higher-Order Function Connection

Event handlers are callback functions passed to `addEventListener`, reinforcing function values and closures.

## Summary

`EventTarget` gives us a reusable architecture for component communication without introducing framework-specific event systems.

# Next Step

Next we will use native dialog and form APIs in [Dialogs, Forms, and File Input &raquo;](../10-webz-advanced/dialogs.md)

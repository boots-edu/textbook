---
layout: default
title: Custom Events and Component Communication
nav_order: 10.3
parent: Advanced Browser APIs
---

# Custom Events and Component Communication

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

We can let one part of a browser program notify another by dispatching `CustomEvent` objects through the browser's event system.

## Why custom events?

In any non-trivial interface, one object often needs to inform another that something happened. A score changed. A task was completed. A note was edited. One approach is to manually hold lots of references and call methods directly. Another is to use the browser's existing event system.

`CustomEvent` lets us create our own event type and optionally include extra data.

## Dispatching a custom event

Suppose a target in a game wants to report that it has been clicked. It can dispatch a custom event with the number of points scored.

{:.no-run}

```typescript
const target = document.querySelector("#target");

target?.addEventListener("click", () => {
    const scoreEvent = new CustomEvent<number>("score-change", {
        detail: 10,
        bubbles: true,
    });
    target.dispatchEvent(scoreEvent);
});
```

The event name here is `"score-change"`. The `detail` field carries our custom payload. The `bubbles: true` option means the event will travel upward through the DOM tree, which makes it easier for parent elements to listen for it.

## Listening in a parent

A containing element can listen for the custom event and respond without knowing the exact internal details of the child.

{:.no-run}

```typescript
let totalScore: number = 0;

const arena = document.querySelector("#arena");
const scoreOutput = document.querySelector("#score-output");

arena?.addEventListener("score-change", (event: Event) => {
    const scoreEvent = event as CustomEvent<number>;
    totalScore += scoreEvent.detail;

    if (scoreOutput !== null) {
        scoreOutput.textContent = `Score: ${totalScore}`;
    }
});
```

This is a nice decoupling technique. The parent does not need to ask the child for updates over and over. The child announces important changes when they happen.

## `CustomEvent` is still an `Event`

One of the important object-oriented facts here is that `CustomEvent` extends `Event`. That means custom events participate in the same event system as built-in browser events. We are not inventing a separate communication mechanism. We are extending the one the browser already provides.

## A useful mental model

You can think of this pattern as a browser-native version of component communication.

-   A child element dispatches a message upward.
-   A parent element listens for that message.
-   The message can carry a strongly-typed payload in `detail`.

This is an elegant fit for interfaces built out of many DOM objects.

## Project ideas

Custom events are especially useful in small games and UI libraries.

-   A canvas game object can dispatch `score-change` or `player-hit`.
-   A custom element can dispatch `rating-selected`.
-   A simple dashboard widget can dispatch `filter-changed`.

## Summary

`CustomEvent` lets our own objects communicate using the browser's built-in event system. Because `CustomEvent` is itself part of the event hierarchy, it is a clean, object-oriented way to connect parts of a browser program without tightly coupling them.

# Next Step

Next we'll step into graphics and animation: [Drawing with the Canvas API &raquo;](./canvas.md)

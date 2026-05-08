---
layout: default
title: Drawing with the Canvas API
nav_order: 10.4
parent: Advanced Browser APIs
---

# Drawing with the Canvas API

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

The Canvas API gives the browser a drawable surface that works especially well with animation, games, and class hierarchies of visual objects.

## The canvas element

A `<canvas>` element gives us a rectangular drawing area. We ask it for a drawing context, then use that context's methods to draw shapes.

{:.no-run}

```html
<canvas id="game" width="500" height="300"></canvas>
```

{:.no-run}

```typescript
const canvas = document.querySelector("#game") as HTMLCanvasElement | null;
const ctx = canvas?.getContext("2d");
```

The object returned by `getContext("2d")` gives us many drawing methods.

## Basic drawing commands

{:.no-run}

```typescript
if (ctx !== null) {
    ctx.fillStyle = "cornflowerblue";
    ctx.fillRect(20, 20, 80, 50);

    ctx.beginPath();
    ctx.arc(180, 60, 30, 0, Math.PI * 2);
    ctx.fillStyle = "tomato";
    ctx.fill();
}
```

This draws a rectangle and a circle. The context stores drawing state such as `fillStyle`, and its methods act on the canvas.

## A simple click game idea

One approachable project is a target-clicking game. Draw a moving target on the canvas. If the player clicks inside the target, increase the score and move it somewhere else.

Even a small game like this naturally uses many course ideas:

-   classes to model objects in the game
-   arrays to store many objects
-   events to detect clicks
-   animation loops to redraw the scene

## `requestAnimationFrame`

For animation, browsers provide `requestAnimationFrame`. Instead of asking for a fixed timer delay, we give the browser a function to call before the next repaint.

{:.no-run}

```typescript
function gameLoop(): void {
    if (ctx === null || canvas === null) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw game objects here
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
```

This is a very common pattern in browser games and animations.

## An abstract `Sprite` hierarchy

Canvas is also a natural place to revisit abstract classes.

{:.no-run}

```typescript
abstract class Sprite {
    constructor(public x: number, public y: number) {}
    abstract draw(ctx: CanvasRenderingContext2D): void;
}

class CircleTarget extends Sprite {
    constructor(x: number, y: number, public radius: number) {
        super(x, y);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}

class ScoreLabel extends Sprite {
    constructor(x: number, y: number, public text: string) {
        super(x, y);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "black";
        ctx.fillText(this.text, this.x, this.y);
    }
}
```

Now we can store both subclasses in a `Sprite[]` and call `draw` polymorphically on each one.

## Summary

The Canvas API gives us a direct way to draw and animate graphics in the browser. It pairs naturally with object-oriented design because visual objects can be modeled as classes, organized into hierarchies, and drawn polymorphically inside an animation loop.

# Next Step

Next we'll add sound to the browser using native audio objects: [Sound and the Web Audio API &raquo;](./audio_api.md)

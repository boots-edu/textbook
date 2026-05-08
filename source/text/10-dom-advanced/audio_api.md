---
layout: default
title: Sound and the Web Audio API
nav_order: 10.5
parent: Advanced Browser APIs
---

# Sound and the Web Audio API

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

The Web Audio API gives us an object graph for creating, connecting, and controlling sound directly in the browser.

## The main audio objects

A common starting point is the `AudioContext`. It represents the environment in which audio processing takes place. Inside that context, we create other audio nodes such as oscillators and gain controls.

-   `AudioContext` manages the overall audio system.
-   `OscillatorNode` generates a tone.
-   `GainNode` controls volume.
-   `AudioDestinationNode` represents the speakers or output device.

These objects are connected together into a graph.

## A tiny tone example

{:.no-run}

```typescript
const audioContext = new AudioContext();

function playTone(frequency: number): void {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.frequency.value = frequency;
    gain.gain.value = 0.1;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.25);
}
```

This creates a short tone by connecting an oscillator to a gain node, then connecting the gain node to the destination output.

## Building a simple browser instrument

A simple piano or drum pad is a great project for this material. The HTML can be as simple as a row of buttons.

{:.no-run}

```html
<button class="key" data-frequency="261.63">C</button>
<button class="key" data-frequency="293.66">D</button>
<button class="key" data-frequency="329.63">E</button>
```

Then the TypeScript can attach listeners to each button.

{:.no-run}

```typescript
const keys = document.querySelectorAll(".key");

for (const key of keys) {
    key.addEventListener("click", () => {
        const frequencyText = key.getAttribute("data-frequency");
        if (frequencyText !== null) {
            playTone(parseFloat(frequencyText));
        }
    });
}
```

The `data-frequency` attribute lets the HTML store the note information, while TypeScript uses that data to decide which sound to generate.

## `EventTarget` appears again

The browser's object-oriented design shows up here too. `AudioContext` and other audio-related APIs participate in the browser's broader event model. This is a good reminder that `EventTarget` is not only for visible DOM nodes. The browser reuses the same event ideas in several subsystems.

## Audio graphs and polymorphism

The Web Audio API is also interesting because it is a graph of related object types. Different node classes all behave as kinds of audio nodes. That means we can talk about connections generically even when the concrete node types differ.

For example, an oscillator node and a gain node have different jobs, but both fit into the broader audio-processing graph. This is another place where a shared interface and subtype relationships make the API easier to use.

## A practical note

Most browsers require sound to begin only after a user gesture, such as a click. That is why examples like this almost always start audio in response to a button press rather than immediately when the page loads.

## Summary

The Web Audio API lets us build sound-producing programs out of connected browser objects. It is a strong final example of how native browser APIs are full of class hierarchies, shared interfaces, and event-driven behavior.

# Next Step

Next we'll return to broader TypeScript language features: [Advanced Typescript &raquo;](../11-typescript-advanced/index.md)

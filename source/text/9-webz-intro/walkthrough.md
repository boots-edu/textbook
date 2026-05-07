---
layout: default
title: Browser API Walkthrough
nav_order: 9.3
parent: Browser APIs Foundations
---

# Browser API Walkthrough

[&laquo; Return to the Chapter Index](index.md)

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Goal

Build a small "live scoreboard" app that reads data, renders it, and reacts to user input using only native browser APIs.

## Step 1: Structure the page

Create semantic HTML with:

- A heading and short description
- A container for score rows
- Buttons for update/reset
- A status region for errors and confirmations

## Step 2: Add baseline CSS

Use classes for reusable styles and one utility class for error status. Keep layout simple and readable.

## Step 3: Model state with TypeScript classes

Create a `TeamScore` class with:

- Team name
- Current score
- Methods to increment/reset

Store `TeamScore` objects in an array.

## Step 4: Render from data

Write a `renderScores()` function that:

- Clears the container
- Loops through the array
- Creates row elements using `document.createElement`
- Appends rows into the container

## Step 5: Connect events

Attach click handlers with `addEventListener`.

- Update buttons call class methods, then rerender
- Reset button restores all scores to zero

## Step 6: Input validation and error flow

If a score update request is invalid, throw an `Error`, catch it near the UI boundary, and show the message in the status region.

## Step 7: Small extension activities

1. Add keyboard shortcuts for score updates.
2. Add an optional "winning score" field.
3. Save and restore state with `localStorage`.

## Why this walkthrough fits the course

- Objects model domain state.
- Arrays and loops drive rendering.
- Methods encapsulate behavior.
- Functions are passed as event callbacks.
- Exceptions are handled at the interface boundary.

## Summary

The same CS2 ideas from earlier chapters apply directly in browser code when we use the platform APIs directly.

# Next Step

Next we will scale these ideas to richer interfaces in [Browser APIs in Practice &raquo;](../10-webz-advanced/index.md)

---
layout: default
title: Dialogs, Forms, and File Input
nav_order: 10.3
parent: Browser APIs in Practice
---

# Dialogs, Forms, and File Input

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

The browser already provides practical UI primitives for popups, forms, and local file loading.

## Native Dialog Options

- Quick prompts: `alert`, `confirm`, `prompt`
- Structured modal UI: `<dialog>` element with `.showModal()` and `.close()`

## Form Workflow

Use forms for structured input and validation:

- `FormData` extracts user input
- built-in constraints (`required`, `min`, `max`, `pattern`)
- custom validation messages for domain rules

## File Input and Reader

For local data visualization activities:

1. Use `<input type="file">` to choose a file.
2. Read it with `FileReader`.
3. Parse and render results into DOM elements.

## Example Activity: Data Viewer

Students load a CSV/JSON file and display it as a sortable list or table.

This activity ties together:

- Validation and exceptions
- Arrays and object modeling
- Dynamic rendering and event handling

## Summary

Native dialog, form, and file APIs cover common UI needs while keeping code aligned with course OOP and data-structure goals.

# Next Step

Next we will coordinate timed behavior with [Timers, Animation, and Canvas &raquo;](../10-webz-advanced/timers.md)

---
layout: default
title: Testing in Jest
nav_order: 8.2
parent: Testing
---

# Testing in Jest

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

**_Jest_** is a test runner and testing framework that works with Javascript and TypeScript. We've been using Jest the entire time!

## Jest Syntax

There are just a few Jest functions that you need to know to get started:

-   `describe`: Create a new test section
-   `test`: Write a specific test
-   `expect`: expect an expression to behave a certain way
    -   Example: `expect(value).toBeInstanceOf(MyClass)`

There are many methods we'll need to learn about, but we can get by with these three functions for now.

Back to the example from the previous section, let's look at what we want to do for each of these:

{: .no-run}

```typescript
class Elements {
    private stringArray: string[] = [];
    /**
     * @description This function returns and
     * removes the last element
     * @returns {string} - The last element of the
     * array
     * @sideEffects - Removes the last element of
     * the array
     */
    getLastElement(): string {
        return this.stringArray.pop();
    }
}
```

We will start with a describe block for the Elements class:

{: .no-run}

```typescript
describe("Elements", () => {
    //Our tests go here
});
```

Let's write a test to see if we can construct an instance of the class:

{: .no-run}

```typescript
describe("Elements", () => {
    test("Create Instance", () => {
        const elements = new Elements();
        expect(elements).toBeInstanceOf(Elements);
    });
});
```

Does it work normally? Just create a test block that populates some items and then verify them.

{: .no-run}

```typescript
describe("Elements", () => {
    test("Array populated 2 or more", () => {
        const elements = new Elements();
        elements.stringArray = ["a", "b", "c"];
        // Check the length
        expect(elements.stringArray.length).toBe(3);
        // Extract the last element
        const value = elements.getLastElement();
        expect(value).toBe("c");
        // Now check the length again
        expect(elements.stringArray.length).toBe(2);
        expect(elements.stringArray).toContain("a");
        expect(elements.stringArray).toContain("b");
        expect(elements.stringArray).not.toContain("c");
    });
});
```

This will test the normal case of the function. What about the edge case where the array is empty?

{: .no-run}

```typescript
describe("Elements", () => {
    test("Array is empty", () => {
        const elements = new Elements();
        elements.stringArray = [];
        expect(elements.stringArray.length).toBe(0);
        expect(elements.getLastElement()).toThrowError("Array is empty");
    });
});
```

This test fails because we don't throw an exception, and neither does `pop` which we are using to implement this. We need to fix the code.

{: .no-run}

```typescript
class Elements {
    private stringArray: string[] = [];
    /**
     * @description This function returns and
     * removes the last element
     * @returns {string} - The last element of the
     * array
     * @sideEffects - Removes the last element of
     * the array
     * @throws {Error} - If the array is empty
     */
    getLastElement(): string {
        if (this.stringArray.length === 0) throw new Error("Array is empty");
        return this.stringArray.pop();
    }
}
```

Note that now getLastElement throws an exception if the array is empty, so our test will now pass.
What happens if the array has only one element in it?

{: .no-run}

```typescript
test("Array populated 1 item", () => {
    const elements = new Elements();
    elements.stringArray = ["a"];
    expect(elements.stringArray.length).toBe(1);
    const value = elements.getLastElement();
    expect(value).toBe("a");
    expect(elements.stringArray.length).toBe(0);
    expect(elements.stringArray).not.toContain("a");
});
```

So what does our final test suite for this code look like?

```typescript
class Elements {
    public stringArray: string[] = [];
    /**
     * @description This function returns and
     * removes the last element
     * @returns {string} - The last element of the
     * array
     * @sideEffects - Removes the last element of
     * the array
     * @throws {Error} - If the array is empty
     */
    getLastElement(): string {
        if (this.stringArray.length === 0) throw "Array is empty";
        return this.stringArray.pop();
    }
}

describe("Elements", () => {
    test("Create Instance", () => {
        const elements = new Elements();
        expect(elements).toBeInstanceOf(Elements);
    });
    test("Array populated 2 or more", () => {
        const elements = new Elements();
        elements.stringArray = ["a", "b", "c"];
        expect(elements.stringArray.length).toBe(3);
        const value = elements.getLastElement();
        expect(value).toBe("c");
        expect(elements.stringArray.length).toBe(2);
        expect(elements.stringArray).toContain("a");
        expect(elements.stringArray).toContain("b");
        expect(elements.stringArray).not.toContain("c");
    });
    test("Array is empty", () => {
        const elements = new Elements();
        elements.stringArray = [];
        expect(elements.stringArray.length).toBe(0);
        expect(() => elements.getLastElement()).toThrowError("Array is empty");
    });
    test("Array populated 1 item", () => {
        const elements = new Elements();
        elements.stringArray = ["a"];
        expect(elements.stringArray.length).toBe(1);
        const value = elements.getLastElement();
        expect(value).toBe("a");
        expect(elements.stringArray.length).toBe(0);
        expect(elements.stringArray).not.toContain("a");
    });
});
```

If we run our test using the **_jest_** command line, we get

```
PASS  src/app/mathpain.test.ts

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.151 s
```

Here I see that all 4 tests passed.
Now I know that the class method works as expected, in all of the cases that I could think of.
I have also verified that it behaves as documented on exceptions.
Once written this test will run every time I run tests, handling regression testing of this particular method of this class when future updates are made elsewhere in the program.

## Code Coverage

Coverage is important when writing tests
While you should not specifically write tests to coverage, since those tests will not cover all possible inputs, you should make sure that your tests actually cover your code. Let's look at our example again, from a coverage standpoint
Running: `jest –coverage` will produce a shortened coverage report like this:

```
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files            |   97.61 |    92.66 |   94.84 |   97.78 |
 EzComponent.ts      |     100 |      100 |     100 |     100 |
 EzDialog.ts         |    93.1 |       75 |   83.33 |   94.44 | 135-140
 bind.decorators.ts  |   97.38 |    93.65 |   91.66 |   97.27 | 601-602,621-622
 bootstrap.ts        |     100 |      100 |     100 |     100 |
 event.decorators.ts |     100 |      100 |     100 |     100 |
 eventsubject.ts     |     100 |      100 |     100 |     100 |
---------------------|---------|----------|---------|---------|-------------------
```

If we add `--coverageDirectory='./coverage'` to our jest command with `–coverage`, we still get the same information, but we also get a website with detailed info including source links.

## Summary

**_Jest_** is a powerful platform for designing suites of tests that cover all types and levels of code testing. Tests will run automatically when jest is run providing regression testing accross the application.

# Next Step

You may have noticed the odd syntax, before we continue, let's cover **_anonymous functions_** which will help us better understand the testing syntax.  
[Annonymous Functions &raquo;](../8-testing/anonymous.md)

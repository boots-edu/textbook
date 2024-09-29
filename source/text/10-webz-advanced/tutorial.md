---
layout: default
title: Webz Advanced Tutorial
nav_order: 10.5
parent: Advanced Webz
---

# Webz Advanced Tutorial
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
**Notifier** is a powerful class for facilitating inter-component data transfer in Webz.


# Webz Advanced Tutorial

This tutorial will walk you through building a more complex Webz application with multiple components and dynamic content. This will involve creating a new component, binding data between components, and handling events. By the end of this tutorial, you will have a better understanding of how to build more complex applications with Webz.

# The Image Editor

Our goal is to create a simple image editor to edit pixel art. We will create a component that displays an image and allows the user to edit the image by changing the color of individual pixels. We will also create a color picker component that allows the user to select a color to use for editing the image.

![Image Editor](../../assets/images/webz_tutorial/pixel_editor.png)

## 0) Setup

1. Use the Github classroom link provided in the original assignment on Canvas to create your own copy of the starter repo.
2. Clone the repo to your local machine in an appropriate directory.
3. Open the directory in VS Code, as you normally do.
4. Run `npm install` in the VS Code terminal to install the dependencies.

```bash
npm install
```

1. Run `npm run start` in the terminal to start the development server. This may take a few seconds to compile the code and start the server. If you need to stop the server, you can press `Ctrl+C` in the terminal.

<details markdown="block">
<summary>You can click here to see what the output looks like for us when the server starts successfully.</summary>

Keep in mind that the details of your output may look different!

```
> hw9-webz-advanced@0.0.1 start
> webpack serve

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://10.0.0.154:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::33d:1bcd:53b8:4c62]:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Users\acbar\Projects\cisc181\sites\hw9-webz-advanced\public' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
assets by path assets/ 110 KiB
  asset assets/babbage.jpg 63.8 KiB [emitted] [from: assets/babbage.jpg] [copied]
  asset assets/ada.jpg 45.9 KiB [emitted] [from: assets/ada.jpg] [copied]
  asset assets/.keep 0 bytes [emitted] [from: assets/.keep] [copied]
asset main.bundle.js 367 KiB [emitted] (name: main) 1 related asset
asset index.html 198 bytes [emitted]
runtime modules 27.4 KiB 13 modules
modules by path ./node_modules/ 219 KiB 41 modules
modules by path ./src/app/ 38.9 KiB
  modules by path ./src/app/boop-button/ 7.3 KiB 4 modules
  modules by path ./src/app/simple-calculator/ 12.2 KiB 4 modules
  modules by path ./src/app/box-editor/ 10.7 KiB 4 modules
  modules by path ./src/app/*.css 3.02 KiB 2 modules
  ./src/app/main.component.ts 5.21 KiB [built] [code generated]
  ./src/app/main.component.html 445 bytes [built] [code generated]
modules by path ./*.css 3.5 KiB
  ./styles.css 2.23 KiB [built] [code generated]
  ./node_modules/css-loader/dist/cjs.js!./styles.css 1.27 KiB [built] [code generated]
./wbcore/start.ts 265 bytes [built] [code generated]
webpack 5.91.0 compiled successfully in 4226 ms
```
</details>

6. Although we could now open your website in chrome at the localhost url `http://localhost:8080`, we will use the integrated debugger in VS Code. Activate this by pressing `F5` on your keyboard (or selecting the `Run` tab from the top menu and then clicking `Start Debugging`). This will open a new browser window with your application running. The debugger has a bunch of useful features, like setting breakpoints and inspecting variables - we'll talk more about them later on.

{: .note-title }
> Debugging in VS Code
>
> You can only activate the debugger if you have the server running. If you close the server, you will need to start it again before you can use the debugger.

7. You should now be able to see your website. Now we can start making the actual application.

## 1) Colors

Our goal is to eventually create a simple image editor, but that all begins with a representation of colors. We will create a `Color` class that represents a color as an RGB value. This will not be a `WebzComponent`, but a simple TypeScript class. We'll eventually create other components that use this class.

1. Create a new file in the `src/app` directory called `color.ts`. Create a class called `Color` with three private properties: `red`, `green`, and `blue`. These properties should be numbers that represent the red, green, and blue values of the color. The constructor should take three parameters, one for each property, in this order.

2. Define a method in the class named `toString()` that consumes nothing and returns a string. This method should return a string that represents the color in the format `rgb(red, green, blue)`. For example, if the color has `red=255`, `green=0`, and `blue=0`, the `toString()` method should return the string `rgb(255, 0, 0)`.

3. Define a method in the class named `asNumbers()` that consumes nothing and returns an array of three numbers. This method should return a newly created array with the red, green, and blue values of the color in that order.

Colors are usually described as a combination of red, green, and blue values. Each value can range from 0 to 255, where 0 means no color and 255 means the maximum amount of color. For example, `rgb(255, 0, 0)` is a bright red color, while `rgb(0, 255, 0)` is a bright green color.

However, writing out three numbers every time we want to represent a color can be cumbersome. Our application will use an additional color representation that is more user-friendly: a palette. A palette is an index of colors (usually an array of colors) that can be used to represent colors in a more user-friendly way. Specifically, we will use a palette of 9 colors (0-8) to represent colors in our image editor:

<table>
    <thead>
        <tr>
            <th>Palette Index</th>
            <th>Color Triple</th>
            <th>Name</th>
            <th>Preview</th>
        </tr>
    </thead>
    <tr><td>0</td><td><code>[255, 255, 255]</code></td><td>White</td><td><div style="width: 20px; height: 20px; background-color: rgb(255, 255, 255);"></div></td></tr>
    <tr><td>1</td><td><code>[0, 0, 0]</code></td><td>Black</td><td><div style="width: 20px; height: 20px; background-color: rgb(0, 0, 0);"></div></td></tr>
    <tr><td>2</td><td><code>[255, 0, 0]</code></td><td>Red</td><td><div style="width: 20px; height: 20px; background-color: rgb(255, 0, 0);"></div></td></tr>
    <tr><td>3</td><td><code>[0, 255, 0]</code></td><td>Green</td><td><div style="width: 20px; height: 20px; background-color: rgb(0, 255, 0);"></div></td></tr>
    <tr><td>4</td><td><code>[0, 0, 255]</code></td><td>Blue</td><td><div style="width: 20px; height: 20px; background-color: rgb(0, 0, 255);"></div></td></tr>
    <tr><td>5</td><td><code>[255, 255, 0]</code></td><td>Yellow</td><td><div style="width: 20px; height: 20px; background-color: rgb(255, 255, 0);"></div></td></tr>
    <tr><td>6</td><td><code>[255, 0, 255]</code></td><td>Magenta</td><td><div style="width: 20px; height: 20px; background-color: rgb(255, 0, 255);"></div></td></tr>
    <tr><td>7</td><td><code>[0, 255, 255]</code></td><td>Cyan</td><td><div style="width: 20px; height: 20px; background-color: rgb(0, 255, 255);"></div></td></tr>
    <tr><td>8</td><td><code>[128, 128, 128]</code></td><td>Gray</td><td><div style="width: 20px; height: 20px; background-color: rgb(128, 128, 128);"></div></td></tr>
</table>

This way, an image can be written as a 2D array of palette indices, where each index represents a color in the palette. For example, the following 2D array represents a 5x5 image of a smiley face, with the palette representation on the left and the RGB representation on the right:

<table>
    <tr>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
    </tr>
    <tr>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
    </tr>
    <tr>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
    </tr>
    <tr>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
    </tr>
    <tr>
        <td style="background-color: rgb(255, 255, 0);">5</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(0, 0, 0); color: white">0</td>
        <td style="background-color: rgb(255, 255, 0);">5</td>
    </tr>
</table>

## 5) Deploy Your Site

For now, this is a good place to stop. You have learned how to create components, bind values to elements, handle events, and style elements with Webz. You have also learned how to use TypeScript and CSS to create dynamic and interactive web pages. You can now build on this knowledge to create more complex and interesting web applications. But before we finish, let's deploy your site!

1. In order to let you build your site locally (despite the tests originally failing), we modified one of the build files a little bit. To deploy your site, you need to revert this change. Open the `tsconfig.json` file in the top-level of your project folder, and change line 13 to become:

```json
    "include": ["./src/**/*", "./wbcore/**/*", "./jest/**/*", "./test/**/*"],
```

{: .note-title }
> Editing Build Files
>
> We won't normally ask you to edit your build files; this is a special case just to make it easier to get started on the assignment.

1. Make sure you save all the files, commit your changes, and push them to Github.

2. Next, you need to enable Github Pages for your repository. Go to the repository on Github, click on the "Settings" tab.

![Github Settings](../../assets/images/webz_walkthrough/github_settings.png)

4. Scroll down to the "Github Pages" section. 

![Github Pages](../../assets/images/webz_walkthrough/pages_settings.png)

5. In the Source dropdown, select "GitHub Actions".

![Github Actions](../../assets/images/webz_walkthrough/github_actions.png)

6. Go to the Actions tab and you should see a "workflow" running. This workflow will build and deploy your site to Github Pages. Once the workflow is complete, you should see a link to your site at the top of the page.

![Check Workflow](../../assets/images/webz_walkthrough/check_workflow.png)

If the workflow doesn't seem to be running, click "Deploy dev build on main push" and then click "Run workflow". This will manually trigger the workflow to run, although you may have to reload the page to see it.

![Run Workflow](../../assets/images/webz_walkthrough/run_workflow.png)

You can check the progress of a workflow by clicking on it:

![Workflow Progress](../../assets/images/webz_walkthrough/workflow_progress.png)

Click on the "deploy" button on the left sidebar to see the details of the deployment.

![Deployment Details](../../assets/images/webz_walkthrough/click_again.png)

Assuming nothing goes wrong during deployment, the final step can be expanded to get the URL of your live site. Click on the URL to visit your site!

![Live Site](../../assets/images/webz_walkthrough/final_link.png)

If that URL is not visible, then you can also find the URL by going back to the "Settings" tab and scrolling down to the "Github Pages" section. The URL should be displayed there.

## 6) Submission

Once you have completed the tutorial and deployed your site, you can submit on GradeScope. If you have any questions or issues, please don't hesitate to ask for help!

In addition to passing our tests, you will also be graded on the successful deployment of your site. If the site is not deployed, you will not receive credit for the assignment. The TAs and instructors will review your site, your tests, and your code to ensure that you have completed the assignment correctly.


# Next Step

Next we'll learn more advanced features of Webz and how to use them [Advanced Webz &raquo;](../10-webz-advanced/index.md)
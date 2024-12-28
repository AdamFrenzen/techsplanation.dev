---
title: "What is Angular [object Object] and how to fix it?"
description: "Learn what Angular [obect Object] is and the solution to displaying the correct data."
pubDate: "Mar 08 2024"
heroImage: "/blog-placeholder-4.jpg"
---

## What is Angular `[object Object]`?

Angular `[object Object]` occurs when an entire object is rendered in the template.

This happens because variables are typecasted into strings when being rendered. `[object Object]` is the string value of an object due to objects being stored as memory references.

## Solutions to `[object Object]`:

### 1.) Reference object properties instead of entire object.

There aren't many use cases where an entire object with default object formatting is the desired output for a website. Instead of outputting the whole object refer to one of it's properties to allow the property values to be displayed instead of `[object Object]`.

```js
// component.ts
public obj = { fruit: 'apple' };
```

```html
<!-- component.html -->
<p>{{obj.fruit}}</p>
```

### 2.) Use the JSON pipe.

If you do want to display the entire object, which is especially handy for testing/bug fixing, utilizing the built in angular JSON pipe will allow the object to be displayed with default object formatting.

The HTML `<pre>` tag formats the object for easy visualization, but the pipe does work with all elements.

The JSON pipe is built in but requires the common module, so be sure to import the common module and have it listed in the component's imports.

```ts #2
// component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-component-name",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./component-name.component.html",
  styleUrl: "./component-name.component.css",
})
export class ComponentNameComponent {
  public obj = { fruit: "orange" };
}
```

```html
<!-- component.html -->
<pre>{{obj | json}}</pre>
```

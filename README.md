# DOM - knowledge check

## What is the DOM?

The Document Object Model. used to programatically change html using javascript

## How do you target the nodes you want to work with?

using the Document Object, you can use methods like querySelector, getElementById, getElementsByClassName to target the tags, ids, or classes of the node you want to work with

## How do you create an element in the DOM?

```js
let btn = document.createElement('button');
```

## How do you add an element to the DOM?

```js
document.body.appendChild(btn);
//only accepts node object
```

or

```js
document.body.append(btn);
//can append text or anything else
```

## How do you remove an element from the DOM?

```js
document.body.removeChild(btn);
```

## How can you alter an element in the DOM?

```js
btn.style.color = 'blue';
// for changing one style

btn.style.cssText = 'color: blue; background: white';
// for changing multiple styles
```

## When adding text to a DOM element, should you use textContent or innerHTML? Why?

always use textContent. it is dangerous to allow users to change the structure of your site with just javascript.

## Where should you include your Javascript tag in your HTML file when working with DOM nodes?

I always include my javascript right before the closing body tag, but you also can just use the 'defer' html attribute and include it anywhere.  
the reason for this is the html needs to be loaded before you start manipulating them.

## How do “events” and “listeners” work?

you can add event listeners to run logic when users interact with your elements

## What are three ways to use events in your code?

1. inline:

```html
<button onclick="alert('Hello World!')">click me</button>
```

2. handling the event in the JS file:

```html
<!-- html -->
<button id="btn">click me</button>
```

```js
// js
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World!');
```

3. using an event listener

```html
<!-- html -->
<button id="btn">click me</button>
```

```js
// js
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('Hello World!');
});
```

## Why are event listeners the preferred way to handle events?

using the first two methods, you can only run one thing per event. using an event listener, you can run multiple lines of code on one event listener

## What are the benefits of using named functions in your listeners?

they clean up your code. you should use them if you are going to run the same function in multiple places

```js
function suckADick() {
  console.log('fuck you');
}

btn.addEventListener('click' suckADick); // very important not include the ()
```

## How do you attach listeners to groups of nodes?

```html
<!-- html -->
<button class="buttons">1</button>
<button class="buttons">2</button>
<button class="buttons">3</button>
```

```js
// js
document.querySelectorAll('.buttons').forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent); // logs 1, 2, or 3, depending on which button you pressed
  });
});
```

## What is the difference between the return values of querySelector and querySelectorAll?

```js
const groupOfNodes = document.querySelectorAll('.buttons');
// returns a nodelist of the 3 nodes with the .button class

const firstNode = document.querySelector('.buttons');
// returns the first node with the .button class
```

## What does a “nodelist” contain?

an object (looks like an array) of all the nodes. if you need to use array methods you can convert it to an array using Array.from()

```js
const groupOfNodes = document.querySelectorAll('.buttons');
// NodeList(3) [button.buttons, button.buttons, button.buttons]

const arrayOfNodes = Array.from(groupOfNodes);
// (3) [button.buttons, button.buttons, button.buttons]
```

## Explain the difference between “capture” and “bubbling”.

event bubbling and event capturing are two ways of event propagation in the DOM API.

when an event occurs in an element inside another element and both elements have event handlers, the event propagation mode determines in which order the elements recieve the event.

with bubbling, the event is first captured and handles by the innermost elemnt and then propagated to outer elements

with capturing, the event is first captured by the outermost element and propagated to the inner elements.

we can use the `addEventListener(type, listener, useCapture)` to register event handlers for in either bubbling (default) or capturing mode (by passing in `useCapture: true` as the third argument).

### example:

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

In the structure above, assume that a click event occured in the li element.

In the capturing model, the event will be handles by the div first (click event handlers in the div will run first), then in the ul, then lastly in the target element, li.

In the bubbling model, the opposite will happen: the event will be first handled by the li, then by the ul, and at last by the div element

if you are ever confused, it is explained perfectly in this video: https://www.youtube.com/watch?v=XF1_MlZ5l6M

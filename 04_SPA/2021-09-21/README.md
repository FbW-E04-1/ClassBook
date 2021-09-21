# 2021-09-21

## Topics

- `textContent` vs `innerHTML`
- `document.children`, `element.children`
- `element.closest()`
- `element.matches()`
- `previousElementSibling`
- Node vs Element
- saving elements in variables to avoid querying multiple times
- creating DOM elements
- appending elements to the page
- filter, map methods on NodeList

### Methods to get a single element

- `document.getElementById()`
- `document.querySelector()`
- `element.querySelector()`

#### Example
```js
<h1 id="main-title">This is the main title</h1>
...
let mainTitleElement = document.getElementById('main-title');

let mainTitleElement1 = document.querySelector('#main-title');
```

### Methods to get NodeLists and HTMLCollections

- `document.getElementsByTagName()` -> live HTMLCollection
- `element.getElementsByTagName()` -> live HTMLCollection

- `document.getElementsByClassName()` -> live HTMLCollection
- `element.getElementsByClassName()` -> live HTMLCollection

- `document.querySelectorAll()` -> static NodeList
- `element.querySelectorAll()` -> static NodeList

- `document.getElementsByName()` -> live NodeList


## Resources

- [Live vs Static NodeLists and HTMLCollections](https://gomakethings.com/live-vs.-static-nodelists-and-htmlcollections-in-vanilla-js/) - Go Make Things article

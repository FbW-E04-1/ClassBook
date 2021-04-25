# Markdown

## Text and paragraphs

To write text in markdown, you simply write text with no special symbols.

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

To separate text in paragraphs, you have to put an empty line in between

```
This is a paragraph.

This is another paragraph.
```

This is a paragraph.

This is another paragraph.

---

## Headings

There are 6 levels of headings in markdown

```
# Heading
## Heading
### Heading
#### Heading
##### Heading
###### Heading
```

# Heading {#custom-id}
## Heading
### Heading
#### Heading
#### Heading
###### Heading

Another way of creating headings is to use  `=` or `_`.

```
Alternative Heading 1
===

Alternative Heading 2
---
```

---

# Text decorations 

We can use the `*` and `_` characters to make text bold, italic or both.

The symbols work the same way:
- 1 of them produces italic text
- 2 of them produce bold text

My preference is to use `**` for bold and `_` for italic.

```
_italic text_
*italic text*
__bold text__
**bold text**
**_bold italic text_**
__*bold italic text*__
```

_italic text_

*italic text*

__bold text__

**bold text**

**_bold italic text_**

__*bold italic text*__

### Strikethrough text

```
~~this is strikethrough~~
```

~~this is strikethrough~~

IMPORTANT: strikethrough doesn't work everywhere

---

## Horizontal lines

To create a horizontal line type 3 or more `-`

```
---
```

---


---

## Links

### Clickable url

```
<http://example.com>
```

<http://example.com>

### Text link

```
[My personal website](http://example.com)
```

[My personal website](http://example.com)

### Text link with title on hover

```
[My personal website](http://example.com "My website")
```

[My personal website](http://example.com "My website")

### Link with reference

```
Hello, my name is Carlo and you can reach me at [my website][1].
```

Hello, my name is Carlo and you can reach me at [my website][1].


[1]: http://example.com

---

## Images

The syntax to display an image is very similar to the one for links, but there is a `!` in front.

```
![alt text](https://unsplash.it/500/500?random "title of the image")
```

![](https://unsplash.it/500/500?random "title of the image")

### Image with a link

We cam combine the syntax to create a link with the one for an image, to get a clickable image. The idea is that where we normally put the text for the link, we put the syntax to display the image.

```
[![alt text](https://unsplash.it/500/500?random)](http://example.com)
```

[![alt text](https://unsplash.it/500/500?random)](http://example.com)


## Lists

### Unordered list

We can create an unordered list using any of those symbols: `-`, `*`, `+`

```
  - list item 1 
  - list item 2 
  - list item 3

  + list item 1 
  + list item 2 
  + list item 3

  * list item 1 
  * list item 2 
  * list item 3
```

- list item 1 
- list item 2 
- list item 3

+ list item 1 
+ list item 2 
+ list item 3

* list item 1 
* list item 2 
* list item 3

### Ordered list

```
1. list item 1
2. list item 2
3. list item 3
```

1. list item 1
2. list item 2
3. list item 3

```
1. list item 1
1. list item 2
1. list item 3
```

1. list item 1
1. list item 2
1. list item 3

### Nested lists

To nest list items, simply indent the items that you want to nest

```
1. list item 1
    1. nested
    1. nested
1. list item 3
1. list item 2
```

---

## Line breaks

To create 2 lines of texts, we can use the `<br>` or 2 spaces at the end of a line

```
One line<br>
Another line

One line  
Another line
```

One line<br>
Another line

One line  
Another line


---

## Block quotes

> This is a quote
> 
> me


## Code blocks


````
```
<h1>title</h1>
```
````

This is some code: `<h1>`


```
[link text](http://example.com)
```

## Tables

```
|product|price|
|:---|---:|
|T-shirt|9.99|
|Shoes|29.99|
|Hat|19.99|
```

|product|price|
|:---|---:|
|T-shirt|9.99|
|Shoes|29.99|
|Hat|19.99|

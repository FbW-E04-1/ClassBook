# 2021-06-15

## Topics

- CSS custom properties / CSS variables
- introduction to CSS preprocessors SASS / SCSS
- installing sass (`npm install -g sass`)
- SCSS variables
- assigning variables to other variables
- nesting CSS rules in SCSS
- SCSS partials
- @mixin / @include 
- @extend

## CSS Custom Properties / Variables

Variables are named containers where we can store values of any kind.

In CSS we can create variables inside of any style rule. In most of the cases we put them inside the `:root` pseudo-class.

```
:root {
    --primaryColor: tomato;
    --secondaryColor: teal;
}
```

To use a variable we use the keyword `var()` together with the variable name.


```
.container {
    background: var(--primaryColor);
}
```

## SASS / SCSS

### Installing SASS

From anywhere in the terminal run this command:

`npm install -g sass`

This will install `sass` globally in your system. Now you can run the command `sass` to generate a CSS file from a SCSS source file.

### Using SASS from the terminal

We can use the command `sass` to specify an input and an output file. The input file will be the source SCSS file and the output will be the CSS file that we want to link in the HTML page.

`sass input-file.scss style.css`

Very often we keep our SCSS files inside a separate folder. Imagining that the SCSS file is inside a folder called `scss` the command could be:

`sass scss/input-file.scss style.css`

### SCSS variables

SCSS variables are very similar to CSS variables, but we write them differently:

```
/* Define variable */
$primaryColor: tomato;

.box {
    /* Use the variable */
    background: $primaryColor;
}
```

SCSS variable always have the `$` in front of their name.

### SCSS partials: splitting a scss file into multiple files

We can split a scss file into smaller files, for better organisation and. We then use the `@import` statement to include all the files (partials) into the main one.

All the partial scss files that we want to import must be saved with an underscore at the beginning of the filename.

```
/* inside style.scss */

@import "reset"; /* this will import the file _reset.scss*/
@import "header";
@import "nav";
@import "button";
@import "footer";
```

### Nesting style rules 

### mixin / include

### extend

## Lesson

[Video recording](https://drive.google.com/file/d/1y7xiKnE4oyK8pPX2R1RDgAisuiS72hT3/view?usp=sharing)

### Notes

- 9:30 Variables - Explanation
- 10:32 SASS 
- 10:48 install SASS
- 13:50 SASS Recap 


## Resources

- [Slides](../../slides/UIB-scss.pdf)
- [Official SASS documentation](https://sass-lang.com/documentation)
- [@mixin vs @extend](https://stackoverflow.com/a/30744854), StackOverflow answer
- [When to use @mixin vs @extend](https://medium.com/stories-from-the-keen/when-to-use-extends-vs-mixins-in-sass-b09d55abd53), Medium article
- [@mixin vs @extend](https://kirillibrahim.medium.com/sass-mixin-vs-extend-ac4dfb9892c4), Medium article
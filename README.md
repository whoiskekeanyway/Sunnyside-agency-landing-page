# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page



### Links

- Solution URL: [https://www.frontendmentor.io/solutions/css-gridjavascript-flexbox-sUsOxUCse](https://www.frontendmentor.io/solutions/css-gridjavascript-flexbox-sUsOxUCse)
- Live Site URL: [https://frosty-hopper-ce82fa.netlify.app/](https://frosty-hopper-ce82fa.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript



### What I learned

What are Pseudo-classes?
A pseudo-class is used to define a special state of an element.

For example, it can be used to:

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

The addEventListener() method attaches an event handler to the specified element.

The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.



```html
<h1>Some HTML code I'm proud of</h1>
```

```css
::before {
  content: 'I am a pseudo-element';
}

::after {
  content: 'I am a pseudo-element';
}
```

```js
const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  //burger animation
  burger.classList.toggle("toggle");
});

I used this for the navbar toggle button, add active class to nav-list when clicked.
```




## Author

- Website - [scriptsandtags.com](https://www.scriptsandtags.com/)
- Frontend Mentor - [@whoiskekeanyway](https://www.frontendmentor.io/profile/whoiskekeanyway)
- Twitter - [@scriptsandtags](https://www.twitter.com/scriptsandtags)



# Sunnyside-agency-landing-page
# Sunnyside-agency-landing-page

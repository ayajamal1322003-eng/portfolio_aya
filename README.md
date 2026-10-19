# Project 04: Personal Portfolio (ex00)

Responsive personal portfolio of Aya Jamal Abu Zahra, built from scratch with HTML5, CSS3 and JavaScript ES6+ (no frameworks, templates or libraries).

## Run it
Open `index.html` in a browser. No build step.

## Structure
```
ex00/
├── index.html
├── style.css
├── script.js
├── assets/
└── README.md
```

## Sections
Navbar, Hero, About, Skills grid, Projects showcase (including Web Piscine Projects 00-03), Certificates, Journey, Hobbies, Contact form, Footer.

## JavaScript features
- Theme switcher: toggles `data-theme` on `<html>`; CSS variables restyle the whole page (espresso/gold dark theme, cream/gold light theme, with a taupe hero that matches the portrait).
- English / Arabic switcher: translation dictionary, with `lang` and `dir="rtl"` updated on `<html>`.
- Mobile menu, active-link highlighting while scrolling, and reveal-on-scroll with IntersectionObserver.
- Project details and certificate viewer using the `<dialog>` element.
- Contact form validation; it opens the visitor's email app with the message prefilled.
- Responsive layout with Flexbox, Grid and media queries; respects `prefers-reduced-motion`.

## Event lifecycle (theme switcher)
User clicks the button -> `click` event fires -> the callback reads the current `data-theme` and flips it -> the CSS variables for that theme apply and the page restyles.

# 1. [HTML BASICS] 🌎
HTML forms the structural foundation of web pages.

**EXAMPLE:**
```php
<?php
echo "I love pizza! <br>";
echo "It's really good!";
// This is comment
/* This is a multi-line comment */
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<br>
	<button>ORDER PIZZA</button>
</body>
</html>

```
---

# 2. [HYPERLINKS] 👈
Create clickable text or images that link to external or internal resources.

**EXAMPLE:**
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>
<a href="#section-id">Jump to Section</a>
```
- Use `target="_blank"` to open links in a new tab.
- Use `rel="noopener noreferrer"` for security when opening new tabs.

---

# 3. [IMAGES] 🖼️
Embedding responsive images and controlling their behavior.

**EXAMPLE:**
```html
<img src="image.jpg" alt="Description" style="max-width:100%; height:auto;">
```
- `max-width: 100%` makes images responsive.

---

# 4. [VIDEO] 🎥
Embed videos with responsive controls.

**EXAMPLE:**
```html
<video controls preload="metadata" poster="poster.jpg">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```
- Use `poster` for a placeholder image before the video plays.

---

# 5. [AUDIO] 🔊
Embed audio with controls.

**EXAMPLE:**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

---

# 6. [FORMS] 📝
Creating forms for data collection with validation attributes.

**EXAMPLE:**
```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>
```
- `type="email"` provides automatic email validation.
- `required` ensures the user must fill out the field before submission.

---

# 7. [FAVICONS] 🗿
Set a small icon that appears in the browser tab.

**EXAMPLE:**
```html
<link rel="icon" href="/path/to/favicon.ico" sizes="32x32" type="image/x-icon">
```

---

# 8. [TEXT FORMATTING] 💬
HTML provides tags for basic text formatting.

**EXAMPLE:**
```html
<p><strong>Bold text</strong> and <em>italic text</em>.</p>
```

---

# 9. [SPAN & DIV] 🏁
`span` and `div` are used for grouping elements.

**EXAMPLE:**
```html
<span>This is inline</span>
<div>This is a block element</div>
```

---

# 10. [LISTS] 📄
HTML supports ordered and unordered lists.

**EXAMPLE:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

---

# 11. [TABLES] 📊
Create tables with the `table` tag.

**EXAMPLE:**
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>
```

---

# 12. [BUTTONS] 🔘
Create buttons using the `button` or `input` tags.

**EXAMPLE:**
```html
<button type="button">Click Me!</button>
<input type="submit" value="Submit">
```

---

# 13. [HEADERS & FOOTERS] 🤯
The `header` and `footer` elements define the top and bottom sections of a webpage.

**EXAMPLE:**
```html
<header>
  <h1>Welcome to My Website</h1>
</header>
<footer>
  <p>&copy; 2024 My Website</p>
</footer>
```

---

# 14. [CSS BASICS] 🎨
CSS is used to style HTML elements.

**EXAMPLE:**
```html
<style>
  body {
    background-color: lightblue;
    font-family: Arial, sans-serif;
  }
</style>
```

---

# 15. [COLORS] 🖌️
Apply colors using various CSS properties.

**EXAMPLE:**
```html
<p style="color: red;">This text is red.</p>
<p style="background-color: yellow;">This background is yellow.</p>
```

---

# 16. [FONTS] 🔤
Change fonts with CSS.

**EXAMPLE:**
```html
<p style="font-family: 'Times New Roman', serif;">This is a paragraph with a custom font.</p>
```

---

# 17. [BORDERS] 🖼
Borders can be styled around HTML elements.

**EXAMPLE:**
```html
<p style="border: 2px solid black;">This paragraph has a border.</p>
```

---

# 18. [SHADOWS] 👥
Add shadows to elements with CSS.

**EXAMPLE:**
```html
<p style="text-shadow: 2px 2px 4px #000000;">Text shadow</p>
<div style="box-shadow: 5px 5px 10px grey;">Box shadow</div>
```

---

# 19. [MARGINS] ↔️
Margins create space outside of an element.

**EXAMPLE:**
```html
<p style="margin: 20px;">This paragraph has a 20px margin.</p>
```

---

# 20. [FLOAT] 🎈
`float` allows elements to be positioned left or right.

**EXAMPLE:**
```html
<img src="image.jpg" alt="Image" style="float: left; margin-right: 10px;">
<p>This text wraps around the image.</p>
```

---

# 21. [OVERFLOW] 🌊
Controls what happens when content overflows an element's box.

**EXAMPLE:**
```html
<div style="width: 200px; height: 100px; overflow: scroll;">
  This div has scrollable content inside.
</div>
```

---

# 22. [DISPLAY PROPERTY] 🧱
`display` controls the rendering of an element.

**EXAMPLE:**
```html
<p style="display: none;">This paragraph is hidden.</p>
<div style="display: inline;">This div is inline.</div>
```

---

# 23. [HEIGHT AND WIDTH] 📏
Set the size of elements with height and width properties.

**EXAMPLE:**
```html
<div style="width: 200px; height: 100px; background-color: lightgrey;">
  This div has a width of 200px and height of 100px.
</div>
```

---

# 24. [POSITIONS] 🎯
The `position` property defines how elements are positioned in a document.

**EXAMPLE:**
```html
<div style="position: relative; top: 20px; left: 30px;">
  This div is relatively positioned 20px down and 30px right.
</div>

<div style="position: absolute; top: 50px; left: 50px;">
  This div is absolutely positioned from the top left of its container.
</div>
```

---

# 25. [BACKGROUND IMAGES] 🏙️
Use `background-image` to set images as the background for an element.

**EXAMPLE:**
```html
<div style="background-image: url('background.jpg'); height: 200px; width: 300px;">
  This div has a background image.
</div>
```

---

# 26. [COMBINATORS] ➕
Combinators specify relationships between selectors in CSS.

**EXAMPLE:**
```css
/* Descendant combinator */
div p {
  color: red;
}

/* Child combinator */
div > p {
  color: blue;
}

/* Adjacent sibling combinator */
h1 + p {
  color: green;
}

/* General sibling combinator */
h1 ~ p {
  color: orange;
}
```

---

# 27. [PSEUDO-CLASSES] ☟
Pseudo-classes define the special states of an element.

**EXAMPLE:**
```css
/* Changes the color of a link when hovered */
a:hover {
  color: red;
}

/* Styles the first child of an element */
p:first-child {
  font-weight: bold;
}
```

---

# 28. [PSEUDO-ELEMENTS] ✔
Pseudo-elements style specific parts of an element.

**EXAMPLE:**
```css
/* Adds content before an element */
p::before {
  content: "Note: ";
  color

: red;
}
```

---

# 29. [MEDIA QUERIES] 📱
Apply styles based on device characteristics.

**EXAMPLE:**
```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
- Media queries adjust styles based on the device’s screen size.

---

# 30. [TRANSITIONS] 🎞️
CSS transitions animate changes in properties.

**EXAMPLE:**
```css
button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: blue;
}
```

---

# 31. [ANIMATIONS] 🎬
Create complex animations with keyframes.

**EXAMPLE:**
```css
@keyframes slidein {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

div {
  animation: slidein 2s ease-in-out;
}
```

---

# 32. [FLEXBOX] 💪
A powerful layout system for controlling the alignment and spacing of elements.

**EXAMPLE:**
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
- `justify-content` controls horizontal spacing.
- `align-items` controls vertical alignment.

---

# 33. [GRID LAYOUT] 📊
Grid-based layout for creating complex page layouts.

**EXAMPLE:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```
- `repeat(3, 1fr)` creates 3 equal-width columns.
- `gap` controls the spacing between grid items.

---

# 34. [CSS VARIABLES] 🎨
Define reusable values in CSS.

**EXAMPLE:**
```css
:root {
  --main-color: #3498db;
}

p {
  color: var(--main-color);
}
```
- CSS variables (`--main-color`) allow you to reuse the same value throughout your stylesheet.

---

# 35. [Z-INDEX] ⬆️
Control the stacking order of elements.

**EXAMPLE:**
```css
div {
  position: absolute;
  z-index: 10;
}
```
- A higher `z-index` makes the element appear on top.

---

# 36. [BOX MODEL] 📦
The CSS box model defines how an element's size is determined by its content, padding, border, and margin.

**EXAMPLE:**
```css
div {
  width: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```
- The final width of the `div` is `150px` (100px + 10px padding on each side + 5px border on each side).

---

# 37. [POSITIONING] 📍
Defines how elements are positioned relative to the page or their container.

**EXAMPLE:**
```css
div {
  position: fixed;
  top: 10px;
  right: 0;
}
```
- `fixed` keeps an element in place relative to the viewport, even when scrolling.

---

# 38. [ARIA] 🦽
Accessible Rich Internet Applications (ARIA) make web content more accessible to users with disabilities.

**EXAMPLE:**
```html
<button aria-label="Close Menu">X</button>
```
- `aria-label` improves accessibility for screen readers.

---

# 39. [SEMANTIC HTML] 🔎
Use semantic elements for better structure and accessibility.

**EXAMPLE:**
```html
<article>
  <h2>Blog Post Title</h2>
  <p>This is a blog post.</p>
</article>
```
- Use elements like `<article>`, `<section>`, `<header>`, and `<footer>` for clear, semantic markup.

---
# reusable-dropdown-menu

A simple and reusable dropdown menu for web projects.  
Made with ❤️ by Akshat Singh.

---

## Installation

Install via npm:

```bash
npm install reusable-dropdown-menu
```

## Usage

1. Import in your project

In your HTML file, add:

```bash
<link rel="stylesheet" href="./node_modules/reusable-dropdown-menu-akshat/style.css" />

<script type="module">
  import { setupDropdown } from "reusable-dropdown-menu-akshat";

  // initialize dropdown
  setupDropdown();
</script>
```

2. Add dropdown markup

```bash
<div class="dropdown">
  <button class="dropdown-btn">Dropdown</button>
  <ul class="menu-items hidden">
    <li class="menu-item"><a href="#">Item 1</a></li>
    <li class="menu-item"><a href="#">Item 2</a></li>
    <li class="menu-item"><a href="#">Item 3</a></li>
  </ul>
</div>
```

## CSS

This package comes with a simple stylesheet.
The key class is:

```bash
.hidden {
  display: none;
}
```

## Development / Testing locally

If you want to test before publishing:

1. Create a new test project:

```bash
mkdir dropdown-test
cd dropdown-test
npm init -y
```

2. Link your local package:

```bash
npm link ../reusable-dropdown-menu
```

3. Install and test in HTML:

```bash
<script type="module">
  import { setupDropdown } from "reusable-dropdown-menu-akshat";
  setupDropdown();
</script>
```

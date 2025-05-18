# edriso.github.io

Personal resume website built with plain HTML and Tailwind CSS, optimized for clarity, responsiveness, and easy customization. Hosted on GitHub Pages.

## Features

* Clean, minimal, and professional design
* Fully responsive for all devices
* Tailwind CSS v4.1 CLI for fast, efficient styling
* Prettier integrated for automatic formatting

## Setup

### Prerequisites

* Node.js and npm installed

### Installation & Build

```bash
git clone https://github.com/edriso/edriso.github.io.git
cd edriso.github.io
npm install
npm run dev    # development mode with watch
npm run build  # production build
```

Open `index.html` to preview locally.

## Structure

```
src/          # Tailwind input CSS
dist/         # Generated CSS output
index.html    # Main resume page
package.json  # npm scripts & dependencies
tailwind.config.js  # Tailwind config
.prettierrc   # Prettier config
```

## Customization

* Customize `src/input.css` to adjust styles, colors, and Tailwind directives
* Edit `index.html` to update content structure and page layout

## Deployment

Push to `main` or `gh-pages` branch to deploy on GitHub Pages.

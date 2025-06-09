# edriso.github.io

Personal resume website built with plain HTML and Tailwind CSS, optimized for clarity, responsiveness, and easy customization. Hosted on GitHub Pages.

## Features

- **Download as PDF**: Easily download your resume as a PDF with `html2pdf.js`.
- **Print-Friendly**: Optimized layout for printing, ensuring your resume looks great both digitally and on paper.
- **Sleek and Professional Design**: A clean, modern, and minimal design for a polished look.
- **Fully Responsive**: Optimized for all screen sizes, ensuring a great experience on desktops, tablets, and smartphones.
- **Easy Deployment**: Quick and hassle-free deployment on platforms like GitHub Pages with minimal setup.
- **Tailwind CSS v4.1**: Fast, efficient styling with the power of Tailwind CSS for a flexible and maintainable design.
- **Prettier Integration**: Automatic code formatting with Prettier for consistent and readable code.

## Setup

### Prerequisites

- Node.js and npm installed

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
src/          # Tailwind input CSS and JS files
dist/         # Compiled output
index.html    # Main resume page
package.json  # npm scripts & dependencies
tailwind.config.js  # Tailwind CSS configuration file
.prettierrc   # Prettier configuration file
```

## Customization

- Content: Update `index.html` to modify your resume content, structure, and layout
- Styling: Modify `src/input.css` to adjust styles, colors, and Tailwind CSS directives
- JavaScript: Edit `src/script.js` to customize the functionality (e.g., PDF download logic)

## Deployment

Push to `main` branch to deploy on GitHub Pages.

# edriso.github.io

Personal resume website built with plain HTML and Tailwind CSS, optimized for clarity, responsiveness, and easy customization. Hosted on GitHub Pages.

## Multi-Role Resume

The resume supports multiple role variants so you can share a tailored version with different recruiters. The active role is driven by a `?r=` query param and persisted in `localStorage` — the same system used by the portfolio site.

| Param          | Role shown                     |
| -------------- | ------------------------------ |
| `?r=software`  | Software Engineer (default)    |
| `?r=fullstack` | Fullstack Engineer             |
| `?r=frontend`  | Frontend Developer             |
| `?r=php`       | PHP/Laravel Developer          |
| `?r=magento`   | E-commerce / Magento Developer |

**How it works:**

1. Visit `/?r=magento` — sets `localStorage` and shows the Magento variant.
2. Subsequent visits to `/` (no param) — reads `localStorage` and keeps showing Magento.
3. To switch roles, visit with the new param (e.g. `/?r=frontend`).
4. To reset to default, visit `/?r=software`.

**To add or edit a role**, update the `ROLES` object in `src/script.js` — that is the single source of truth for all role titles, descriptions, and skills. No other files need changing.

The experience, education, and projects sections are shared across all roles and live directly in `index.html`.

## Features

- **Multi-role**: Tailored resume content per recruiter audience via `?r=` param + `localStorage`.
- **Download as PDF**: Download using the browser's native print dialog.
- **Print-Friendly**: Optimized layout for printing.
- **Fully Responsive**: Works across all screen sizes.
- **Tailwind CSS v4**: Fast, efficient styling.
- **Prettier + Husky**: Automatic formatting enforced on every commit.

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

> `npm install` automatically sets up the Husky pre-commit hook via the `prepare` script — no manual step needed.

Open `index.html` to preview locally.

## Pre-commit Hook

Husky runs lint-staged on every commit, formatting all staged `*.{html,css,js,json,md}` files with Prettier automatically.

## Structure

```
src/
  script.js     # Role data + detection + DOM injection logic
  input.css     # Tailwind input CSS
  assets/       # favicon
dist/           # Compiled CSS output (generated, do not edit)
index.html      # Resume shell (experience, education, projects)
package.json    # npm scripts & dependencies
.prettierrc     # Prettier configuration
.prettierignore # Files excluded from formatting
```

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Format + start Tailwind watch mode       |
| `npm run build`   | Format + compile Tailwind for production |
| `npm run format`  | Format all source files with Prettier    |
| `npm run prepare` | Set up Husky hooks (runs on npm install) |

## Customization

- **Role content** (title, about, skills): Edit `ROLES` in `src/script.js`
- **Shared sections** (experience, education, projects): Edit `index.html`
- **Styling**: Modify `src/input.css`

## Deployment

Push to `main` branch to deploy on GitHub Pages.

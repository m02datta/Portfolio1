# Mahek Datta — Personal Portfolio

A premium, modern, elegant and fully responsive personal portfolio website for **Mahek Datta**, a B.Tech Computer Science Engineering student.

Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide React**.

Light pastel **pink + lavender** theme. Single-page application with section-based navigation, ready to deploy on **Netlify** or **GitHub Pages**.

## Live demo

- Netlify: _add your Netlify URL here after deploy_
- GitHub Pages: https://m02datta.github.io/mahek-portfolio/

## Quick start

```bash
npm install      # install dependencies
npm run dev      # run locally
npm run build    # production build -> /dist
npm run preview  # preview the production build
```

## Deploy

### Netlify (recommended)

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and pick the repo.
3. Build command: `npm run build` · Publish directory: `dist`.
4. Deploy.

A `netlify.toml` is included with these settings already configured.

### GitHub Pages

```bash
npm run build
npm run preview
```

Then push the `dist/` folder to the `gh-pages` branch (or use the `actions/configure-pages` workflow).

## Project structure

```
src/
  components/   # reusable UI components
  sections/     # page sections
  App.jsx
  main.jsx
  index.css
```

## Credits

Designed and developed for Mahek Datta.

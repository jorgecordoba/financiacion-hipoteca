# Financiación Hipoteca — landing page

Static one-page site for Financiación Hipoteca. Hosted on GitHub Pages.

## Stack
- Plain HTML (`index.html`)
- Tailwind CSS, compiled to `tailwind.css` (no runtime CDN)
- Web3Forms for contact form submissions

## Edit & rebuild

```bash
npm install        # one-time
npm run dev        # watches index.html and rebuilds tailwind.css on change
# or
npm run build      # one-off minified build
```

Commit both `index.html` and `tailwind.css` after changes — GitHub Pages serves the static files directly.

## Deploy
Pushes to `main` are served automatically by GitHub Pages (Settings → Pages → branch `main` / root).

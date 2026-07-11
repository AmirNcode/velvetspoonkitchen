# Velvet Spoon Kitchen

A lightweight static website for Mandana's personal catering business in Vancouver.

## Development

Open `index.html` directly in a browser, or serve the folder with any static server:

```sh
python3 -m http.server 8080
```

## Netlify Forms

The inquiry form is a plain HTML Netlify Form named `inquiry`. Netlify will detect it at deploy time because the form includes `name="inquiry"`, `method="POST"`, and `data-netlify="true"`.

Replace the Instagram card links in `index.html` with Mandana's selected post URLs when available.

# Art Portfolio

This repository contains a simple art portfolio website. It now uses a fixed
left sidebar for navigation. The menu links are:

- **Gallery** – with subpages for weave, print, embroidery, knit and garment
- **CV**
- **About Me** (index.html)
- **Contact**

## Adding Images

Place your artwork in subfolders of the `images` directory. Each folder should
be named after the gallery page (for example `images/weave` or
`images/garment`). After adding or removing files, run `node generate-manifests.js`
to update the `manifest.json` files used by the pages. Every gallery page will
automatically load all images from its matching folder with
`assets/js/gallery.js`.

## Running Locally

Run `node generate-manifests.js` whenever you add new images so that the
`manifest.json` files are updated. After that, simply open `index.html` in a
browser to view the site.

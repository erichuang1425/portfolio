# Art Portfolio

This repository contains a simple art portfolio website. It now uses a fixed
left sidebar for navigation. The menu links are:

- **Gallery** – with subpages for weave, print, embroidery, knit and garment
- **CV**
- **About Me** (index.html)
- **Contact**

## Adding Images

Store your artwork in the `images` directory and list each file in the
corresponding gallery page. Every gallery page defines a small JavaScript array
named `artworks` describing the images for that section. Update the array with
new objects containing the file path, title, year, medium and dimensions. The
page will automatically render all items using `assets/js/gallery.js`.

## Running Locally

No special build steps are required. Simply open `index.html` in a browser to view the site.

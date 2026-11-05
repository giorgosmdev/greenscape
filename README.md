# GreenScape

A one-page website for **GreenScape**, a fictional eco-friendly landscaping company. It's a concept project: the homepage was designed in Figma and built with Astro and plain CSS.

**Live site:** [giorgosmdev.github.io/greenscape](https://giorgosmdev.github.io/greenscape/)

> GreenScape isn't a real business. The links and the pricing buttons are placeholders and go nowhere, and the site is set to `noindex` so search engines leave it out.

## The page

The homepage has these sections, top to bottom:

- **Hero**: headline, intro and a call to action, next to two images
- **As featured in**: a strip of publication names
- **Services**: four service cards beside a large image
- **How it works**: three numbered steps
- **Projects**: two project cards
- **Testimonials**: three client quotes with photos
- **Social proof**: a single statement
- **Pricing**: three packages, with the middle one highlighted

There's also a custom 404 page.

## Built with

- [Astro](https://astro.build) 7
- Plain CSS, organised with cascade layers and custom properties. No CSS framework.
- Astro's Fonts API, serving local Lora and Metropolis files
- `astro:assets` for responsive WebP images
- GitHub Pages, deployed with GitHub Actions

There's no client-side framework. The only JavaScript is a small script for the mobile menu.

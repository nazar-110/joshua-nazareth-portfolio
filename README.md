# Joshua Nazareth — Portfolio

A systems-focused portfolio for Joshua Nazareth, showcasing work across robotics,
autonomous navigation, LiDAR perception, sensor fusion, ROS 2, and applied machine
learning.

**Live site:** [nazar-110.github.io/joshua-nazareth-portfolio](https://nazar-110.github.io/joshua-nazareth-portfolio/)

## Design

The visual system is inspired by the editorial scale and technical precision of
Palantir's public website, while using original copy, a Joshua-specific cobalt
palette, custom CSS system diagrams, and no Palantir brand assets.

## Built with

- Next.js 16 and React 19
- TypeScript and CSS
- vinext for the local and Cloudflare-compatible build
- Next.js static export for GitHub Pages
- GitHub Actions for automatic deployment

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run build
npm run lint
```

The deployment workflow publishes every push to `main` through GitHub Pages.

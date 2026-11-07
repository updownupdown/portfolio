# jamescarmichael.ca

James Carmichael's portfolio. Vite, React and TypeScript, with the Outfit font self-hosted.

```sh
npm install
npm run dev        # local server
npm run build      # type-check and build to dist/
```

Projects live in `src/projects.ts`: one entry per card, with its colours, cover, description, details, play link and gallery. Images are WebP files in `public/img/`.

## Staging and deploys

The site is served from the `gh-pages` branch.

- `npm run deploy:next` builds with relative asset paths and publishes it to `gh-pages` under `next/`, leaving the live site at the root untouched. Preview it at `/next/` under wherever the Pages site is served.
- Going live replaces the root with the new build. That step is done separately, once the staged version is approved.

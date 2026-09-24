# OceanEyes startup canvas

Public, read-only browser view of the Obsidian canvas, rendered with the `json-canvas-viewer` package listed by [JSON Canvas](https://jsoncanvas.org/docs/apps/). The Obsidian-maintained [JSON Canvas repository](https://github.com/obsidianmd/jsoncanvas) provides the file format and a fixed demo, not a viewer for arbitrary `.canvas` files. This package is an independent viewer that follows the JSON Canvas specification. It is bundled locally, so the page does not load code from a third-party CDN.

## Updating the published canvas

Replace `OceanEyes startup.canvas` with the latest version from the Obsidian vault and push it to `main`. GitHub Actions copies that file into the site build and deploys the updated page.

The repository and Pages site are public. The repository contains the original `.canvas` file. See [third-party notices](THIRD_PARTY_NOTICES.md) for the viewer's MIT license.

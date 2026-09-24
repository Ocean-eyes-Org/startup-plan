import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

await mkdir("public", { recursive: true });
await copyFile("OceanEyes startup.canvas", "public/OceanEyes startup.canvas");

// Keep long JSON Canvas connections from making oversized bends at the viewport edges.
const rendererPath = "node_modules/json-canvas-viewer/dist/kernel/Renderer.js";
const renderer = await readFile(rendererPath, "utf8");
const originalPadding = ")*.5,60,300)";
const reducedPadding = ")*.5,60,100)";

if (!renderer.includes(reducedPadding)) {
  const matches = renderer.split(originalPadding).length - 1;
  if (matches !== 1) {
    throw new Error("Could not apply the JSON Canvas Viewer edge curve adjustment.");
  }
  await writeFile(rendererPath, renderer.replace(originalPadding, reducedPadding));
}

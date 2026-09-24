import { copyFile, mkdir } from "node:fs/promises";

await mkdir("public", { recursive: true });
await copyFile("OceanEyes startup.canvas", "public/OceanEyes startup.canvas");

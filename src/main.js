import { Controls, fetchCanvas, JSONCanvasViewer, Minimap, parser } from "json-canvas-viewer";
import "./style.css";

const container = document.getElementById("viewer");
const status = document.getElementById("status");

try {
  const canvas = await fetchCanvas(`${import.meta.env.BASE_URL}OceanEyes%20startup.canvas`);

  const viewer = new JSONCanvasViewer(
    {
      container,
      canvas,
      parser,
      theme: "light",
      pointeract: {
        proControlSchema: true,
        lockControlSchema: true,
        zoomFactor: 0.001,
      },
    },
    [Controls, Minimap],
  );
  await new Promise(requestAnimationFrame);
  await new Promise(requestAnimationFrame);
  const initialScale = Math.min(0.72, Math.max(0.45, container.clientWidth / 1750));
  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;
  viewer.zoomToScale(initialScale, { x: centerX, y: centerY });
  await new Promise(requestAnimationFrame);
  viewer.panToCoords({
    x: centerX - 30 * initialScale,
    y: centerY - 500 * initialScale,
  });

  document.getElementById("overview").addEventListener("click", () => viewer.resetView());

  status.remove();
} catch (error) {
  status.textContent = `Could not load the canvas: ${error.message}`;
  status.classList.add("error");
}

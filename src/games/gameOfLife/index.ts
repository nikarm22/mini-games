import { CanvasRenderer } from "../../shared/renderer/CanvasRenderer/index";
import { GameOfLife } from "./GameOfLife"; 

const renderer = new CanvasRenderer(document.body, [{ name: "click" }]);

const game = new GameOfLife(10, renderer);
let paused = false;

renderer.uiEvent.subscribe((data) => {
  game.click(data.clientX, data.clientY);
});

document.body.addEventListener("keyup", e => {
  if (e.key === "p")
    paused = !paused;
});

game.render();

setInterval(() => {
  if (!paused) {
    game.tick();
  }
  game.render();
}, 50);


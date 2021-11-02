import * as PIXI from "pixi.js";
import "./style.css";
import { pink } from "material-colors-ts";
import { Game } from "./Game";
import {
  BACKGROUND_COLOR,
  COLUMNS,
  PLAY_AREA_BACKGROUND_COLOR,
  ROWS,
} from "./settings";

const element = document.querySelector<HTMLDivElement>("#pixi")!;

const app = new PIXI.Application({
  resizeTo: element,
  backgroundColor: BACKGROUND_COLOR,
});
element.appendChild(app.view);

const oneThirdWidth = app.screen.width / 3;
const blockSize = Math.min(oneThirdWidth / COLUMNS, app.screen.height / ROWS);
const playAreaWidth = blockSize * COLUMNS;
const playAreaHeight = blockSize * ROWS;
const topLeftX = (app.screen.width - playAreaWidth) / 2;
const topLeftY = (app.screen.height - playAreaHeight) / 2;

const gridBackground = new PIXI.Graphics()
  .beginFill(PLAY_AREA_BACKGROUND_COLOR)
  .drawRect(0, 0, playAreaWidth, playAreaHeight);
gridBackground.position.set(topLeftX, topLeftY);
app.stage.addChild(gridBackground);

const container = new PIXI.Container();
container.position.set(topLeftX, topLeftY);
app.stage.addChild(container);

const onGameOver = () => {
  container.removeChildren();
  const message = new PIXI.Text("Game Over\nClick to play again", {
    align: "center",
    fill: pink[100],
    dropShadow: true,
    dropShadowDistance: 1,
  });
  message.position.set(app.screen.width / 2, app.screen.height / 2);
  message.pivot.set(message.width / 2, message.height / 2);
  app.stage.addChild(message);
  app.stage.interactive = true;
  app.stage.on("pointerdown", () => {
    app.stage.interactive = false;
    app.stage.removeChild(message);
    game.start();
  });
};

const game = new Game(container, blockSize, onGameOver);
game.start();

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    game.moveLeft();
  } else if (event.key === "ArrowRight") {
    game.moveRight();
  } else if (event.key === "ArrowDown") {
    game.moveDown();
  } else if (event.key === "ArrowUp") {
    game.rotate();
  } else if (event.key === " ") {
    game.drop();
  }
});

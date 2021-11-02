import * as PIXI from "pixi.js";
import "./style.css";
import { blueGrey } from "material-colors-ts";
import {
  TetrominoI,
  TetrominoJ,
  TetrominoL,
  TetrominoO,
  TetrominoS,
  TetrominoT,
  TetrominoZ,
} from "./Tetromino";
import { TetrominoView } from "./TetrominoView";
import { Game } from "./Game";

const BACKGROUND_COLOR = PIXI.utils.string2hex(blueGrey[500]);
const PLAY_AREA_BACKGROUND_COLOR = PIXI.utils.string2hex(blueGrey[900]);

const element = document.querySelector<HTMLDivElement>("#pixi")!;

const app = new PIXI.Application({
  resizeTo: element,
  backgroundColor: BACKGROUND_COLOR,
});
element.appendChild(app.view);

const oneThirdWidth = app.screen.width / 3;
const blockSize = Math.min(oneThirdWidth / 10, app.screen.height / 20);
const playAreaWidth = blockSize * 10;
const playAreaHeight = blockSize * 20;
const topLeftX = (app.screen.width - playAreaWidth) / 2;
const topLeftY = (app.screen.height - playAreaHeight) / 2;

const gridBackground = new PIXI.Graphics()
  .beginFill(PLAY_AREA_BACKGROUND_COLOR)
  .drawRect(0, 0, playAreaWidth, playAreaHeight);
gridBackground.position.set(topLeftX, topLeftY);
app.stage.addChild(gridBackground);

const game = new Game(app, blockSize, { x: topLeftX, y: topLeftY });

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

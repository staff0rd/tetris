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

const tetrominoes = [
  new TetrominoI(0),
  new TetrominoJ(1, 2),
  new TetrominoL(2, 4),
  new TetrominoO(3, 6),
  new TetrominoS(4, 8),
  new TetrominoT(5, 10),
  new TetrominoZ(6, 12),
];

const views = tetrominoes.map(
  (t) => new TetrominoView(t, blockSize, { x: topLeftX, y: topLeftY })
);
views.forEach((v) => app.stage.addChild(v));

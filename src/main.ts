import * as PIXI from "pixi.js";
import "./style.css";
import { blueGrey } from "material-colors-ts";

const BACKGROUND_COLOR = PIXI.utils.string2hex(blueGrey[500]);
const PLAY_AREA_BACKGROUND_COLOR = PIXI.utils.string2hex(blueGrey[900]);

const element = document.querySelector<HTMLDivElement>("#pixi")!;

const app = new PIXI.Application({
  resizeTo: element,
  backgroundColor: BACKGROUND_COLOR,
});
element.appendChild(app.view);

const oneThirdWidth = app.screen.width / 3;
const gridBackground = new PIXI.Graphics()
  .beginFill(PLAY_AREA_BACKGROUND_COLOR)
  .drawRect(0, 0, oneThirdWidth, app.screen.height);
gridBackground.position.set(oneThirdWidth, 0);
app.stage.addChild(gridBackground);

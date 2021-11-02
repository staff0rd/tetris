import * as PIXI from "pixi.js";
import "./style.css";

const element = document.querySelector<HTMLDivElement>("#pixi")!;

const app = new PIXI.Application({
  resizeTo: element,
  backgroundColor: 0xff0000,
});
element.appendChild(app.view);

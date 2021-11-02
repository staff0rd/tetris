import { Tetromino } from "./Tetromino";
import * as PIXI from "pixi.js";
import { Point } from "./Point";

export class TetrominoView extends PIXI.Container {
  constructor(
    private tetromino: Tetromino,
    private blockSize: number,
    private origin: Point
  ) {
    super();
    this.draw();
  }
  draw() {
    this.removeChildren();
    this.tetromino.blocks.forEach((block) => {
      const blockView = new PIXI.Graphics();
      blockView.beginFill(this.tetromino.color);
      blockView.drawRect(0, 0, this.blockSize, this.blockSize);
      blockView.endFill();
      blockView.x = block.x * this.blockSize + this.origin.x;
      blockView.y = block.y * this.blockSize + this.origin.y;
      this.addChild(blockView);
    });
  }
}

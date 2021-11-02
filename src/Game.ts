import * as PIXI from "pixi.js";
import { Point } from "./Point";
import { TetrominoView } from "./TetrominoView";

export class Game {
  blocks: TetrominoView[] = [];
  currentBlock: TetrominoView;
  constructor(private app: PIXI.Application, blockSize: number, origin: Point) {
    this.currentBlock = TetrominoView.createRandom(blockSize, origin);
    app.stage.addChild(this.currentBlock);
    this.blocks.push(this.currentBlock);
  }

  moveLeft() {
    this.currentBlock.moveLeft();
  }
  moveRight() {
    this.currentBlock.moveRight();
  }
  moveDown() {
    this.currentBlock.moveDown();
  }
  rotate() {
    this.currentBlock.rotate();
  }
  drop() {
    // TODO
  }
}

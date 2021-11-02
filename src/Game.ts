import * as PIXI from "pixi.js";
import { Tetromino } from "./Tetromino";

export class Game {
  tetrominoes: Tetromino[] = [];
  currentTetromino: Tetromino;
  constructor(private container: PIXI.Container, private blockSize: number) {
    this.currentTetromino = Tetromino.getRandomTetromino();
    this.tetrominoes.push(this.currentTetromino);
  }

  canMoveLeft(): boolean {
    return true;
  }
  moveLeft() {
    if (this.canMoveLeft()) {
      this.currentTetromino.moveLeft();
      this.draw();
    }
  }
  moveRight() {
    this.currentTetromino.moveRight();
    this.draw();
  }
  moveDown() {
    this.currentTetromino.moveDown();
    this.draw();
  }
  rotate() {
    this.currentTetromino.rotate();
    this.draw();
  }
  drop() {
    // TODO
  }

  draw() {
    this.container.removeChildren();
    this.tetrominoes.forEach((tetromino) => {
      tetromino.blocks.forEach((block) => {
        const blockView = new PIXI.Graphics();
        blockView.beginFill(tetromino.color);
        blockView.drawRect(0, 0, this.blockSize, this.blockSize);
        blockView.endFill();
        blockView.x = block.x * this.blockSize;
        blockView.y = block.y * this.blockSize;
        this.container.addChild(blockView);
      });
    });
  }
}

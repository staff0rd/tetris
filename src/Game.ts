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
    return this.currentTetromino.blocks.every((block) => block.x > 0);
  }

  canMoveRight(): boolean {
    return this.currentTetromino.blocks.every((block) => block.x < 9);
  }

  canMoveDown(): boolean {
    return this.currentTetromino.blocks.every((block) => block.y < 19);
  }

  canRotate(): boolean {
    const rotated = this.currentTetromino.getTranslated(
      this.currentTetromino.getRotated()
    );
    return rotated.every(
      (block) => block.x >= 0 && block.x < 10 && block.y >= 0 && block.y < 20
    );
  }
  moveLeft() {
    if (this.canMoveLeft()) {
      this.currentTetromino.moveLeft();
      this.draw();
    }
  }
  moveRight() {
    if (this.canMoveRight()) {
      this.currentTetromino.moveRight();
      this.draw();
    }
  }
  moveDown() {
    if (this.canMoveDown()) {
      this.currentTetromino.moveDown();
      this.draw();
    }
  }
  rotate() {
    if (this.canRotate()) {
      this.currentTetromino.rotate();
      this.draw();
    }
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

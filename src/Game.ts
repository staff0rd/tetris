import * as PIXI from "pixi.js";
import { Point } from "./Point";
import { COLUMNS, ROWS } from "./settings";
import { Tetromino } from "./Tetromino";

export class Game {
  tetrominoes: Tetromino[] = [];
  currentTetromino!: Tetromino;
  private isGameOver = false;

  constructor(
    private container: PIXI.Container,
    private blockSize: number,
    private onGameOver: () => void
  ) {}

  start() {
    this.addBlock();
  }

  private addBlock() {
    if (!this.isGameOver) {
      if (this.currentTetromino) {
        this.tetrominoes.push(this.currentTetromino);
      }
      this.currentTetromino = Tetromino.getRandomTetromino();
      if (this.collides(this.currentTetromino.blocks)) {
        this.onGameOver();
        this.isGameOver = true;
      }
      this.draw();
    }
  }

  private canMoveLeft(): boolean {
    return (
      this.currentTetromino.blocks.every((block) => block.x > 0) &&
      this.tetrominoes.every((tetromino) =>
        tetromino.blocks.every(
          (block) =>
            !this.currentTetromino.blocks.some(
              (currentBlock) =>
                currentBlock.x === block.x + 1 && currentBlock.y === block.y
            )
        )
      )
    );
  }

  private canMoveRight(): boolean {
    return (
      this.currentTetromino.blocks.every((block) => block.x < COLUMNS - 1) &&
      this.tetrominoes.every((tetromino) =>
        tetromino.blocks.every(
          (block) =>
            !this.currentTetromino.blocks.some(
              (currentBlock) =>
                currentBlock.x === block.x - 1 && currentBlock.y === block.y
            )
        )
      )
    );
  }

  private canMoveDown(): boolean {
    return (
      this.currentTetromino.blocks.every((block) => block.y < ROWS - 1) &&
      this.tetrominoes.every((tetromino) =>
        tetromino.blocks.every(
          (block) =>
            !this.currentTetromino.blocks.some(
              (currentBlock) =>
                currentBlock.x === block.x && currentBlock.y === block.y - 1
            )
        )
      )
    );
  }

  private canRotate(): boolean {
    const rotated = this.currentTetromino.getTranslated(
      this.currentTetromino.getRotated()
    );
    return (
      rotated.every(
        (block) =>
          block.x >= 0 && block.x < COLUMNS && block.y >= 0 && block.y < ROWS
      ) && !this.collides(rotated)
    );
  }

  private collides(blocks: Point[]) {
    return !this.tetrominoes.every((tetromino) => {
      return tetromino.blocks.every((block) => {
        return !blocks.some(
          (currentBlock) =>
            currentBlock.x === block.x && currentBlock.y === block.y
        );
      });
    });
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
      return true;
    }
    return false;
  }

  private forceDown() {
    if (!this.moveDown()) {
      this.addBlock();
    }
  }

  rotate() {
    if (this.canRotate()) {
      this.currentTetromino.rotate();
      this.draw();
    }
  }

  drop() {
    while (this.canMoveDown()) {
      this.moveDown();
    }
    this.addBlock();
  }

  private draw() {
    this.container.removeChildren();
    this.tetrominoes.concat(this.currentTetromino).forEach((tetromino) => {
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

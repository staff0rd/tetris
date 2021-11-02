import * as PIXI from "pixi.js";
import { Point } from "./Point";
import { COLUMNS, ROWS } from "./settings";
import { Block, Tetromino } from "./Tetromino";

export class Game {
  blocks: Block[] = [];
  currentPiece: Tetromino | undefined;
  private isGameOver = true;
  private timer: NodeJS.Timer | undefined;

  constructor(
    private container: PIXI.Container,
    private blockSize: number,
    private onGameOver: () => void,
    private delay = 500
  ) {}

  start() {
    this.blocks.length = 0;
    this.container.removeChildren();
    this.currentPiece = undefined;
    this.isGameOver = false;
    this.addBlock();
  }

  private restartTimer = () => {
    this.timer && clearInterval(this.timer);
    if (!this.isGameOver) {
      this.timer = setInterval(() => {
        this.forceDown();
      }, this.delay);
    }
  };

  private addBlock() {
    this.restartTimer();
    if (!this.isGameOver) {
      if (this.currentPiece) {
        this.blocks.push(...this.currentPiece.blocks);
      }
      this.removeFullLines();
      this.currentPiece = Tetromino.getRandomTetromino();
      if (this.collides(this.currentPiece.blocks)) {
        this.onGameOver();
        this.isGameOver = true;
      }
      this.draw();
    }
  }

  private removeFullLines() {
    let y = ROWS - 1;
    do {
      if (this.blocks.filter((b) => b.y === y).length === COLUMNS) {
        this.blocks = this.blocks.filter((b) => b.y !== y);
        this.blocks.filter((b) => b.y < y).forEach((b) => b.y++);
      } else {
        y--;
      }
    } while (y > 0);
  }

  private canMoveLeft(): boolean {
    return (
      this.currentPiece!.blocks.every((block) => block.x > 0) &&
      this.blocks.every(
        (block) =>
          !this.currentPiece!.blocks.some(
            (currentBlock) =>
              currentBlock.x === block.x + 1 && currentBlock.y === block.y
          )
      )
    );
  }

  private canMoveRight(): boolean {
    return (
      this.currentPiece!.blocks.every((block) => block.x < COLUMNS - 1) &&
      this.blocks.every(
        (block) =>
          !this.currentPiece!.blocks.some(
            (currentBlock) =>
              currentBlock.x === block.x - 1 && currentBlock.y === block.y
          )
      )
    );
  }

  private canMoveDown(): boolean {
    return (
      this.currentPiece!.blocks.every((block) => block.y < ROWS - 1) &&
      this.blocks.every(
        (block) =>
          !this.currentPiece!.blocks.some(
            (currentBlock) =>
              currentBlock.x === block.x && currentBlock.y === block.y - 1
          )
      )
    );
  }

  private canRotate(): boolean {
    const rotated = this.currentPiece!.getTranslated(
      this.currentPiece!.getRotated()
    );
    return (
      rotated.every(
        (block) =>
          block.x >= 0 && block.x < COLUMNS && block.y >= 0 && block.y < ROWS
      ) && !this.collides(rotated)
    );
  }

  private collides(blocks: Point[]) {
    return !this.blocks.every((block) => {
      return !blocks.some(
        (currentBlock) =>
          currentBlock.x === block.x && currentBlock.y === block.y
      );
    });
  }

  moveLeft() {
    if (this.canMoveLeft()) {
      this.currentPiece!.moveLeft();
      this.draw();
    }
  }

  moveRight() {
    if (this.canMoveRight()) {
      this.currentPiece!.moveRight();
      this.draw();
    }
  }

  moveDown() {
    this.restartTimer();
    if (this.canMoveDown()) {
      this.currentPiece!.moveDown();
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
      this.currentPiece!.rotate();
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
    this.blocks.concat(this.currentPiece!.blocks).forEach((block) => {
      const blockView = new PIXI.Graphics();
      blockView.beginFill(block.color);
      blockView.drawRect(0, 0, this.blockSize, this.blockSize);
      blockView.endFill();
      blockView.x = block.x * this.blockSize;
      blockView.y = block.y * this.blockSize;
      this.container.addChild(blockView);
    });
  }
}

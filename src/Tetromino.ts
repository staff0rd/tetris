import * as PIXI from "pixi.js";
import { range } from "lodash";

import {
  cyan,
  blue,
  orange,
  yellow,
  green,
  purple,
  red,
} from "material-colors-ts";
import { Point } from "./Point";
import { STARTING_ROW } from "./settings";

export abstract class Tetromino {
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }

  public get blocks(): Point[] {
    return this.getTranslated(this._blocks);
  }

  private _color: number;
  public get color(): number {
    return this._color;
  }

  constructor(
    protected _x: number,
    protected _y: number,
    color: string,
    protected _blocks: Point[],
    private pivot: Point
  ) {
    this._color = PIXI.utils.string2hex(color);
  }

  getTranslated(blocks: Point[]) {
    return blocks.map((block) => ({
      x: block.x + this._x,
      y: block.y + this._y,
    }));
  }

  getRotated() {
    return this._blocks.map((block) => {
      const x = this.pivot.x - block.y + this.pivot.y;
      const y = this.pivot.y + block.x - this.pivot.x;
      return { x, y };
    });
  }

  rotate() {
    this._blocks = this.getRotated();
  }

  static getRandomTetromino() {
    const randomTetromino = Math.floor(Math.random() * 7);
    switch (randomTetromino) {
      case 0:
        return new TetrominoI();
      case 1:
        return new TetrominoJ();
      case 2:
        return new TetrominoL();
      case 3:
        return new TetrominoO();
      case 4:
        return new TetrominoS();
      case 5:
        return new TetrominoT();
      case 6:
        return new TetrominoZ();
      default:
        throw new Error("Will never reach this");
    }
  }
  moveLeft() {
    this._x--;
  }
  moveRight() {
    this._x++;
  }
  moveDown() {
    this._y++;
  }
  move(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  getShape(): number[][] {
    const max = Math.max(
      ...this._blocks.map((block) => block.x),
      ...this._blocks.map((block) => block.y)
    );
    const grid: number[][] = range(max + 1).map(() =>
      range(max + 1).map(() => 0)
    );
    this._blocks.forEach((block) => {
      grid[block.y][block.x] = 1;
    });
    return grid;
  }
}

export class TetrominoI extends Tetromino {
  constructor(x = 3, y = STARTING_ROW) {
    super(
      x,
      y,
      cyan[500],
      [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ],
      { x: 1.5, y: 1.5 }
    );
  }
}

export class TetrominoJ extends Tetromino {
  constructor(x = 4, y = STARTING_ROW) {
    super(
      x,
      y,
      blue[500],
      [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      { x: 1, y: 1 }
    );
  }
}

export class TetrominoL extends Tetromino {
  constructor(x = 4, y = STARTING_ROW) {
    super(
      x,
      y,
      orange[500],
      [
        { x: 2, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      { x: 1, y: 1 }
    );
  }
}

export class TetrominoO extends Tetromino {
  constructor(x = 4, y = STARTING_ROW) {
    super(
      x,
      y,
      yellow[500],
      [
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
      ],
      { x: 1.5, y: 0.5 }
    );
  }
}

export class TetrominoS extends Tetromino {
  constructor(x = 4, y = STARTING_ROW) {
    super(
      x,
      y,
      green[500],
      [
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
      ],
      { x: 1, y: 1 }
    );
  }
}

export class TetrominoT extends Tetromino {
  constructor(x = 4, y = STARTING_ROW) {
    super(
      x,
      y,
      purple[500],
      [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      { x: 1, y: 1 }
    );
  }
}

export class TetrominoZ extends Tetromino {
  constructor(x = 4, y = STARTING_ROW) {
    super(
      x,
      y,
      red[500],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ],
      { x: 1, y: 1 }
    );
  }
}

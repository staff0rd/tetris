import * as PIXI from "pixi.js";
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

export abstract class Tetromino {
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }

  public get blocks(): Point[] {
    return this._blocks.map((block) => ({
      x: block.x + this._x,
      y: block.y + this._y,
    }));
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
  rotate() {
    console.log("before", this._blocks);
    // rotate 90 degrees about pivot
    this._blocks = this._blocks.map((block) => {
      const x = this.pivot.x - block.y + this.pivot.y;
      const y = this.pivot.y + block.x - this.pivot.x;
      return { x, y };
    });
    console.log("after", this._blocks);
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
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this._blocks.forEach((block) => {
      console.log(grid);
      grid[block.y][block.x] = 1;
    });
    return grid;
  }
}

export class TetrominoI extends Tetromino {
  constructor(x = 5, y = 0) {
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
  constructor(x = 5, y = 0) {
    super(
      x,
      y,
      blue[500],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 0, y: -1 },
      ],
      { x: 1.5, y: 1.5 }
    );
  }
}

export class TetrominoL extends Tetromino {
  constructor(x = 5, y = 0) {
    super(
      x,
      y,
      orange[500],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: -1 },
      ],
      { x: 1.5, y: 1.5 }
    );
  }
}

export class TetrominoO extends Tetromino {
  constructor(x = 5, y = 0) {
    super(
      x,
      y,
      yellow[500],
      [
        { x: 0, y: 0 },
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
      ],
      { x: 2.5, y: 1.5 }
    );
  }
}

export class TetrominoS extends Tetromino {
  constructor(x = 5, y = 0) {
    super(
      x,
      y,
      green[500],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 2, y: -1 },
      ],
      { x: 1.5, y: 1.5 }
    );
  }
}

export class TetrominoT extends Tetromino {
  constructor(x = 5, y = 0) {
    super(
      x,
      y,
      purple[500],
      [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: -1 },
      ],
      { x: 1.5, y: 1.5 }
    );
  }
}

export class TetrominoZ extends Tetromino {
  constructor(x = 5, y = 0) {
    super(
      x,
      y,
      red[500],
      [
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ],
      { x: 1.5, y: 1.5 }
    );
  }
}

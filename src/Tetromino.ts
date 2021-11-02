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

export type Block = { x: number; y: number; color: number };

export class Tetromino {
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }

  public get blocks(): Block[] {
    return this.getTranslated(this._blocks);
  }

  constructor(
    protected _x: number,
    protected _y: number,
    protected _blocks: Block[],
    private pivot: Point
  ) {}

  getTranslated(blocks: Block[]) {
    return blocks.map((block) => ({
      x: block.x + this._x,
      y: block.y + this._y,
      color: block.color,
    }));
  }

  getRotated() {
    return this._blocks.map((block) => {
      const x = this.pivot.x - block.y + this.pivot.y;
      const y = this.pivot.y + block.x - this.pivot.x;
      return { x, y, color: block.color };
    });
  }

  rotate() {
    this._blocks = this.getRotated();
  }

  static getRandomTetromino() {
    const randomTetromino = Math.floor(Math.random() * 7);
    switch (randomTetromino) {
      case 0:
        return Tetromino.createI();
      case 1:
        return Tetromino.createJ();
      case 2:
        return Tetromino.createL();
      case 3:
        return Tetromino.createO();
      case 4:
        return Tetromino.createS();
      case 5:
        return Tetromino.createT();
      case 6:
        return Tetromino.createZ();
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
  private static create(
    x: number,
    y: number,
    color: string,
    blocks: Point[],
    pivot: Point
  ) {
    return new Tetromino(
      x,
      y,
      blocks.map((block) => ({
        ...block,
        color: PIXI.utils.string2hex(color),
      })),
      pivot
    );
  }

  static createI(x = 3, y = STARTING_ROW) {
    return Tetromino.create(
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

  static createJ(x = 4, y = STARTING_ROW) {
    return Tetromino.create(
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

  static createL(x = 4, y = STARTING_ROW) {
    return Tetromino.create(
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

  static createO(x = 4, y = STARTING_ROW) {
    return Tetromino.create(
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

  static createS(x = 4, y = STARTING_ROW) {
    return Tetromino.create(
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

  static createT(x = 4, y = STARTING_ROW) {
    return Tetromino.create(
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
  static createZ(x = 4, y = STARTING_ROW) {
    return Tetromino.create(
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

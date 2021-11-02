import {
  cyan,
  blue,
  orange,
  yellow,
  green,
  purple,
  red,
} from "material-colors-ts";

type Block = { x: number; y: number };

export abstract class Tetromino {
  private _x: number = 10;
  public get x(): number {
    return this._x;
  }

  private _y: number = 0;
  public get y(): number {
    return this._y;
  }

  constructor(protected color: string, protected blocks: Block[]) {}
  rotate() {}
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
}

class TetrominoI extends Tetromino {
  constructor() {
    super(cyan[500], [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ]);
  }
}

class TetrominoJ extends Tetromino {
  constructor() {
    super(blue[500], [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: -1 },
    ]);
  }
}

class TetrominoL extends Tetromino {
  constructor() {
    super(orange[500], [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: -1 },
    ]);
  }
}

class TetrominoO extends Tetromino {
  constructor() {
    super(yellow[500], [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ]);
  }
}

class TetrominoS extends Tetromino {
  constructor() {
    super(green[500], [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ]);
  }
}

class TetrominoT extends Tetromino {
  constructor() {
    super(purple[500], [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: -1 },
    ]);
  }
}

class TetrominoZ extends Tetromino {
  constructor() {
    super(red[500], [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ]);
  }
}

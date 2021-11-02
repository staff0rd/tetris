import { Game } from "./Game";
import * as PIXI from "pixi.js";
import { TetrominoO } from "./Tetromino";

describe("game", () => {
  describe("collides", () => {
    it("should be true when items collide", () => {
      const game = new Game(new PIXI.Container(), 20, () => {});
      const firstBlock = new TetrominoO();
      game["currentTetromino"] = firstBlock;
      game.moveDown();
      game["tetrominoes"] = [firstBlock];
      const secondBlock = new TetrominoO();
      game["currentTetromino"] = secondBlock;
      const result = game["collides"](secondBlock.blocks);
      expect(result).toBe(true);
    });
  });
});

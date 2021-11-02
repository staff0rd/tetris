import { Game } from "./Game";
import * as PIXI from "pixi.js";
import { Tetromino } from "./Tetromino";

describe("game", () => {
  describe("collides", () => {
    it("should be true when items collide", () => {
      const game = new Game(new PIXI.Container(), 20, () => {});
      const firstBlock = Tetromino.createO();
      game["currentPiece"] = firstBlock;
      game.moveDown();
      game["blocks"] = firstBlock.blocks;
      const secondBlock = Tetromino.createO();
      game["currentPiece"] = secondBlock;
      const result = game["collides"](secondBlock.blocks);
      expect(result).toBe(true);
    });
  });
});

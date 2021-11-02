import { TetrominoI } from "./Tetromino";

describe("Tetromino", () => {
  describe("TetrominoI", () => {
    it("should return correct shape", () => {
      const tetromino = new TetrominoI();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoI();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ]);
    });
    it("should rotate twice", () => {
      const tetromino = new TetrominoI();
      tetromino.rotate();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ]);
    });
    it("should rotate three times", () => {
      const tetromino = new TetrominoI();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ]);
    });
    it("should rotate four times back to original", () => {
      const tetromino = new TetrominoI();
      const beforeRotation = tetromino.getShape();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual(beforeRotation);
    });
  });
});

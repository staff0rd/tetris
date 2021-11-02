import { Tetromino } from "./Tetromino";

describe("Tetromino", () => {
  describe("TetrominoI", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createI();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createI();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ]);
    });
    it("should rotate twice", () => {
      const tetromino = Tetromino.createI();
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
      const tetromino = Tetromino.createI();
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
      const tetromino = Tetromino.createI();
      const beforeRotation = tetromino.getShape();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual(beforeRotation);
    });
  });
  describe("TetrominoJ", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createJ();
      expect(tetromino.getShape()).toEqual([
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createJ();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
      ]);
    });
  });
  describe("TetrominoL", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createL();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createL();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ]);
    });
  });
  describe("TetrominoO", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createO();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createO();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0],
      ]);
    });
  });

  describe("TetrominoS", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createS();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createS();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1],
      ]);
    });
  });
  describe("TetrominoT", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createT();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createT();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ]);
    });
  });
  describe("TetrominoZ", () => {
    it("should return correct shape", () => {
      const tetromino = Tetromino.createZ();
      expect(tetromino.getShape()).toEqual([
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = Tetromino.createZ();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ]);
    });
    it("should rotate four times back to original", () => {
      const tetromino = Tetromino.createZ();
      const beforeRotation = tetromino.getShape();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual(beforeRotation);
    });
  });
});

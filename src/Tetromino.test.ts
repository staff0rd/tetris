import {
  TetrominoI,
  TetrominoJ,
  TetrominoL,
  TetrominoO,
  TetrominoS,
  TetrominoT,
  TetrominoZ,
} from "./Tetromino";

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
  describe("TetrominoJ", () => {
    it("should return correct shape", () => {
      const tetromino = new TetrominoJ();
      expect(tetromino.getShape()).toEqual([
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoJ();
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
      const tetromino = new TetrominoL();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoL();
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
      const tetromino = new TetrominoO();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoO();
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
      const tetromino = new TetrominoS();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoS();
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
      const tetromino = new TetrominoT();
      expect(tetromino.getShape()).toEqual([
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoT();
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
      const tetromino = new TetrominoZ();
      expect(tetromino.getShape()).toEqual([
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ]);
    });
    it("should rotate once", () => {
      const tetromino = new TetrominoZ();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual([
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ]);
    });
    it("should rotate four times back to original", () => {
      const tetromino = new TetrominoZ();
      const beforeRotation = tetromino.getShape();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      tetromino.rotate();
      expect(tetromino.getShape()).toEqual(beforeRotation);
    });
  });
});

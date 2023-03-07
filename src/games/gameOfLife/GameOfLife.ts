import { AbstractRenderer, Shape } from "../../shared/renderer/AbstractRenderer";

export class GameOfLife {
  private renderer: AbstractRenderer;
  private cellSize: number;
  private width: number;
  private height: number;
  private grid: boolean[][];

  constructor(cellSize: number, renderer: AbstractRenderer) {
    this.renderer = renderer;
    this.cellSize = cellSize;

    const boardSize = this.renderer.getSize();

    this.width = Math.trunc(boardSize.width / this.cellSize);
    this.height = Math.trunc(boardSize.height / this.cellSize);

    this.grid = this.createGrid(this.width, this.height);

    console.log(this.width, this.height);
  }

  public render(): void {
    this.renderer.clear({ color: "white" });
    this.grid.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        if (cell) {
          this.renderer.draw(Shape.RECTANGLE, {
            color: "red",
            x: colIdx * this.cellSize,
            y: rowIdx * this.cellSize,
            width: this.cellSize,
            height: this.cellSize,
          });
        }
      });
    });
  }

  public tick(): void {
    const newGrid = this.createGrid(this.width, this.height);
    this.grid.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        const neighbours = this.getActiveNeighbours(rowIdx, colIdx);
        if (cell) {
          if (neighbours === 2 || neighbours === 3)
            newGrid[rowIdx][colIdx] = true;
        } else if (neighbours === 3) {
          newGrid[rowIdx][colIdx] = true;
        }
      });
    });
    this.grid = newGrid;
  }

  public click(x: number, y: number): void {
    const col = Math.trunc(x / this.cellSize);
    const row = Math.trunc(y / this.cellSize);
    this.grid[row][col] = !this.grid[row][col];
  }

  // Privates
  private createGrid(width: number, height: number): boolean[][] {
    return Array(height).fill(0).map(() => Array(width).fill(false));
  }

  private getActiveNeighbours(x: number, y: number): number {
    let neighbours = 0;
    for (let i = -1; i <= 1; i++)
      for (let j = -1; j <= 1; j++)
        if (i || j)
          if (this.grid[x+i] && this.grid[x+i][y+j])
            neighbours++
    return neighbours;
  }
}

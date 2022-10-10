import Cell from "./Cell";

export default class SpreadSheet {
  private readonly MAX_ROWS: number;
  private readonly MAX_COLS: number;
  private readonly fontFamily: string;
  private readonly fontSize: number;
  private readonly isBold: boolean;

  private cells: Cell[][];

  constructor() {
    // In a real app, these values should not be hardcoded here.
    // They should be read from a configuration file.
    this.MAX_ROWS = 3;
    this.MAX_COLS = 3;
    this.fontFamily = "Times New Roman";
    this.fontSize = 12;
    this.isBold = false;

    this.cells = new Array<Array<Cell>>(this.MAX_ROWS);

    for (let row = 0; row < this.cells.length; row++)
      this.cells[row] = new Array<Cell>(this.MAX_COLS);

    this.generateCells();
  }

  public setContent(row: number, col: number, content: string): void {
    this.ensureCellExists(row, col);

    this.cells[row][col].setContent(content);
  }

  public setFontFamily(row: number, col: number, fontFamily: string): void {
    this.ensureCellExists(row, col);

    this.cells[row][col].setFontFamily(fontFamily);
  }

  private ensureCellExists(row: number, col: number): void {
    if (row < 0 || row >= this.MAX_ROWS)
      throw new Error("illegal argument");

    if (col < 0 || col >= this.MAX_COLS)
      throw new Error("illegal argument");
  }

  private generateCells(): void {
    for (var row = 0; row < this.MAX_ROWS; row++)
      for (var col = 0; col < this.MAX_COLS; col++) {
        const cell = new Cell(row, col);
        cell.setFontFamily(this.fontFamily);
        this.cells[row][col] = cell;
      }
  }

  public render(): void {
    for (var row = 0; row < this.MAX_ROWS; row++)
      for (var col = 0; col < this.MAX_COLS; col++)
        this.cells[row][col].render();
  }
}

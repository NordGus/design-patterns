import Cell from "./Cell";
import CellContext from "./CellContext";
import CellContextFactory from "./factories/CellContextFactory";

export default class SpreadSheet {
  private readonly MAX_ROWS: number;
  private readonly MAX_COLS: number;
  private cells: Cell[][];
  private cellContextFactory: CellContextFactory;

  constructor(cellContextFactory: CellContextFactory) {
    // In a real app, these values should not be hardcoded here.
    // They should be read from a configuration file.
    this.MAX_ROWS = 3;
    this.MAX_COLS = 3;
    this.cellContextFactory = cellContextFactory;

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
    
    const cell = this.cells[row][col];
    const currentContext = cell.getContext();
    const newContext = this.cellContextFactory.getContext(fontFamily, currentContext.getFontSize(), currentContext.bold());

    cell.setContext(newContext);
  }

  private ensureCellExists(row: number, col: number): void {
    if (row < 0 || row >= this.MAX_ROWS)
      throw new Error("illegal argument");

    if (col < 0 || col >= this.MAX_COLS)
      throw new Error("illegal argument");
  }

  private generateCells(): void {
    for (var row = 0; row < this.MAX_ROWS; row++)
      for (var col = 0; col < this.MAX_COLS; col++)
        this.cells[row][col] = new Cell(row, col, this.getDefaultContext());
  }

  private getDefaultContext(): CellContext {
    return this.cellContextFactory.getContext("Times New Roman", 12, false);
  }

  public render(): void {
    for (var row = 0; row < this.MAX_ROWS; row++)
      for (var col = 0; col < this.MAX_COLS; col++)
        this.cells[row][col].render();
  }
}

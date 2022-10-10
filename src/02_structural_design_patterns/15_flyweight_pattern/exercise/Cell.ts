import CellContext from "./CellContext";

export default class Cell {
  private readonly row: number;
  private readonly column: number;
  private content: string;
  private context: CellContext;

  constructor(row: number, column: number, context: CellContext) {
    this.row = row;
    this.column = column;
    this.context = context;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public getContext(): CellContext {
    return this.context;
  }

  public setContext(context: CellContext): void {
    this.context = context;
  }

  public render(): void {
    console.log(`(${this.row}, ${this.column}): ${this.content} [${this.context.getFontFamily()}]`);
  }
}

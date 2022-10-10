export default class Cell {
  private readonly row: number;
  private readonly column: number;
  private content: string;
  private fontFamily: string;
  private fontSize: number;
  private isBold: boolean;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public getFontFamily(): string {
    return this.fontFamily;
  }

  public setFontFamily(fontFamily: string): void {
    this.fontFamily = fontFamily;
  }

  public getFontSize(): number {
    return this.fontSize;
  }

  public setFontSize(fontSize: number): void {
    this.fontSize = fontSize;
  }

  public bold(): boolean {
    return this.isBold;
  }

  public setBold(bold: boolean): void {
    this.isBold = bold;
  }

  public render(): void {
    console.log(`(${this.row}, ${this.column}): ${this.content} [${this.fontFamily}]`);
  }
}

import CellContextFactory from "./factories/CellContextFactory";
import SpreadSheet from "./SpreadSheet";

export default class Demo {
  public static show(): void {
    const cellContextFactory = new CellContextFactory();
    const sheet = new SpreadSheet(cellContextFactory);
    sheet.setContent(0, 0, "Hello");
    sheet.setContent(1, 0, "World");
    sheet.setFontFamily(0, 0, "Arial");
    sheet.render();
  }
}

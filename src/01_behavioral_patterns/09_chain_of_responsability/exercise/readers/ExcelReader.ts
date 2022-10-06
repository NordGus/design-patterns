import DataReader from "../DataReader";

export default class ExcelReader extends DataReader {
    protected override getExtension(): string {
        return ".xls";
    }

    protected override readFile(fileName: string): void {
        console.log("Reading data from an Excel spreadsheet.");
    }
}
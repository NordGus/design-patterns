import DataReader from "../DataReader";

export default class NumbersReader extends DataReader {
    protected override getExtension(): string {
        return ".numbers";
    }

    protected override readFile(fileName: string): void {
        console.log("Reading data from a Numbers spreadsheet.");
    }
}
import DataReader from "../DataReader";

export default class QuickBooksReader extends DataReader {
    protected override getExtension(): string {
        return ".qbw";
    }

    protected override readFile(fileName: string): void {
        console.log("Reading data from a QuickBooks file.");
    }
}
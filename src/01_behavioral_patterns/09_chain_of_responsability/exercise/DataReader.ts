export default class DataReader {
    public read(fileName: string): void {
        if (fileName.endsWith(".xls")) {
            console.log("Reading data from an Excel spreadsheet.");
        }
        else if (fileName.endsWith(".numbers")) {
            console.log("Reading data from a Numbers spreadsheet.");
        }
        else if (fileName.endsWith(".qbw")) {
            console.log("Reading data from a QuickBooks file.");
        }
        else
            throw new Error("File format not supported.");
    }
}
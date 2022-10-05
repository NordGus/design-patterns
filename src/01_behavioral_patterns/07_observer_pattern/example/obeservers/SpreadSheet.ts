import IObserver from "../interfaces/IObeserver";

export default class SpreadSheet implements IObserver {
    public update(): void {
        console.log("Spreadsheet has been notified");
    }
}
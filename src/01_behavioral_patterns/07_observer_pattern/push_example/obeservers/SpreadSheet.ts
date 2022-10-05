import IObserver from "../interfaces/IObeserver";

export default class SpreadSheet implements IObserver<number> {
    public update(value: number): void {
        console.log("Spreadsheet has been notified with " + value);
    }
}
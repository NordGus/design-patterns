import DataSource from "../DataSource";
import IObserver from "../interfaces/IObeserver";

export default class SpreadSheet implements IObserver {
    private dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    public update(): void {
        console.log("Spreadsheet has been notified with " + this.dataSource.getValue());
    }
}
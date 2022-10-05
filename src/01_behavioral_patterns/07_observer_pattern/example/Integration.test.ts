import DataSource from "./DataSource";
import Chart from "./obeservers/Chart";
import SpreadSheet from "./obeservers/SpreadSheet";

describe("Notification mechanism to update multiple elements in an app", () => {
    const dataSource = new DataSource();
    const sheet1 = new SpreadSheet();
    const sheet2 = new SpreadSheet();
    const chart = new Chart();
    const spy = jest.spyOn(console, "log");

    beforeAll(() => {
        dataSource.attach(sheet1);
        dataSource.attach(sheet2);
        dataSource.attach(chart);
    });

    afterAll(() => {
        jest.clearAllMocks()

        dataSource.detach(sheet1);
        dataSource.detach(sheet2);
        dataSource.detach(chart);
    });

    it("should set a new value for the data source", () => {
        dataSource.setValue(42);
        expect(dataSource.getValue()).toBe(42);
    });

    it("should have notified all observers", () => {
        expect(spy).toHaveBeenCalledTimes(3);
    });

    it("should have notified all spreadsheets", () => {
        expect(spy).toHaveBeenNthCalledWith(1, "Spreadsheet has been notified");
        expect(spy).toHaveBeenNthCalledWith(2, "Spreadsheet has been notified");
    });
    
    it("should have notified the chart", () => {
        expect(spy).toHaveBeenNthCalledWith(3, "Chart has been notified");
    });
});
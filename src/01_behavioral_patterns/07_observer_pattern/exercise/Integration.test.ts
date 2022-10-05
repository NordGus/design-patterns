import StatusBar from "./StatusBar";
import Stock from "./Stock";
import StockListView from "./StockListView";

describe("Notification mechanism to update multiple elements in an app", () => {
    const stock1 = new Stock("AAPL", 146.10);
    const stock2 = new Stock("MSFT", 248.88);
    const statusBar = new StatusBar();
    const listView = new StockListView();
    const spy = jest.spyOn(console, "log");

    beforeAll(() => {
        statusBar.addStock(stock1);
        statusBar.addStock(stock2);
        listView.addStock(stock1);
        listView.addStock(stock2);
    });

    afterAll(() => jest.clearAllMocks());

    it("should update Stock price", () => {
        stock1.setPrice(148.88);
        expect(stock1.getPrice()).toBe(148.88);
    });

    it("should have notify the status bar", () => {
        expect(spy).toHaveBeenCalledWith("Price Update - Redering Status Bar");
        expect(spy).toHaveBeenCalledWith("Status Bar");

    });

    it("should have notify the list view", () => {
        expect(spy).toHaveBeenCalledWith("Price Update - Redering Stock List View");
        expect(spy).toHaveBeenCalledWith("Stock List View");
    });

    it("should have render the stocks", () => {
        expect(spy).toHaveBeenCalledWith("Stock{symbol=\"AAPL\", price=148.88}");
        expect(spy).toHaveBeenCalledWith("Stock{symbol=\"MSFT\", price=248.88}");
    });
});
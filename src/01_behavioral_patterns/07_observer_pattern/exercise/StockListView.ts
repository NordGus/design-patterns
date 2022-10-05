import Stock from "./Stock";

export default class StockListView {
    private stocks = new Array<Stock>();

    public addStock(stock: Stock): void {
        this.stocks.push(stock);
    }

    public show(): void {
        for (const stock of this.stocks)
            console.log(stock.toString());
    }
}
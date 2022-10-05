import IObserver from "./interfaces/IObserver";
import Stock from "./Stock";

export default class StockListView implements IObserver {
    private stocks = new Array<Stock>();

    public addStock(stock: Stock): void {
        if (this.stocks.indexOf(stock) > -1) return;
        
        this.stocks.push(stock);
        stock.addObserver(this);
    }

    public show(): void {
        console.log("Stock List View");
        for (const stock of this.stocks)
            console.log(stock.toString());
    }

    public priceChanged(): void {
        console.log("Price Update - Redering Stock List View");
        this.show();
    }
}
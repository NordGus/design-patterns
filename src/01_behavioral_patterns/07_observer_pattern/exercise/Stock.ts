import IObserver from "./interfaces/IObserver";

export default class Stock {
    private observers: Array<IObserver>;
    private symbol: string;
    private price: number;

    constructor(symbol: string, price: number) {
        this.symbol = symbol;
        this.price = price;
        this.observers = new Array<IObserver>();
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
        this.notify();
    }

    public toString(): string {
        return `Stock{symbol="${this.symbol}", price=${this.price}}`;
    }

    public addObserver(observer: IObserver): void {
        if (this.observers.indexOf(observer) < 0)
            this.observers.push(observer);
    }

    public removeObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer)
        if (index > -1)
            this.observers.splice(index, 1);
    }

    private notify(): void {
        for (const observer of this.observers)
            observer.priceChanged();
    }
}
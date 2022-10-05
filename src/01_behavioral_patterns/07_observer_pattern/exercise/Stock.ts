export default class Stock {
    private symbol: string;
    private price: number;

    constructor(symbol: string, price: number) {
        this.symbol = symbol;
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public toString(): string {
        return `Stock{symbol="${this.symbol}", price=${this.price}}`;
    }
}
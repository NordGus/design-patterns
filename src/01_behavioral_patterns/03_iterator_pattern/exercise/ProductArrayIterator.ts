import IIterator from "../example/IIterator";
import Product from "./Product";

export default class ProductArrayIterator implements IIterator<Product> {
    private products: Array<Product>;
    private index: number;

    constructor(products: Array<Product>) {
        this.products = [...products];
        this.index = 0;
    }

    hasNext(): boolean {
        return this.index < this.products.length;
    }

    current(): Product {
        return this.products[this.index];
    }

    next(): void {
        this.index++;
    }
}
import IIterator from "../example/IIterator";
import Product from "./Product";
import ProductArrayIterator from "./ProductArrayIterator";

export default class ProductCollection {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>();
    }

    public add(product: Product): void {
        this.products.push(product);
    }

    public createIterator(): IIterator<Product> {
        return new ProductArrayIterator(this.products);
    }
}
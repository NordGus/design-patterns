import DbContext from "../DbContext";
import IProduct from "../interfaces/IProduct";
import Product from "../Product";

export default class ProductProxy implements IProduct {
    private product: Product;
    private dbContext: DbContext;

    constructor(product: Product, dbContext: DbContext) {
        this.product = product;
        this.dbContext = dbContext;
    }

    public getId(): number {
        return this.product.getId();
    }

    public getName(): string {
        return this.product.getName();
    }

    public setName(name: string): void {
        this.product.setName(name);
        this.dbContext.markAsChanged(this.product);
    }
}
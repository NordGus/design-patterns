import IProduct from "./interfaces/IProduct";
import Product from "./Product";
import ProductProxy from "./proxies/ProductProxy";

export default class DbContext {
  private updatedObjects: Map<number, IProduct> = new Map<number, IProduct>();

  public getProduct(id: number): IProduct {
    // Automatically generate SQL statements
    // to read the product with the given ID.
    console.log(`SELECT * FROM products WHERE product_id = ${id}`);

    // Simulate reading a product object from a database.
    const product = new Product(id);
    product.setName("Product 1");

    return new ProductProxy(product, this);;
  }

  public saveChanges(): void {
    // Automatically generate SQL statements
    // to update the database.
    for (var updatedObject of this.updatedObjects.values())
      console.log(`UPDATE products SET name = '${updatedObject.getName()}' WHERE product_id = ${updatedObject.getId()}`);

    this.updatedObjects.clear();
  }

  public markAsChanged(product: IProduct): void {
    this.updatedObjects.set(product.getId(), product);
  }
}

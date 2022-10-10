import Product from "./Product";

export default class DbContext {
  private updatedObjects: Map<number, Product> = new Map<number, Product>();

  public getProduct(id: number): Product {
    // Automatically generate SQL statements
    // to read the product with the given ID.
    console.log("SELECT * FROM products WHERE product_id = %d \n", id);

    // Simulate reading a product object from a database.
    var product = new Product(id);
    product.setName("Product 1");

    return product;
  }

  public saveChanges(): void {
    // Automatically generate SQL statements
    // to update the database.
    for (var updatedObject of this.updatedObjects.values())
      console.log("UPDATE products SET name = '%s' WHERE product_id = %d \n", updatedObject.getName(), updatedObject.getId());

    this.updatedObjects.clear();
  }

  public markAsChanged(product: Product): void {
    this.updatedObjects.set(product.getId(), product);
  }
}

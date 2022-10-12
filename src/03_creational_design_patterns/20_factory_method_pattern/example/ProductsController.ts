import Controller from "./matcha/Controller";

export default class ProductsController extends Controller {
    public listProducts(): void {
        // get products from a database
        const context = new Map<string, any>();
        // context.set(products)
        this.render("products.html", context);
    }
}
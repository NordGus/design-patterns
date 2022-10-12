import Controller from "./matcha/Controller";
import MatchaViewEngine from "./matcha/MatchaViewEngine";

export default class ProductsController extends Controller {
    public listProducts(): void {
        // get products from a database
        const context = new Map<string, any>();
        // context.set(products)
        this.render("products.html", context, new MatchaViewEngine());
    }
}
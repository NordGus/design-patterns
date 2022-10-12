import ProductsController from "./ProductsController";
import ReportsController from "./ReportsController";

describe("A web framework", () => {
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("a controller enpoint with the default view engine", () => {
        const controller = new ProductsController();

        it("should render the view with the default view engine", () => {
            controller.listProducts();
            expect(console.log).toHaveBeenCalledWith("View rendered by Matcha");
        });
    });

    describe("a controller enpoint with a third-party view engine", () => {
        const controller = new ReportsController();

        it("should render the view with the default view engine", () => {
            controller.listReports();
            expect(console.log).toHaveBeenCalledWith("View rendered by Sharp");
        });
    });
});
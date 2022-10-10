import Demo from "./Demo";

describe("An ORM library", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
        Demo.show();
    });
    afterAll(() => jest.clearAllMocks());

    it("should retrive a product from the database", () => {
        expect(console.log).toHaveBeenNthCalledWith(1, "SELECT * FROM products WHERE product_id = 1");
    });

    it("should update product after changing the product name", () => {
        expect(console.log).toHaveBeenNthCalledWith(2, "UPDATE products SET name = 'Updated Name' WHERE product_id = 1");
    });

    it("should retrive a product from the database", () => {
        expect(console.log).toHaveBeenNthCalledWith(3, "UPDATE products SET name = 'Another name' WHERE product_id = 1");
    });
});
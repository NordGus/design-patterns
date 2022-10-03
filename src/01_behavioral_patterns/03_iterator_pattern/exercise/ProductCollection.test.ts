import IIterator from "../IIterator";
import Product from "./Product";
import ProductArrayIterator from "./ProductArrayIterator";
import ProductCollection from "./ProductCollection";

describe("ProductCollection", () => {
    const collection = new ProductCollection();

    beforeAll(() => {
        collection.add(new Product(1, "test1"));
        collection.add(new Product(2, "test2"));
        collection.add(new Product(3, "test3"));
    });

    afterEach(() => { jest.clearAllMocks() });

    describe("#createIterator", () => {
        let iterator: IIterator<Product>;

        beforeEach(() => { iterator = collection.createIterator(); });

        it("should return an iterator", () => {
            expect(iterator).toBeInstanceOf(ProductArrayIterator);
        });

        it("should have items to iterate", () => {
            expect(iterator.hasNext()).toBeTruthy();
        });

        it("should be able to iterate urls", () => {
            const consoleSpy = jest.spyOn(console, "log");

            while (iterator.hasNext()) {
                console.log(iterator.current().toString());
                iterator.next();
            }

            expect(consoleSpy.mock.calls[0][0]).toBe("Product { id: 1, name: test1 }");
            expect(consoleSpy.mock.calls[1][0]).toBe("Product { id: 2, name: test2 }");
            expect(consoleSpy.mock.calls[2][0]).toBe("Product { id: 3, name: test3 }");
        });
    });
});
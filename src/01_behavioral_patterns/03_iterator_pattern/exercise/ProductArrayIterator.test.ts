import Product from "./Product";
import ProductArrayIterator from "./ProductArrayIterator";


describe("StackIterator", () => {
    const array = new Array<Product>();
    let iterator: ProductArrayIterator;

    beforeAll(() => {
        array.push(new Product(1, "test1"));
        array.push(new Product(2, "test2"));
        array.push(new Product(3, "test3"));
    });

    beforeEach(() => { iterator = new ProductArrayIterator(array) });

    describe("#hasNext", () => {
        it("should return true if there's more items to iterate", () => {
            expect(iterator.hasNext()).toBeTruthy();
        });

        it("should return false if there's no more items to iterate", () => {
            iterator.next();
            iterator.next();
            iterator.next();
            expect(iterator.hasNext()).toBeFalsy();
        });
    });

    describe("#current", () => {
        it("should return the current value in the iteration", () => {
            expect(iterator.current().toString()).toBe("Product { id: 1, name: test1 }");
        });
    });

    describe("#hasNext", () => {
        it("should move the itration fowards", () => {
            expect(iterator.current().toString()).toBe("Product { id: 1, name: test1 }");
            iterator.next();
            expect(iterator.current().toString()).toBe("Product { id: 2, name: test2 }");
        });
    });
});
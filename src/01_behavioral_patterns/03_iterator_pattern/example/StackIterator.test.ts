import Stack from "./Stack";
import StackIterator from "./StackIterator";

describe("StackIterator", () => {
    const stack = new Stack();
    let iterator: StackIterator;

    beforeAll(() => {
        stack.push("test1");
        stack.push("test2");
        stack.push("test3");
    });

    beforeEach(() => { iterator = new StackIterator(stack) });

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
            expect(iterator.current()).toBe("test3");
        });
    });

    describe("#hasNext", () => {
        it("should move the itration fowards", () => {
            expect(iterator.current()).toBe("test3");
            iterator.next();
            expect(iterator.current()).toBe("test2");
        });
    });
});
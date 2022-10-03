import BrowserHistory from "./BrowserHistory";
import IIterator from "./IIterator";
import StackIterator from "./StackIterator";

describe("History", () => {
    const url = "https://test.test";
    let browserHistory: BrowserHistory;

    beforeEach(() => { browserHistory = new BrowserHistory() });

    describe("#size", () => {
        it("should return amount of states stored", () => {
            expect(browserHistory.size).toBe(0);
        });
    });

    describe("#push", () => {
        it("should store the given state", () => {
            browserHistory.push(url);
            expect(browserHistory.size).toBe(1);
        });
    });

    describe("#pop", () => {
        describe("when is empty", () => {
            it("should thow and empty stack error", () => {
                expect(() => { browserHistory.pop() }).toThrow("empty stack");
            });
        });

        describe("when is not empty", () => {
            beforeEach(() => { browserHistory.push(url); });

            it("should return the latest pushed state", () => {
                expect(browserHistory.pop()).toBe(url);
            });

            it("should remove the latest pushed state from the stored states", () => {
                browserHistory.pop();
                expect(browserHistory.size).toBe(0);
            });
        });
    });

    describe("#getUrls", () => {
        let iterator: IIterator<string>;

        beforeEach(() => { 
            browserHistory.push(url);
            browserHistory.push(url);
            browserHistory.push(url);

            iterator = browserHistory.getUrls();
        });

        it("should return an iterator", () => {
            expect(iterator).toBeInstanceOf(StackIterator);
        });

        it("should have items to iterate", () => {
            expect(iterator.hasNext()).toBeTruthy();
        });

        it("should be able to iterate urls", () => {
            while (iterator.hasNext()) {
                expect(iterator.current()).toBe(url);
                iterator.next();
            }
        });
    });
});
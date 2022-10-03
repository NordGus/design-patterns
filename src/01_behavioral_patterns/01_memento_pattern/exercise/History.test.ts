import DocumentState from "./DocumentState";
import History from "./History";

describe("History", () => {
    const state: DocumentState = new DocumentState("test", "serif", 16);
    let history: History;

    beforeEach(() => { history = new History() });

    describe("#size", () => {
        it("should return amount of states stored", () => {
            expect(history.size).toBe(0);
        });
    });

    describe("#push", () => {
        it("should store the given state", () => {
            history.push(state);
            expect(history.size).toBe(1);
        });
    });

    describe("#pop", () => {
        describe("when is empty", () => {
            it("should thow and empty stack error", () => {
                expect(() => { history.pop() }).toThrow("empty stack");
            });
        });

        describe("when is not empty", () => {
            beforeEach(() => { history.push(state); });

            it("should return the latest pushed state", () => {
                expect(history.pop()).toBe(state);
            });

            it("should remove the latest pushed state from the stored states", () => {
                history.pop();
                expect(history.size).toBe(0);
            });
        });
    });
});
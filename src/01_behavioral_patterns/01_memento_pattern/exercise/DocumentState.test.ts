import DocumentState from "./DocumentState";

describe("DocumentState", () => {
    let state: DocumentState;

    beforeEach(() => { state = new DocumentState("test", "serif", 16) });

    describe("#getContent", () => {
        it("should return current editor content", () => {
            expect(state.getContent()).toBe("test");
        });
    });

    describe("#getFontName", () => {
        it("should return current editor content", () => {
            expect(state.getFontName()).toBe("serif");
        });
    });

    describe("#getFontSize", () => {
        it("should return current editor content", () => {
            expect(state.getFontSize()).toBe(16);
        });
    });
});
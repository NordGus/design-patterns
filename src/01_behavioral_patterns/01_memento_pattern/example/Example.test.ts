import Example from "./Example";

describe("Example", () => {
    let example: Example;

    beforeEach(() => { example = new Example() });

    describe("#setContent", () => {
        it("should return current editor content", () => {
            expect(example.getContent()).toBe("");
        });
    });
    
    describe("#setContent", () => {
        it("should change current editor content", () => {
            example.setContent("test");
            expect(example.getContent()).toBe("test");
        });
    });
    
    describe("#undo", () => {
        describe("when is empty", () => {
            it("should thow and empty stack error", () => {
                expect(() => { example.undo() }).toThrow("empty stack");
            });
        });

        describe("when is not empty", () => {
            beforeEach(() => { example.setContent("test"); });

            it("should restore contents to previous state", () => {
                example.setContent("a")
                example.undo();
                expect(example.getContent()).toBe("test");
            });
        });
    });
});
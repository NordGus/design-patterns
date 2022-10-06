import Selection from "./Selection";

describe("Selection", () => {
    let tool: Selection;

    beforeEach(() => { tool = new Selection() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#mouseDown", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            tool.mouseDown();
            expect(consoleSpy).toHaveBeenCalledWith("Selection Icon");
        });
    });

    describe("#mouseUp", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            tool.mouseUp();
            expect(consoleSpy).toHaveBeenCalledWith("Draw dashed rectangle");
        });
    });
});
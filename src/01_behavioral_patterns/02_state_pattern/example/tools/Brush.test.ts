import Brush from "./Brush";

describe("Brush", () => {
    let tool: Brush;

    beforeEach(() => { tool = new Brush() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#mouseDown", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            tool.mouseDown();
            expect(consoleSpy).toHaveBeenCalledWith("Brush Icon");
        });
    });

    describe("#mouseUp", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            tool.mouseUp();
            expect(consoleSpy).toHaveBeenCalledWith("Draw a line");
        });
    });
});
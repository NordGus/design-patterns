import Eraser from "./Eraser";

describe("Eraser", () => {
    let tool: Eraser;

    beforeEach(() => { tool = new Eraser() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#mouseDown", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            tool.mouseDown();
            expect(consoleSpy).toHaveBeenCalledWith("Eraser Icon");
        });
    });

    describe("#mouseUp", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            tool.mouseUp();
            expect(consoleSpy).toHaveBeenCalledWith("Erase something");
        });
    });
});
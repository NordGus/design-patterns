import Canvas from "./Canvas";
import Brush from "./tools/Brush";

describe("Canvas", () => {
    let canvas: Canvas;

    beforeEach(() => { canvas = new Canvas() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#mouseDown", () => {
        describe("when no tool is selected", () => {
            it("should throw an error", () => {
                try {
                    canvas.mouseDown();
                } catch (error) {
                    expect(error.message).toBe("No tool selected");
                }
            });
        });

        describe("when a tool is selected", () => {
            it("should react accordenly", () => {
                canvas.setCurrentTool(new Brush());
                const consoleSpy = jest.spyOn(console, "log");
                canvas.mouseDown();
                expect(consoleSpy).toHaveBeenCalledWith("Brush Icon");
            });
        });
    });

    describe("#mouseUp", () => {
        describe("when no tool is selected", () => {
            it("should throw an error", () => {
                try {
                    canvas.mouseUp();
                } catch (error) {
                    expect(error.message).toBe("No tool selected");
                }
            });
        });

        describe("when a tool is selected", () => {
            it("should react accordenly", () => {
                canvas.setCurrentTool(new Brush());
                const consoleSpy = jest.spyOn(console, "log");
                canvas.mouseUp();
                expect(consoleSpy).toHaveBeenCalledWith("Draw a line");
            });
        });
    });

    describe("#setCurrentTool", () => {
        it("should set currentTool property", () => {
            expect(canvas.getCurrentTool()).toBe(undefined);
            canvas.setCurrentTool(new Brush());
            expect(canvas.getCurrentTool()).toBeInstanceOf(Brush);
        });
    });

    describe("#getCurrentTool", () => {
        it("should return the current currentTool", () => {
            expect(canvas.getCurrentTool()).toBe(undefined);
            canvas.setCurrentTool(new Brush());
            expect(canvas.getCurrentTool()).toBeInstanceOf(Brush);
        });
    });
});
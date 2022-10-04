import TestCustomWindow from "./TestCustomWindow";

describe("TestCustomWindow", () => {
    const frameworkWindow = new TestCustomWindow();

    afterEach(() => { jest.clearAllMocks() });

    describe("#close", () => {
        it("should execute some logic before removing window from the screen", () => {
            const consoleSpy = jest.spyOn(console, "log");
            frameworkWindow.close();
            expect(consoleSpy).toHaveBeenCalledWith("Before close logic");
        });

        it("should remove the window from the screen", () => {
            const consoleSpy = jest.spyOn(console, "log");
            frameworkWindow.close();
            expect(consoleSpy).toHaveBeenCalledWith("Removing the window from the screen");
        });

        it("should execute some logic after removing window from the screen", () => {
            const consoleSpy = jest.spyOn(console, "log");
            frameworkWindow.close();
            expect(consoleSpy).toHaveBeenCalledWith("After close logic");
        });
    });
});
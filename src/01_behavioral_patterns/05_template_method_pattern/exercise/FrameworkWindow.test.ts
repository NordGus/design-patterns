import FrameworkWindow from "./FrameworkWindow";

describe("FrameworkWindow", () => {
    const frameworkWindow = new FrameworkWindow();

    afterEach(() => { jest.clearAllMocks() });

    describe("#close", () => {
        it("should remove the window from the screen", () => {
            const consoleSpy = jest.spyOn(console, "log");
            frameworkWindow.close();
            expect(consoleSpy).toHaveBeenCalledWith("Removing the window from the screen");
        });
    });
});
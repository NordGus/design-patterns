import ResizeCommand from "./ResizeCommand";

describe("ResizeCommand", () => {
    const command = new ResizeCommand();

    afterEach(() => { jest.clearAllMocks() });

    describe("#execute", () => {
        it("should execute command logic", () => {
            const consoleSpy = jest.spyOn(console, "log");
            command.execute();
            expect(consoleSpy).toHaveBeenCalledWith("Resize");
        });
    });
});
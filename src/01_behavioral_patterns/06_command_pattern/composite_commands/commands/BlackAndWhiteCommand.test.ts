import BlackAndWhiteCommand from "./BlackAndWhiteCommand";

describe("BlackAndWhiteCommand", () => {
    const command = new BlackAndWhiteCommand();

    afterEach(() => { jest.clearAllMocks() });

    describe("#execute", () => {
        it("should execute command logic", () => {
            const consoleSpy = jest.spyOn(console, "log");
            command.execute();
            expect(consoleSpy).toHaveBeenCalledWith("Apply b&w filter");
        });
    });
});
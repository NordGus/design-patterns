import BlackAndWhite from "./BlackAndWhite";

describe("BlackAndWhite", () => {
    const filter = new BlackAndWhite();
    
    afterEach(() => { jest.clearAllMocks() });

    describe("#apply", () => {
        it("shoould apply the correct filter", () => {
            const consoleSpy = jest.spyOn(console, "log");
            filter.apply("test");
            expect(consoleSpy).toHaveBeenCalledWith("Applying b&w filter to test");
        });
    });
});
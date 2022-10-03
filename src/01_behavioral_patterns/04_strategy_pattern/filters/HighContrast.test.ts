import HighContrast from "./HighContrast";

describe("HighContrast", () => {
    const filter = new HighContrast();
    
    afterEach(() => { jest.clearAllMocks() });

    describe("#apply", () => {
        it("shoould apply the correct filter", () => {
            const consoleSpy = jest.spyOn(console, "log");
            filter.apply("test");
            expect(consoleSpy).toHaveBeenCalledWith("Applying high contrast filter to test");
        });
    });
});
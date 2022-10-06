import PngCompressor from "./PngCompressor";

describe("PngCompressor", () => {
    const compressor = new PngCompressor();
    
    afterEach(() => { jest.clearAllMocks() });

    describe("#apply", () => {
        it("shoould apply the correct filter", () => {
            const consoleSpy = jest.spyOn(console, "log");
            compressor.apply("test");
            expect(consoleSpy).toHaveBeenCalledWith("Compressing test using png");
        });
    });
});
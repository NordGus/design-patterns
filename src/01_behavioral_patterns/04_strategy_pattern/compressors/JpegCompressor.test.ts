import JpegCompressor from "./JpegCompressor";

describe("JpegCompressor", () => {
    const compressor = new JpegCompressor();
    
    afterEach(() => { jest.clearAllMocks() });

    describe("#apply", () => {
        it("shoould apply the correct filter", () => {
            const consoleSpy = jest.spyOn(console, "log");
            compressor.apply("test");
            expect(consoleSpy).toHaveBeenCalledWith("Compressing test using jpeg");
        });
    });
});
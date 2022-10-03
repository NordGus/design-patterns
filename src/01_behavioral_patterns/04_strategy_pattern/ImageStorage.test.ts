import PngCompressor from "./compressors/PngCompressor";
import BlackAndWhite from "./filters/BlackAndWhite";
import ImageStorage from "./ImageStorage";

describe("ImageStorage", () => {
    let storage: ImageStorage;

    beforeEach(() => {
        storage = new ImageStorage(new PngCompressor(), new BlackAndWhite());
    });

    afterEach(() => { jest.clearAllMocks() });

    describe("#store", () => {
        it("should compress the image", () => {
            const consoleSpy = jest.spyOn(console, "log");
            storage.store("test");
            expect(consoleSpy.mock.calls[0][0]).toBe("Compressing test using png");
        });

        it("should apply filter to the image", () => {
            const consoleSpy = jest.spyOn(console, "log");
            storage.store("test");
            expect(consoleSpy.mock.calls[1][0]).toBe("Applying b&w filter to test");
        });

        it("should store the image", () => {
            const consoleSpy = jest.spyOn(console, "log");
            storage.store("test");
            expect(consoleSpy.mock.calls[2][0]).toBe("Storing test.png");
        });
    });
});
import ImageStorage from "./ImageStorage";

describe("ImageStorage", () => {
    let storage: ImageStorage;

    beforeEach(() => {
        storage = new ImageStorage("png", "b&w");
    });

    afterEach(() => { jest.clearAllMocks() });

    describe("#store", () => {
        it("should compress the image", () => {
            const consoleSpy = jest.spyOn(console, "log");
            storage.store("test");
            expect(consoleSpy.mock.calls[0][0]).toBe("Comprenssing using png");
        });

        it("should apply filter to the image", () => {
            const consoleSpy = jest.spyOn(console, "log");
            storage.store("test");
            expect(consoleSpy.mock.calls[1][0]).toBe("Applying b&w filter");
        });

        it("should store the image", () => {
            const consoleSpy = jest.spyOn(console, "log");
            storage.store("test");
            expect(consoleSpy.mock.calls[2][0]).toBe("Storing test.png");
        });
    });
});
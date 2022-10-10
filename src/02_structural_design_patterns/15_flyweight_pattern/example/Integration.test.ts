import Demo from "./Demo";

describe("A mapping app dlike Google Maps", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
        Demo.drawPoints();
    });
    afterAll(() => jest.clearAllMocks());

    it("should retrieve points from the PointService", () => {
        expect(console.log).toHaveBeenCalledWith("Retrieving Points");
    });

    it("should draw Cafe point", () => {
        expect(console.log).toHaveBeenNthCalledWith(2, "Cafe at (1, 2)");
    });

    it("should draw Default point", () => {
        expect(console.log).toHaveBeenNthCalledWith(3, "Default at (7, 343)");
    });

    it("should draw Hospital point", () => {
        expect(console.log).toHaveBeenNthCalledWith(4, "Hospital at (42, 117)");
    });

    it("should draw Restaurant point", () => {
        expect(console.log).toHaveBeenNthCalledWith(5, "Restaurant at (5, 50)");
    });
});
import Bicycling from "./Bicycling";


describe("Bicycling", () => {
    let travelMode: Bicycling;

    beforeEach(() => { travelMode = new Bicycling() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#getEta", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getEta()).toBe(2);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating ETA (bicycling)");
        });
    });

    describe("#getDirection", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getDirection()).toBe(2);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating Direction (bicycling)");
        });
    });
});
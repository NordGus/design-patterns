import Driving from "./Driving";

describe("Driving", () => {
    let travelMode: Driving;

    beforeEach(() => { travelMode = new Driving() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#getEta", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getEta()).toBe(1);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating ETA (driving)");

        });
    });

    describe("#getDirection", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getDirection()).toBe(1);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating Direction (driving)");
        });
    });
});
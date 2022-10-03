import Transit from "./Transit";

describe("Transit", () => {
    let travelMode: Transit;

    beforeEach(() => { travelMode = new Transit() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#getEta", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getEta()).toBe(3);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating ETA (transit)");
        });
    });

    describe("#getDirection", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getDirection()).toBe(3);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating Direction (transit)");
        });
    });
});
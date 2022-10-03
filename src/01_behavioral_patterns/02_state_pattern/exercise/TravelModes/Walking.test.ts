import Walking from "./Walnking";

describe("Walking", () => {
    let travelMode: Walking;

    beforeEach(() => { travelMode = new Walking() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#getEta", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getEta()).toBe(4);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating ETA (walking)");

        });
    });

    describe("#getDirection", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(travelMode.getDirection()).toBe(4);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating Direction (walking)");
        });
    });
});
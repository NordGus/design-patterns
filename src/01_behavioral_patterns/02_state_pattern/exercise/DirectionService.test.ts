import DirectionService from "./DirectionService";
import Driving from "./TravelModes/Driving";
import Walking from "./TravelModes/Walnking";

describe("Canvas", () => {
    let directionService: DirectionService;

    beforeEach(() => { directionService = new DirectionService() });
    afterEach(() => { jest.clearAllMocks() });

    describe("#getEta", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(directionService.getEta()).toBe(4);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating ETA (walking)");

        });
    });

    describe("#getDirection", () => {
        it("should react accordenly", () => {
            const consoleSpy = jest.spyOn(console, "log");
            expect(directionService.getDirection()).toBe(4);
            expect(consoleSpy).toHaveBeenCalledWith("Calculating Direction (walking)");
        });
    });

    describe("#setTravelMode", () => {
        it("should set currentTool property", () => {
            expect(directionService.getTravelMode()).toBeInstanceOf(Walking);
            directionService.setTravelMode(new Driving());
            expect(directionService.getTravelMode()).toBeInstanceOf(Driving);
        });
    });

    describe("#getTravelMode", () => {
        it("should return the current currentTool", () => {
            expect(directionService.getTravelMode()).toBeInstanceOf(Walking);
            directionService.setTravelMode(new Driving());
            expect(directionService.getTravelMode()).toBeInstanceOf(Driving);
        });
    });
});
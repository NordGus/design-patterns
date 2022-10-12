import ArabianScheduler from "./ArabianScheduler";
import Event from "./Event";
import Scheduler from "./Scheduler";

describe("A framework to scheduling tasks", () => {
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("scheduling events in the gregorian calendar", () => {
        const scheduler = new Scheduler();
        const event = new Event();

        it("should schedule the given event", () => {
            scheduler.schedule(event);
            expect(console.log).toHaveBeenCalledWith("Adding an event on the given gregorian date.");
        });
    });

    describe("scheduling events in the arabian calendar", () => {
        const scheduler = new ArabianScheduler();
        const event = new Event();

        it("should schedule the given event", () => {
            scheduler.schedule(event);
            expect(console.log).toHaveBeenCalledWith("Adding an event on the given arabian date.");
        });
    });
});
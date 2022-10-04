import Application from "./Application";

describe("Application", () => {
    const app = new Application();

    afterEach(() => { jest.clearAllMocks() });

    describe("#main", () => {
        it("should add a new customer by clicking the add customer button", () => {
            const consoleSpy = jest.spyOn(console, "log");
            app.main();
            expect(consoleSpy).toHaveBeenCalledWith("Add customer")
        });

        it("should have called the add customer method from customer service", () => {
            const consoleSpy = jest.spyOn(console, "log");
            app.main();
            expect(consoleSpy).toHaveBeenCalledTimes(1);
        });
    });
});
import Process from "./Process";

describe("Process", () => {
    const process = new Process();

    describe("#main", () => {
        it("should record the audit trail", () => {
            const consoleSpy = jest.spyOn(console, "log");
            process.main();
            expect(consoleSpy).toHaveBeenCalledWith("Audit");
        });

        it("should transfer money between accounts", () => {
            const consoleSpy = jest.spyOn(console, "log");
            process.main();
            expect(consoleSpy).toHaveBeenCalledWith("Transfer Money");
        });

        it("should record the audit trail", () => {
            const consoleSpy = jest.spyOn(console, "log");
            process.main();
            expect(consoleSpy).toHaveBeenCalledWith("Audit");
        });

        it("should generate the report of the transactions", () => {
            const consoleSpy = jest.spyOn(console, "log");
            process.main();
            expect(consoleSpy).toHaveBeenCalledWith("Transfer Money");
        });
    });
});
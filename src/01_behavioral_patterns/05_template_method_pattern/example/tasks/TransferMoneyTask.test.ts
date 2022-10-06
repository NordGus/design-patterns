import AuditTrail from "../AuditTrail";
import TransferMoneyTask from "./TransferMoneyTask";

describe("TransferMoneyTask", () => {
    const task = new TransferMoneyTask(new AuditTrail());

    afterEach(() => { jest.clearAllMocks() });

    describe("#excute", () => {
        it("should record the audit trail", () => {
            const consoleSpy = jest.spyOn(console, "log");
            task.execute();
            expect(consoleSpy).toHaveBeenCalledWith("Audit");
        });

        it("should transfer money between accounts", () => {
            const consoleSpy = jest.spyOn(console, "log");
            task.execute();
            expect(consoleSpy).toHaveBeenCalledWith("Transfer Money");
        });
    });
});
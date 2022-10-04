import AuditTrail from "./AuditTrail";
import GenerateReportTask from "./GenerateReportTask";

describe("GenerateReportTask", () => {
    const task = new GenerateReportTask(new AuditTrail());

    afterEach(() => { jest.clearAllMocks() });

    describe("#excute", () => {
        it("should record the audit trail", () => {
            const consoleSpy = jest.spyOn(console, "log");
            task.execute();
            expect(consoleSpy).toHaveBeenCalledWith("Audit");
        });

        it("should generate the report of the transactions", () => {
            const consoleSpy = jest.spyOn(console, "log");
            task.execute();
            expect(consoleSpy).toHaveBeenCalledWith("Generate Report");
        });
    });
});
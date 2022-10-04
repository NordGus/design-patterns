import AuditTrail from "./AuditTrail";

describe("AuditTrail", () => {
    const trail = new AuditTrail();

    afterEach(() => { jest.clearAllMocks() });

    describe("#record", () => {
        it("should record the audit trail", () => {
            const consoleSpy = jest.spyOn(console, "log");
            trail.record();
            expect(consoleSpy).toHaveBeenCalledWith("Audit");
        });
    });
});
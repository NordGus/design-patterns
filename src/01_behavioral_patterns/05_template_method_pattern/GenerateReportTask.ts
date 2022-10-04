import AuditTrail from "./AuditTrail";

export default class GenerateReportTask {
    private auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        this.auditTrail = auditTrail;
    }

    public execute(): void {
        this.auditTrail.record();

        console.log("Generate Report");
    }
}
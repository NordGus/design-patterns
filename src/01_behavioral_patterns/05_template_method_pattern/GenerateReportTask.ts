import AuditTrail from "./AuditTrail";
import Task from "./Task";

export default class GenerateReportTask extends Task {
    constructor(auditTrail: AuditTrail) {
        super(auditTrail);
    }

    protected override doExecution(): void {
        console.log("Generate Report");
    }
}
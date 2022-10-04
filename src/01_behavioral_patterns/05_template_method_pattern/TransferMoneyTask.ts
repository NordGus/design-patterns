import AuditTrail from "./AuditTrail";
import Task from "./Task";

export default class TransferMoneyTask extends Task {
    constructor(auditTrail: AuditTrail) {
        super(auditTrail);
    }

    protected override doExecution(): void {
        console.log("Transfer Money");
    }
}
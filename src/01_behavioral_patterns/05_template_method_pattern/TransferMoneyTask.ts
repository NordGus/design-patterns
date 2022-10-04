import AuditTrail from "./AuditTrail"

export default class TransferMoneyTask {
    private auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        this.auditTrail = auditTrail;
    }

    public execute(): void {
        this.auditTrail.record();

        console.log("Transfer Money");
    }
}
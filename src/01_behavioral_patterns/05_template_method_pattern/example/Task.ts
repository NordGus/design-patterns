import AuditTrail from "./AuditTrail";

export default abstract class Task {
    protected auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        this.auditTrail = auditTrail;
    }

    public execute(): void {
        this.auditTrail.record();
        this.doExecution();
    }

    protected abstract doExecution(): void;
}
import AuditTrail from "./AuditTrail";
import GenerateReportTask from "./tasks/GenerateReportTask";
import TransferMoneyTask from "./tasks/TransferMoneyTask";

export default class Process {
    public main(): void {
        const auditTrail = new AuditTrail();
        const transferMoneyTask = new TransferMoneyTask(auditTrail);
        const generateReportTask = new GenerateReportTask(auditTrail);

        transferMoneyTask.execute();
        generateReportTask.execute();
    }
}
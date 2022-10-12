import SharpController from "./sharp/SharpController";

export default class ReportsController extends SharpController {
    public listReports(): void {
        // get reports from a database
        const context = new Map<string, any>();
        // context.set(reports)
        this.render("reports.html", context);
    }
}
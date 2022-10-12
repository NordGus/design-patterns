import Calendar from "./Calendar";

export default class Scheduler {
    private calendar: Calendar = new Calendar();

    public schedule(event: Event): void {
        var today = new Date();
        this.calendar.addEvent(event, today);
    }
}

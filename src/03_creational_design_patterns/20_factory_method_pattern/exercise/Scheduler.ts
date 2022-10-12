import GregorianCalendar from "./calendars/GregorianCalendar";
import Event from "./Event";
import ICalendar from "./interfaces/ICalendar";

export default class Scheduler {
    protected calendar: ICalendar;

    constructor() {
        this.calendar = this.createCalendar();
    }

    public schedule(event: Event): void {
        var today = new Date();
        this.calendar.addEvent(event, today);
    }

    protected createCalendar(): ICalendar {
        return new GregorianCalendar();
    }
}

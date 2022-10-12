import ArabianCalendar from "./calendars/ArabianCalendar";
import ICalendar from "./interfaces/ICalendar";
import Scheduler from "./Scheduler";

export default class ArabianScheduler extends Scheduler {
    protected calendar: ICalendar;

    protected createCalendar(): ICalendar {
        return new ArabianCalendar();
    }
}

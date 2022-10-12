import Event from "../Event";
import ICalendar from "../interfaces/ICalendar";

export default class ArabianCalendar implements ICalendar {
    public addEvent(event: Event, date: Date): void {
        console.log("Adding an event on the given arabian date.");
    }
}

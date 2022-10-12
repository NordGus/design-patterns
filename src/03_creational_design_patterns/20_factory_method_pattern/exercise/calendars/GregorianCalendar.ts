import Event from "../Event";
import ICalendar from "../interfaces/ICalendar";

export default class GregorianCalendar implements ICalendar {
    public addEvent(event: Event, date: Date): void {
        console.log("Adding an event on the given gregorian date.");
    }
}

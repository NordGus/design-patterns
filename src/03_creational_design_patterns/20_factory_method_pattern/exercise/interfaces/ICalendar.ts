import Event from "../Event";

export default interface ICalendar {
    addEvent(event: Event, date: Date): void;
}
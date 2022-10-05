import IObserver from "../interfaces/IObeserver";

export default class Chart implements IObserver {
    public update(): void {
        console.log("Chart has been notified");
    }
}
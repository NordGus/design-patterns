import IObserver from "../interfaces/IObeserver";

export default class Chart implements IObserver<number> {
    public update(value: number): void {
        console.log("Chart has been notified with " + value);
    }
}
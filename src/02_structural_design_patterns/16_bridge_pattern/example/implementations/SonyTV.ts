import IDevise from "../interfaces/IDevice";

export default class SonyTV implements IDevise {
    public turnOn(): void {
        console.log("Sony Turn On");
    }

    public turnOff(): void {
        console.log("Sony Turn Off")
    }

    public setChannel(channel: number): void {
        console.log("Sony Set channel " + channel);
    }
}
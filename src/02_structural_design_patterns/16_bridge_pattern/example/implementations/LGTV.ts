import IDevise from "../interfaces/IDevice";

export default class LGTV implements IDevise {
    public turnOn(): void {
        console.log("LG Turn On");
    }

    public turnOff(): void {
        console.log("LG Turn Off")
    }

    public setChannel(channel: number): void {
        console.log("LG Set channel " + channel);
    }
}
import IDevise from "../interfaces/IDevice";

export default class SamsungTV implements IDevise {
    public turnOn(): void {
        console.log("Samsung Turn On");
    }

    public turnOff(): void {
        console.log("Samsung Turn Off")
    }

    public setChannel(channel: number): void {
        console.log("Samsung Set channel " + channel);
    }
}
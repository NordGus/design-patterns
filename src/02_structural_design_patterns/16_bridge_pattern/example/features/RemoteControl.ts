import IDevise from "../interfaces/IDevice";

export default class RemoteControl {
    protected device: IDevise;

    constructor(device: IDevise) {
        this.device = device;
    }

    public turnOn(): void {
        this.device.turnOn();
    }

    public turnOff(): void {
        this.device.turnOff();
    }
}
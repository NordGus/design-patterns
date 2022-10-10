import IDevise from "../interfaces/IDevice";
import RemoteControl from "./RemoteControl";

export default class AdvancedRemoteControl extends RemoteControl {
    constructor(device: IDevise) {
        super(device);
    }

    public setChannel(channel: number): void {
        this.device.setChannel(channel);
    }
}
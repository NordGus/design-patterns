import RemoteControl from "./RemoteControl";

export default class SonyRemoteControl extends RemoteControl {
    public turnOn(): void {
        console.log("Sony Turn On");
    }

    public turnOff(): void {
        console.log("Sony Turn Off")
    }
}
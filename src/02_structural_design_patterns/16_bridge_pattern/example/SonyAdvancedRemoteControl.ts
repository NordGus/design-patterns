import AdvancedRemoteControl from "./AdavacedRemoteControl";

export default class SonyAdvancedControl extends AdvancedRemoteControl {
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
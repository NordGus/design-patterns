import RemoteControl from "./RemoteControl";

export default abstract class AdvancedRemoteControl extends RemoteControl {
    public abstract setChannel(channel: number): void;
}
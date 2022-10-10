// Basic Remote Control (turnOn, turnOff)
// Advaced Remote Control (setChannel)
// Movie Remote Control (play, pause, rewind)

export default abstract class RemoteControl {
    public abstract turnOn(): void;

    public abstract turnOff(): void;
}
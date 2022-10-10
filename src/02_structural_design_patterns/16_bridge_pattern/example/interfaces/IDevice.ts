export default interface IDevise {
    turnOn(): void;
    turnOff(): void;
    setChannel(channel: number): void;
}
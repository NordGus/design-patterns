import IButton from "../interfaces/IButton";

export default class AntButton implements IButton {
    public render(): void {
        console.log("Ant Button");
    }
}
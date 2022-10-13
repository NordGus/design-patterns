import IButton from "../interfaces/IButton";

export default class MaterialButton implements IButton {
    public render(): void {
        console.log("Material Button");
    }
}
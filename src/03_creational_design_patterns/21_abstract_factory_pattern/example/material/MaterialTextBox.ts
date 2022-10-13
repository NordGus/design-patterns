import ITextBox from "../interfaces/ITextBox";

export default class MaterialTextBox implements ITextBox {
    public render(): void {
        console.log("Material TextBox");
    }
}
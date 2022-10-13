import ITextBox from "../interfaces/ITextBox";

export default class AntTextBox implements ITextBox {
    public render(): void {
        console.log("Ant TextBox");
    }
}
import IButton from "./IButton";
import ITextBox from "./ITextBox";

export default interface IWidgetFactory {
    createButton(): IButton;
    createTextBox(): ITextBox;
}
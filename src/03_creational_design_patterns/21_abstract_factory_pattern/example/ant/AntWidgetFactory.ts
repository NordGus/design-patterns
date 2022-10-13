import IButton from "../interfaces/IButton";
import ITextBox from "../interfaces/ITextBox";
import IWidgetFactory from "../interfaces/IWidgetFactory";
import AntButton from "./AntButton";
import AntTextBox from "./AntTextBox";

export default class AntWidgetFactory implements IWidgetFactory {
    public createButton(): IButton {
        return new AntButton();
    }

    public createTextBox(): ITextBox {
        return new AntTextBox();
    }
}
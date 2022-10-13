import IButton from "../interfaces/IButton";
import ITextBox from "../interfaces/ITextBox";
import IWidgetFactory from "../interfaces/IWidgetFactory";
import MaterialButton from "./MaterialButton";
import MaterialTextBox from "./MaterialTextBox";

export default class MaterialWidgetFactory implements IWidgetFactory {
    public createButton(): IButton {
        return new MaterialButton();
    }

    public createTextBox(): ITextBox {
        return new MaterialTextBox();
    }
}
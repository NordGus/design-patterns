import IWidgetFactory from "../interfaces/IWidgetFactory";

export default class ContactForm {
    public render(widgetFactory: IWidgetFactory): void {
        widgetFactory.createButton().render();
        widgetFactory.createTextBox().render();
    }
}
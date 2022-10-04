import ICommand from "./ICommand";

export default class Button {
    private label: string;
    private onClicked: ICommand;

    constructor(onClicked: ICommand) {
        this.label = "Label";
        this.onClicked = onClicked;
    }

    public click(): void {
        this.onClicked.execute();
    }

    public setLabel(label: string): void {
        this.label = label;
    }

    public getLabel(): string {
        return this.label;
    }
}
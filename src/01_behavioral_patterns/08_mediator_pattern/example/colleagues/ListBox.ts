import UIControl from "../UIControl";

export default class ListBox extends UIControl {
    private selection: string;

    public getSelection(): string {
        return this.selection;
    }

    public setSelection(selection: string): void {
        this.selection = selection;
        this.owner.changed(this);
    }
}
import UIControl from "./UIControl";

export default class CheckBox extends UIControl {
    private isChecked: boolean;

    public checked(): boolean {
        return this.isChecked;
    }

    public setChecked(checked: boolean): void {
        this.isChecked = checked;
    }
}
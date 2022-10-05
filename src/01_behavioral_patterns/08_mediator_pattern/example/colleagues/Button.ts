import UIControl from "../UIControl";

export default class Button extends UIControl {
    private isEnable: boolean;

    public enabled(): boolean {
        return this.isEnable;
    }

    public setEnabled(enabled: boolean): void {
        this.isEnable = enabled;
        this.owner.changed(this);
    }
}
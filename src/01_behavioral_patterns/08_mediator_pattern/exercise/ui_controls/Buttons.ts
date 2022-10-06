import UIControl from "./UIControl";

export default class Button extends UIControl {
    private isEnabled: boolean;

    public enabled(): boolean {
        return this.isEnabled;
    }

    public setEnabled(enabled: boolean): void {
        this.isEnabled = enabled;
    }
}
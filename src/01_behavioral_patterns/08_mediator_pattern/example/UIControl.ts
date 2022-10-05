import DialogBox from "./DialogBox";

// Colleague Interface
export default class UIControl {
    protected owner: DialogBox;

    constructor(owner: DialogBox) {
        this.owner = owner;
    }
}
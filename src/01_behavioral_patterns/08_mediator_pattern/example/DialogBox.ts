import UIControl from "./UIControl";

// Mediator
export default abstract class DialogBox {
    public abstract changed(control: UIControl): void;
}
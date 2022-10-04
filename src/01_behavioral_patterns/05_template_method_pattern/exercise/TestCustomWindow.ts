import FrameworkWindow from "./FrameworkWindow";

export default class TestCustomWindow extends FrameworkWindow {
    protected override beforeClose(): void {
        console.log("Before close logic");
    }

    protected override afterClose(): void {
        console.log("After close logic");
    }
}
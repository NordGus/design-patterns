export default abstract class FrameworkWindow {
    public close(): void {
        this.beforeClose();
        console.log("Removing the window from the screen");
        this.afterClose();
    }

    protected abstract beforeClose(): void;

    protected abstract afterClose(): void;
}
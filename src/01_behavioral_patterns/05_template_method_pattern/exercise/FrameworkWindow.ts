export default class FrameworkWindow {
    public close(): void {
        //TODO: custom windows may need to execute some code before the window
        // is closed.

        console.log("Removing the window from the screen");

        //TODO: custom windows may need to execute some code after the window
        // is closed.
    }
}
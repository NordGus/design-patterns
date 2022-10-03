import ITool from "../ITool";

export default class Brush implements ITool {
    public mouseDown(): void {
        console.log("Brush Icon");
    }

    public mouseUp(): void {
        console.log("Draw a line");
    }
}
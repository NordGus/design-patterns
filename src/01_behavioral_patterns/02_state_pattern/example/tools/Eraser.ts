import ITool from "../ITool";

export default class Eraser implements ITool {
    public mouseDown(): void {
        console.log("Eraser Icon");
    }

    public mouseUp(): void {
        console.log("Erase something");
    }
}
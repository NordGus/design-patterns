import ITool from "../ITool";

export default class Selection implements ITool {
    public mouseDown(): void {
        console.log("Selection Icon");
    }

    public mouseUp(): void {
        console.log("Draw dashed rectangle");
    }
}
import ITool from "./ITool"

export default class Canvas {
    private currentTool: ITool;

    public mouseDown(): void {
        if (!this.currentTool) throw new Error("No tool selected");

        this.currentTool.mouseDown();
    }
    
    public mouseUp(): void {
        if (!this.currentTool) throw new Error("No tool selected");

        this.currentTool.mouseUp();
    }

    public setCurrentTool(tool: ITool): void {
        this.currentTool = tool;
    }

    public getCurrentTool(): ITool {
        return this.currentTool;
    }
}
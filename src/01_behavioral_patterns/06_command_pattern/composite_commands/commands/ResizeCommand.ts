import ICommand from "../../framework/ICommand";

export default class ResizeCommand implements ICommand {
    public execute(): void {
        console.log("Resize");
    }
}
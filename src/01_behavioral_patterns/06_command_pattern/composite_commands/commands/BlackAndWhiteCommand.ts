import ICommand from "../../framework/ICommand";

export default class BlackAndWhiteCommand implements ICommand {
    public execute(): void {
        console.log("Apply b&w filter");
    }
}
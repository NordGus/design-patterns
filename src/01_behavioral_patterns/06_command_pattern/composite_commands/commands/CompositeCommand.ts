import ICommand from "../../example/framework/ICommand";

export default class CompositeCommand implements ICommand {
    private commands: Array<ICommand> = new Array<ICommand>();

    public addCommand(command: ICommand) {
        this.commands.push(command);
    }

    public execute(): void {
        for (const command of this.commands)
            command.execute();
    }
}
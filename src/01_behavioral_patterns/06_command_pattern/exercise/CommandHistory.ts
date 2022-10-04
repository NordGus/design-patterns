import LinkedList from "./helpers/LinkedList";
import IUndoableCommand from "./interfaces/IUndoableCommand";

export default class CommandHistory {
    private commands: LinkedList<IUndoableCommand> = new LinkedList<IUndoableCommand>();

    public push(command: IUndoableCommand): void {
        this.commands.addLast(command);
    }
    
    public pop(): IUndoableCommand {
        return this.commands.removeLast();
    }
    
    public isEmpty(): boolean {
        return this.commands.isEmpty();
    }
}
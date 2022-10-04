import CommandHistory from "../CommandHistory";
import ICommand from "../interfaces/ICommand";

export default class UndoCommand implements ICommand {
    private history: CommandHistory;

    constructor(history: CommandHistory) {
        this.history = history;
    }

    public execute(): void {
        if (this.history.isEmpty()) return;

        this.history.pop().undo();
    }
}
import CommandHistory from "../CommandHistory";
import ICommand from "../interfaces/ICommand";
import IUndoableCommand from "../interfaces/IUndoableCommand";
import VideoEditor from "../VideoEditor";

export default abstract class UndoableCommand implements IUndoableCommand, ICommand {
    protected videoEditor: VideoEditor;
    private history: CommandHistory

    constructor(videoEditor: VideoEditor,history: CommandHistory) {
        this.videoEditor = videoEditor;
        this.history = history;
    }

    public execute(): void {
        this.doExecution()

        this.history.push(this);
    }

    public abstract undo(): void;

    protected abstract doExecution(): void;
}
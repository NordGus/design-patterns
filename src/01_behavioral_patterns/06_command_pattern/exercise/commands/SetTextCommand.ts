import CommandHistory from "../CommandHistory";
import VideoEditor from "../VideoEditor";
import UndoableCommand from "./UndoableCommand";

export default class SetTextCommand extends UndoableCommand {
    private text: string;

    constructor(text: string, videoEditor: VideoEditor, history: CommandHistory) {
        super(videoEditor, history);
        
        this.text = text
    }

    protected override doExecution(): void {
        this.videoEditor.setText(this.text);
    }

    public override undo(): void {
        this.videoEditor.removeText();
    }
}
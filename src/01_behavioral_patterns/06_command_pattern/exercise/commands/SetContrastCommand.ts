import CommandHistory from "../CommandHistory";
import VideoEditor from "../VideoEditor";
import UndoableCommand from "./UndoableCommand";

export default class SetContrastCommand extends UndoableCommand {
    private prevContrast: number;
    private contrast: number;

    constructor(contrast: number, videoEditor: VideoEditor, history: CommandHistory) {
        super(videoEditor, history);
        
        this.prevContrast = videoEditor.getContrast();
        this.contrast = contrast;
    }

    protected override doExecution(): void {
        this.videoEditor.setContrast(this.contrast);
    }

    public override undo(): void {
        this.videoEditor.setContrast(this.prevContrast);
    }
}
import CommandHistory from "./CommandHistory";
import SetContrastCommand from "./commands/SetContrastCommand";
import SetTextCommand from "./commands/SetTextCommand";
import UndoCommand from "./commands/UndoCommand";
import VideoEditor from "./VideoEditor";

describe("Undo mechanism for a Video Editor", () => {
    const history = new CommandHistory();
    const editor = new VideoEditor();
    const undoCommand = new UndoCommand(history);
    const contrastCommand = new SetContrastCommand(3, editor, history);
    const textCommand = new SetTextCommand("Hello World", editor, history);

    it("Editor should be in default state", () => {
        expect(editor.toString()).toBe("VideoEditor {contrast=0.5, text=\"undefined\"}");
    });

    it("changing editor's contrast", () => {
        contrastCommand.execute();

        expect(editor.toString()).toBe("VideoEditor {contrast=3, text=\"undefined\"}");
    });

    it("changing editor's text", () => {
        textCommand.execute();

        expect(editor.toString()).toBe("VideoEditor {contrast=3, text=\"Hello World\"}");
    });
        
    it("undoing change in editor's text", () => {
        undoCommand.execute();
        
        expect(editor.toString()).toBe("VideoEditor {contrast=3, text=\"\"}");
    });
    
    it("undoing change in editor's contrast", () => {
        undoCommand.execute();

        expect(editor.toString()).toBe("VideoEditor {contrast=0.5, text=\"\"}");
    });
});
import CommandHistory from "./CommandHistory";
import BoldCommand from "./commands/BoldCommand";
import UndoCommand from "./commands/UndoCommand";
import HtmlDocument from "./HtmlDocument";

describe("Undo mechanism", () => {
    const history = new CommandHistory();
    const document = new HtmlDocument();
    const boldCommand = new BoldCommand(document, history);
    const undoCommand = new UndoCommand(history);

    it("set document's contents", () => {
        document.setContent("Hello World");
        
        expect(document.getContent()).toBe("Hello World");
    });

    it("make document's bold via command", () => {
        boldCommand.execute();

        expect(document.getContent()).toBe("<b>Hello World</b>");
        expect(history.isEmpty()).toBeFalsy();
    });

    it("undo bold command", () => {
        undoCommand.execute();

        expect(document.getContent()).toBe("Hello World");
        expect(history.isEmpty()).toBeTruthy();
    });
});
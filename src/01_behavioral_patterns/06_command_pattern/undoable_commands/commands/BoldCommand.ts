import CommandHistory from "../CommandHistory";
import HtmlDocument from "../HtmlDocument";
import ICommand from "../interfaces/ICommand";
import IUndoableCommand from "../interfaces/IUndoableCommand";

export default class BoldCommand implements ICommand, IUndoableCommand {
    private prevContent: string;
    private document: HtmlDocument;
    private history: CommandHistory;

    constructor(document: HtmlDocument, history: CommandHistory) {
        this.document = document;
        this.history = history;
    }

    public execute(): void {
        this.prevContent = this.document.getContent();
        this.document.makeBold();
        this.history.push(this);
    }
    
    public unexecute(): void {
        this.document.setContent(this.prevContent);
    }
}
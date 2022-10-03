import Editor from "./Editor";
import History from "./History";

export default class Example {
    private editor: Editor;
    private history: History;

    constructor() {
        this.editor = new Editor();
        this.history = new History();
    }

    public setContent(content: string): void {
        this.history.push(this.editor.createState());
        this.editor.setContent(content);
    }

    public getContent(): string {
        return this.editor.getContent();
    }

    public undo(): void {
        const state = this.history.pop();
        this.editor.setContent(state.getContent());
    }
}
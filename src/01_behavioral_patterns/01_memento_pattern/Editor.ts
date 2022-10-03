import EditorState from "./EditorState";

export default class Editor {
    private content: string = "";

    public getContent(): string {
        return this.content;
    }

    public setContent(newContent: string): void {
        this.content = newContent;
    }

    public createState(): EditorState {
        return new EditorState(this.content);
    }

    public restore(state: EditorState): void {
        this.content = state.getContent();
    }
}
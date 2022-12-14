export default class EditorState {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}
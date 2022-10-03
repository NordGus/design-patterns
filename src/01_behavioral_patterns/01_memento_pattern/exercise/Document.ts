import DocumentState from "./DocumentState";

export default class Document {
    private content: string;
    private fontName: string;
    private fontSize: number;

    constructor() {
        this.content = "";
        this.fontName = "Arial";
        this.fontSize = 14;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getFontName(): string {
        return this.fontName;
    }

    public setFontName(fontName: string): void {
        this.fontName = fontName;
    }

    public getFontSize(): number {
        return this.fontSize;
    }

    public setFontSize(fontSize: number): void {
        this.fontSize = fontSize;
    }

    public createState(): DocumentState {
        return new DocumentState(this.content, this.fontName, this.fontSize);
    }

    public restore(state: DocumentState): void {
        this.content = state.getContent();
        this.fontName = state.getFontName();
        this.fontSize = state.getFontSize();
    }
}
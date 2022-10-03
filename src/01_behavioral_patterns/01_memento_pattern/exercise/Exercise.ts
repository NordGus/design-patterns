import Document from "./Document";
import History from "./History";

export default class Exercise {
    private document: Document;
    private history: History;

    constructor() {
        this.document = new Document();
        this.history = new History();
    }

    public getContent(): string {
        return this.document.getContent();
    }

    public setContent(content: string): void {
        this.history.push(this.document.createState());
        this.document.setContent(content);
    }

    public getFontName(): string {
        return this.document.getFontName();
    }

    public setFontName(fontName: string): void {
        this.history.push(this.document.createState());
        this.document.setFontName(fontName);
    }

    public getFontSize(): number {
        return this.document.getFontSize();
    }

    public setFontSize(fontSize: number): void {
        this.history.push(this.document.createState());
        this.document.setFontSize(fontSize);
    }

    public undo(): void {
        const state = this.history.pop();
        this.document.setContent(state.getContent());
    }
}
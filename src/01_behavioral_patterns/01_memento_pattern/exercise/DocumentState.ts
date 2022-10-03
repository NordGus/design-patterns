export default class DocumentState {
    private content: string;
    private fontName: string;
    private fontSize: number;

    constructor(content: string, fontName: string, fontSize: number) {
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }

    public getContent(): string {
        return this.content;
    }

    public getFontName(): string {
        return this.fontName;
    }

    public getFontSize(): number {
        return this.fontSize;
    }
}
export default class HtmlDocument {
    private content: string;

    public makeBold(): void {
        this.content = `<b>${this.content}</b>`;
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }
}
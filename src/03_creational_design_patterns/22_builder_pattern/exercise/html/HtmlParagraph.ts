import IHtmlElement from "../interfaces/IHtmlElement";

export default class HtmlParagraph implements IHtmlElement {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public toString(): string {
        return `<p>${this.text}</p>`;
    }
}

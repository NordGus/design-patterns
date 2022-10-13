import IHtmlElement from "../interfaces/IHtmlElement";

export default class HtmlImage implements IHtmlElement {
    private source: string;

    constructor(source: string) {
        this.source = source;
    }

    public toString(): string {
        return `<img src="${this.source}" />`;
    }
}

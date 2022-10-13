import IElement from "./interfaces/IElement";

export default class Text implements IElement {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}

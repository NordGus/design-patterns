import IElement from "./interfaces/IElement";

export default class Image implements IElement {
    private source: string;

    constructor(source: string) {
        this.source = source;
    }

    public getSource(): string {
        return this.source;
    }
}

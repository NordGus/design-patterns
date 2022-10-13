import IElement from "../interfaces/IElement";
import IExporter from "../interfaces/IExporter";
import Text from "../Text";

export default class PlainTextExporter implements IExporter {
    private content: Array<string>;

    constructor() {
        this.content = new Array<string>();
    }

    public addElement(element: IElement): void {
        if (element instanceof Text) {
            this.content.push((element as Text).getContent());
        }
    }

    public getContent(): string {
        return this.content.join(" ");
    }
}
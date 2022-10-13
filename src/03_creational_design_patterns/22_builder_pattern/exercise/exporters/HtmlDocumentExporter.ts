import HtmlDocument from "../html/HtmlDocument";
import HtmlImage from "../html/HtmlImage";
import HtmlParagraph from "../html/HtmlParagraph";
import Image from "../Image";
import IElement from "../interfaces/IElement";
import IExporter from "../interfaces/IExporter";
import Text from "../Text";

export default class HtmlDocumentExporter implements IExporter {
    private document: HtmlDocument;

    constructor() {
        this.document = new HtmlDocument();
    }

    public addElement(element: IElement): void {
        if (element instanceof Text) {
            const text = (element as Text).getContent();
            this.document.add(new HtmlParagraph(text));
        }
        else if (element instanceof Image) {
            const source = (element as Image).getSource();
            this.document.add(new HtmlImage(source));
        }
    }

    public getContent(): string {
        return this.document.toString();
    }
}
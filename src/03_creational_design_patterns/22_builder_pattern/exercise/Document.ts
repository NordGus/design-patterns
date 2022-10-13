import { ExportFormat } from "./enums/ExportFormat";
import HtmlDocument from "./html/HtmlDocument";
import HtmlImage from "./html/HtmlImage";
import HtmlParagraph from "./html/HtmlParagraph";
import Image from "./Image";
import IElement from "./interfaces/IElement";
import Text from "./Text";

export default class Document {
    private elements: Array<IElement> = new Array<IElement>();

    public add(element: IElement): void {
        this.elements.push(element);
    }

    public export(format: ExportFormat, fileName: string): string {
        let content: string;

        if (format == ExportFormat.HTML) {
            const document = new HtmlDocument();

            for (const element of this.elements) {
                if (element instanceof Text) {
                    const text = (element as Text).getContent();
                    document.add(new HtmlParagraph(text));
                }
                else if (element instanceof Image) {
                    const source = (element as Image).getSource();
                    document.add(new HtmlImage(source));
                }
            }

            content = document.toString();
        }
        else if (format == ExportFormat.TEXT) {
            const builder = new Array<string>();

            for (const element of this.elements) {
                if (element instanceof Text) {
                    const text = (element as Text).getContent();
                    builder.push(text);
                }
            }

            content = builder.join(" ");
        }

        return content;
    }
}

import IElement from "./interfaces/IElement";
import IExporter from "./interfaces/IExporter";

export default class Document {
    private elements: Array<IElement> = new Array<IElement>();

    public add(element: IElement): void {
        this.elements.push(element);
    }

    public export(exporter: IExporter, fileName: string): string {
        for (const element of this.elements)
            exporter.addElement(element);

        return exporter.getContent();
    }
}

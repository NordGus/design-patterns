import IHtmlElement from "../interfaces/IHtmlElement";

export default class HtmlDocument {
    private elements: Array<IHtmlElement> = new Array<IHtmlElement>();

    public add(element: IHtmlElement): void {
        this.elements.push(element);
    }

    public toString(): string {
        let document = "<html>";
        
        for (const element of this.elements)
            document += element.toString();
        
        document += "</html>";
        
        return document;
    }
}

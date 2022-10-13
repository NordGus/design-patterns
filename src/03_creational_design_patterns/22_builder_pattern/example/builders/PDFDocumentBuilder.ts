import PDFDocument from "../formats/PDFDocument";
import IPresentationBuilder from "../interfaces/IPresentationBuilder";
import Slide from "../Slide";

export default class PDFDocumentBuilder implements IPresentationBuilder {
    private document: PDFDocument;

    constructor() {
        this.document = new PDFDocument();
    }

    public addSlide(slide: Slide): void {
        this.document.addPage(slide.getText());
    }

    public getPDFDocument(): PDFDocument {
        return this.document;
    }
}
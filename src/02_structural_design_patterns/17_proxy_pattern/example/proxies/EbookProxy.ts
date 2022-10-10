import Ebook from "../Ebook";
import IEbook from "../intefaces/IEbook";

export default class EbookProxy implements IEbook {
    private ebook: Ebook;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public show(): void {
        if (!this.ebook)
            this.ebook = new Ebook(this.fileName);
        
        this.ebook.show();
    }

    public getFileName(): string {
        return this.fileName;
    }
}
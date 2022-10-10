import IEbook from "./intefaces/IEbook";

export default class Library {
    private ebooks: Map<string, IEbook> = new Map<string, IEbook>();

    public add(ebook: IEbook): void {
        this.ebooks.set(ebook.getFileName(), ebook);
    }

    public openEbook(fileName: string): void {
        if (!this.ebooks.has(fileName))
            throw new Error("invalid ebook");

        this.ebooks.get(fileName).show();
    }
}
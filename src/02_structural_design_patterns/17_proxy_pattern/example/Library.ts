import Ebook from "./Ebook";

export default class Library {
    private ebooks: Map<string, Ebook> = new Map<string, Ebook>();

    public add(ebook: Ebook): void {
        this.ebooks.set(ebook.getFileName(), ebook);
    }

    public openEbook(fileName: string): void {
        if (!this.ebooks.has(fileName))
            throw new Error("invalid ebook");

        this.ebooks.get(fileName).show();
    }
}
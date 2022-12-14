import IEbook from "./intefaces/IEbook";

export default class Ebook implements IEbook {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.load();
    }

    private load(): void {
        console.log("Loading the ebook " + this.fileName);
    }

    public show(): void {
        console.log("Showing the ebook " + this.fileName);
    }

    public getFileName(): string {
        return this.fileName;
    }
}
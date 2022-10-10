export default class Ebook {
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
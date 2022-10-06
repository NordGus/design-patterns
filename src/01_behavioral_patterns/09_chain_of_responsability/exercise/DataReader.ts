export default abstract class DataReader {
    private next: DataReader;

    public setNext(next: DataReader) {
        this.next = next;
    }

    public read(fileName: string): void {
        if (fileName.endsWith(this.getExtension())) {
            this.readFile(fileName);
            return;
        }

        if (!!this.next)
            this.next.read(fileName);
        else
            throw new Error("File format not supported.");
    }

    protected abstract readFile(fileName: string): void;

    protected abstract getExtension(): string;
}
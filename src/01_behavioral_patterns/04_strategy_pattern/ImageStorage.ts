export default class ImageStorage {
    private compressor: string;
    private filter: string;

    constructor(compressor: string, filter: string) {
        this.compressor = compressor;
        this.filter = filter
    }

    public store(fileName: string): void {
        if (this.compressor == "jpeg")
            console.log("Compressing using jpeg");
        else if (this.compressor == "png")
            console.log("Comprenssing using png");

        if (this.filter == "b&w")
            console.log("Applying b&w filter");
        else if (this.filter == "high-contrast")
            console.log("Applying high contrast filter");

        console.log(`Storing ${fileName}.${this.compressor}`);
    }
}
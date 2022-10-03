import ICompressor from "./ICompressor";
import IFilter from "./IFilter";

export default class ImageStorage {
    private compressor: ICompressor;
    private filter: IFilter;

    constructor(compressor: ICompressor, filter: IFilter) {
        this.compressor = compressor;
        this.filter = filter
    }

    public store(fileName: string): void {
        this.compressor.apply(fileName);
        this.filter.apply(fileName);

        console.log(`Storing ${fileName}.${this.compressor.extension()}`);
    }
}
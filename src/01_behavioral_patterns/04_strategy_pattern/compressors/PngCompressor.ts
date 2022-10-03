import ICompressor from "../ICompressor";

export default class PngCompressor implements ICompressor {
    public apply(fileName: string): void {
        console.log(`Compressing ${fileName} using png`);
    }

    public extension(): string {
        return "png";
    }
}
import ICompressor from "../ICompressor";

export default class JpegCompressor implements ICompressor {
    public apply(fileName: string): void {
        console.log(`Compressing ${fileName} using jpeg`);
    }

    public extension(): string {
        return "jpeg";
    }
}
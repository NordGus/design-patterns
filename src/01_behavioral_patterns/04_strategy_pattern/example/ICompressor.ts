export default interface ICompressor {
    apply(fileName: string): void;
    extension(): string;
}
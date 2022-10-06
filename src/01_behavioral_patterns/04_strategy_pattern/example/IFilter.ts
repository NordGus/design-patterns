export default interface IFilter {
    apply(fileName: string): void;
}
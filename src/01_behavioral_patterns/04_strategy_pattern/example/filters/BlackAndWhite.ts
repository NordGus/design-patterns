import IFilter from "../IFilter";

export default class BlackAndWhite implements IFilter {
    public apply(fileName: string): void {
        console.log(`Applying b&w filter to ${fileName}`);
    }
}
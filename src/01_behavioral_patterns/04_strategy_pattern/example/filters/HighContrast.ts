import IFilter from "../IFilter";

export default class HighContrast implements IFilter {
    public apply(fileName: string): void {
        console.log(`Applying high contrast filter to ${fileName}`);
    }
}
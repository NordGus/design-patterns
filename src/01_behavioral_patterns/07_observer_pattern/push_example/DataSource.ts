import Observable from "./abstract_classes/Observable";

export default class DataSource extends Observable<number> {
    private value: number;

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;

        this.notify(this.value);
    }
}
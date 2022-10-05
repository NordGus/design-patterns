import IObserver from "../interfaces/IObeserver";


export default abstract class Observable<T> {
    private observers: Array<IObserver<T>> = new Array<IObserver<T>>();

    public attach(observer: IObserver<T>): void {
        const index = this.observers.indexOf(observer);

        if (index < 0)
            this.observers.push(observer);
    }

    public detach(observer: IObserver<T>): void {
        const index = this.observers.indexOf(observer)

        if (index > -1)
            this.observers.splice(index, 1);
    }

    protected notify(value: T): void {
        for (const observer of this.observers)
            observer.update(value);
    }
}
import IObserver from "../interfaces/IObeserver";


export default abstract class Observable {
    private observers: Array<IObserver> = new Array<IObserver>();

    public attach(observer: IObserver): void {
        const index = this.observers.indexOf(observer);

        if (index < 0)
            this.observers.push(observer);
    }

    public detach(observer: IObserver): void {
        const index = this.observers.indexOf(observer)

        if (index > -1)
            this.observers.splice(index, 1);
    }

    protected notify(): void {
        for (const observer of this.observers)
            observer.update();
    }
}
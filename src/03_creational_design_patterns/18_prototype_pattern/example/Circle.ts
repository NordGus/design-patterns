import IComponent from "./interfaces/IComponent";

export default class Circle implements IComponent {
    private radius: number;

    public render(): void {
        console.log("rendering a circle");
    }

    public clone(): Circle {
        const clone = new Circle();

        clone.setRadius(this.radius);

        return clone;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }
}
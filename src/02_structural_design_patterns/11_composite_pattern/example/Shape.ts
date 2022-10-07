import IComponent from "./interfaces/IComponent";

export default class Shape implements IComponent {
    public render(): void {
        console.log("Render Shape");
    }

    public move(): void {
        console.log("Move Shape");
    }
}
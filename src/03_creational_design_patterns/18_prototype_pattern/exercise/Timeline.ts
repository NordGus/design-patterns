import IComponent from "./interfaces/IComponent";

export default class Timeline {
    private components: Array<IComponent> = new Array<IComponent>();

    public add(component: IComponent): void {
        this.components.push(component);
    }

    public getComponents(): Array<IComponent> {
        return this.components;
    }
}

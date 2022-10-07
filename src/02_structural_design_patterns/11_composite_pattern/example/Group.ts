import IComponent from "./interfaces/IComponent";

export default class Group implements IComponent {
    private components: Array<IComponent> = new Array<IComponent>();

    public add(component: IComponent): void {
        const index = this.components.indexOf(component);

        if (index < 0)
            this.components.push(component);
    }

    public render(): void {
        for (const component of this.components)
            component.render();
    }

    public move(): void {
        for (const component of this.components)
            component.move();
    }
}
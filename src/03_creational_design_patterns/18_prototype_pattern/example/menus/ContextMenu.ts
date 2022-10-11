import IComponent from "../interfaces/IComponent";

export default class ContextMenu {
    private document: Array<IComponent>;

    constructor(document: Array<IComponent>) {
        this.document = document;
    }

    public duplicate(component: IComponent): void {
        const target = component.clone();
        this.document.push(target);
    }
}
import IComponent from "../interfaces/IComponent";

export default class Text implements IComponent {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}

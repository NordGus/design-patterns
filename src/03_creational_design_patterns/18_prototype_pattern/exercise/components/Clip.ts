import IComponent from "../interfaces/IComponent";

export default class Clip implements IComponent {
    private metadata: string;

    constructor(metadata: string) {
        this.metadata = metadata;
    }

    public getMetadata(): string {
        return this.metadata;
    }
}

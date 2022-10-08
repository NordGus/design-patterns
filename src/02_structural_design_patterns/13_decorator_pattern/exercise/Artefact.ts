import IArtefact from "./interfaces/IArtefact";

export default class Artefact implements IArtefact {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public render(): string {
        return this.name;
    }
}

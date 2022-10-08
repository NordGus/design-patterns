import IArtefact from "../interfaces/IArtefact";

export default class ErrorDecorator implements IArtefact {
    private artefact: IArtefact;

    constructor(artefact: IArtefact) {
        this.artefact = artefact;
    }

    public render(): string {
        return `${this.artefact.render()} [Error]`;
    }
}
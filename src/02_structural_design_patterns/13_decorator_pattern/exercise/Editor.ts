import Artefact from "./Artefact";

export default class Editor {
    public openProject(path: string): void {
        const artefacts = Array<Artefact>(
            new Artefact("Main"),
            new Artefact("Demo"),
            new Artefact("EmailClient"),
            new Artefact("EmailProvider"),
        );

        artefacts[0].setMain(true);
        artefacts[2].setHasError(true);

        for (var artefact of artefacts)
            console.log(artefact.render());
    }
}

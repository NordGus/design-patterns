import Artefact from "./Artefact";
import ErrorDecorator from "./decorators/ErrorDecorator";
import MainDecorator from "./decorators/MainDecorator";
import IArtefact from "./interfaces/IArtefact";

export default class Editor {
    public openProject(path: string): void {
        const artefacts = Array<IArtefact>(
            new Artefact("Main"),
            new Artefact("Demo"),
            new Artefact("EmailClient"),
            new Artefact("EmailProvider")
        );

        artefacts[0] = new ErrorDecorator(new MainDecorator(artefacts[0]));
        artefacts[2] = new ErrorDecorator(artefacts[2]);

        for (var artefact of artefacts)
            console.log(artefact.render());
    }
}

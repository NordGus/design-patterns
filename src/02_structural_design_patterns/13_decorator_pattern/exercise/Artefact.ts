export default class Artefact {
    private name: string;
    private hasError: boolean;
    private isMain: boolean;

    constructor(name: string) {
        this.name = name;
    }

    public render(): string {
        // The current implementation is not easily extensible. If tomorrow we need
        // to support other special markers, we have to come back and modify this class.
        //
        // For example, if the project is under source control, we need to highlight
        // the artefacts that are changed but not committed to the repository with a
        // special marker.
        //
        // Similarly, if an artefact is excluded from the project, we may want to
        // make the icon look disabled or semi-transparent.
        //
        // Every time we need to support a new marker, we have to come back and modify
        // this class. Over time, the code in this class gets more and more convoluted
        // with several if statements and additional fields.

        const errorIcon = this.hasError ? "[Error]" : "";
        const mainIcon = this.isMain ? "[Main]" : "";

        return `${this.name} ${errorIcon} ${mainIcon}`;
    }

    public setHasError(hasError: boolean): void {
        this.hasError = hasError;
    }

    public setMain(main: boolean): void {
        this.isMain = main;
    }
}

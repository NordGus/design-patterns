import IElement from "./IElement";

export default interface IExporter {
    addElement(element: IElement): void;
    getContent(): string;
}
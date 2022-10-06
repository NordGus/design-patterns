import IOperation from "./IOperation";

export default interface IHtmlNode {
    execute(operation: IOperation): void;
}
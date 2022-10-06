import IHtmlNode from "../interfaces/IHtmlNode";
import IOperation from "../interfaces/IOperation";

export default class AnchorNode implements IHtmlNode {
    public execute(operation: IOperation): void {
        operation.apply(this);
    }
}
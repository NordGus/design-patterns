import IHtmlNode from "../interfaces/IHtmlNode";
import IOperation from "../interfaces/IOperation";

export default class HeadingNode implements IHtmlNode {
    public execute(operation: IOperation): void {
        operation.apply(this);
    }
}
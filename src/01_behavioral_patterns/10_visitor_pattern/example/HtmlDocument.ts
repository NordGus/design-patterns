import IHtmlNode from "./interfaces/IHtmlNode";
import IOperation from "./interfaces/IOperation";
import HighlightOperation from "./operations/HighlightOperation";

export default class HtmlDocument {
    private nodes: Array<IHtmlNode> = new Array<IHtmlNode>();

    public add(node: IHtmlNode): void {
        this.nodes.push(node);
    }

    public execute(operation: IOperation): void {
        for (const node of this.nodes)
            node.execute(operation);
    }
}
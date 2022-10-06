import HtmlNode from "./HtmlNode";

export default class HtmlDocument {
    private nodes: Array<HtmlNode> = new Array<HtmlNode>();

    public add(node: HtmlNode): void {
        this.nodes.push(node);
    }

    public highligth(): void {
        for (const node of this.nodes)
            node.highlight();
    }
}
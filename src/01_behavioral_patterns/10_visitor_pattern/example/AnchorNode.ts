import HtmlNode from "./HtmlNode";

export default class AnchorNode implements HtmlNode {
    public highlight(): void {
        console.log("highlight-anchor");
    }
}
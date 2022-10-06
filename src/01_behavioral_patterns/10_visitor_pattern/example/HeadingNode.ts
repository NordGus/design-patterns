import HtmlNode from "./HtmlNode";

export default class HeadingNode implements HtmlNode {
    public highlight(): void {
        console.log("highlight-heading");
    }
}
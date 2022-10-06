import IOperation from "../interfaces/IOperation";
import AnchorNode from "../nodes/AnchorNode";
import HeadingNode from "../nodes/HeadingNode";

export default class HighlightOperation implements IOperation {
    apply(heading: HeadingNode): void;
    apply(anchor: AnchorNode): void;
    apply(node: unknown): void {
        switch (node.constructor) {
            case HeadingNode:
                console.log("highlight-heading");
                break;
            case AnchorNode:
                console.log("highlight-anchor");
                break;
            default:
                throw new Error("Not supported node");
                break;
        }
    }
    
}
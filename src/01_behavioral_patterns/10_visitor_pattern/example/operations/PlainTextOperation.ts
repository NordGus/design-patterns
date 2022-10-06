import IOperation from "../interfaces/IOperation";
import AnchorNode from "../nodes/AnchorNode";
import HeadingNode from "../nodes/HeadingNode";

export default class PainTextOperation implements IOperation {
    apply(heading: HeadingNode): void;
    apply(anchor: AnchorNode): void;
    apply(node: unknown): void {
        switch (node.constructor) {
            case HeadingNode:
                console.log("heading-plain-text");
                break;
            case AnchorNode:
                console.log("anchor-plain-text");
                break;
            default:
                throw new Error("Not supported node");
                break;
        }
    }
    
}
import AnchorNode from "../nodes/AnchorNode";
import HeadingNode from "../nodes/HeadingNode";

export default interface IOperation {
    apply(heading: HeadingNode): void;
    apply(anchor: AnchorNode): void;
}
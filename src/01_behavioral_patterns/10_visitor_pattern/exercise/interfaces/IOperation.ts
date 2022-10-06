import FactSegment from "../segments/FactSegment";
import FormatSegment from "../segments/FormatSegment";

export default interface IOperation {
    apply(segment: FormatSegment): void;
    apply(segment: FactSegment): void;
}
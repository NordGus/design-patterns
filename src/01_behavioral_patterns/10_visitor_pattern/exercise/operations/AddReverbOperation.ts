import IOperation from "../interfaces/IOperation";
import FactSegment from "../segments/FactSegment";
import FormatSegment from "../segments/FormatSegment";

export default class AddReverbOperation implements IOperation {
    apply(segment: FormatSegment): void;
    apply(segment: FactSegment): void;
    apply(segment: unknown): void {
        switch (segment.constructor) {
            case FormatSegment:
                console.log("Add Reverb to FormatSegment");
                break;
            case FactSegment:
                console.log("Add Reverb to FactSegment");
                break;
            default:
                throw new Error("Not supported segment");
                break;
        }
    }
}
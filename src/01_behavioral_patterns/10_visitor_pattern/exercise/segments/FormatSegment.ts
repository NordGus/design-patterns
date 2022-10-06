import IOperation from "../interfaces/IOperation";
import ISegment from "../interfaces/ISegment";

export default class FormatSegment implements ISegment {
    public execute(operation: IOperation): void {
        operation.apply(this);
    }
}
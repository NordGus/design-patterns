import IOperation from "./IOperation";

export default interface ISegment {
    execute(operation: IOperation): void;
}
export default interface IUndoableCommand {
    unexecute(): void;
}
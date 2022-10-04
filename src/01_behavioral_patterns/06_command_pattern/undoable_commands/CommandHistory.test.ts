import CommandHistory from "./CommandHistory";
import IUndoableCommand from "./interfaces/IUndoableCommand";

class TestCommand implements IUndoableCommand {
    public unexecute(): void {
        console.log("Unexecute");
    }
}

describe("CommandHistory", () => {
    let history: CommandHistory;
    const command = new TestCommand();

    beforeEach(() => { history = new CommandHistory() });

    describe("#push", () => {
        it("should add the given command to the command list", () => {
            history.push(command);
            expect(history.isEmpty()).toBeFalsy();
        });
    });
    
    describe("#pop", () => {
        beforeEach(() => { history.push(command) });

        it("should remove a command from the command list", () => {
            history.pop();

            expect(history.isEmpty()).toBeTruthy();
        });

        it("should remove the most recently added command from the command list", () => {
            expect(history.pop()).toBe(command);
        });
    });
    
    describe("#isEmpty", () => {
        it("should return false when there's commands in the commands list", () => {
            history.push(command);
            expect(history.isEmpty()).toBeFalsy();
        });

        it("should return true when there's no commands in the commands list", () => {
            expect(history.isEmpty()).toBeTruthy();
        });
    });
});
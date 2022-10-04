import BlackAndWhiteCommand from "./BlackAndWhiteCommand";
import CompositeCommand from "./CompositeCommand";
import ResizeCommand from "./ResizeCommand";

describe("CompositeCommand", () => {
    let command: CompositeCommand;
    const bwCommand = new BlackAndWhiteCommand();
    const resizeCommand = new ResizeCommand();

    beforeEach(() => { 
        command = new CompositeCommand();
        command.addCommand(bwCommand);
        command.addCommand(resizeCommand);

        jest.spyOn(bwCommand, "execute");
        jest.spyOn(resizeCommand, "execute");
    });

    afterEach(() => { jest.clearAllMocks() });

    describe("#execute", () => {
        it("should execute every command is compose by", () => {
            command.execute();
            expect(bwCommand.execute).toHaveBeenCalledTimes(1)
            expect(resizeCommand.execute).toHaveBeenCalledTimes(1)
        });
    });
});
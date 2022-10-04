import CommandHistory from "../CommandHistory";
import HtmlDocument from "../HtmlDocument";
import BoldCommand from "./BoldCommand";

describe("BoldCommand", () => {
    let command: BoldCommand;
    let document: HtmlDocument;
    let history: CommandHistory;

    beforeEach(() => {
        document = new HtmlDocument();
        history = new CommandHistory();
        command = new BoldCommand(document, history);

        document.setContent("test");
    });

    afterAll(() => { jest.clearAllMocks() });

    describe("#execute", () => {
        it("should store the previous contents of the document", () => {
            const spy = jest.spyOn(document, "getContent");

            command.execute();

            expect(spy).toHaveBeenCalledTimes(1)
        });

        it("should make the contents of the document bold", () => {
            const spy = jest.spyOn(document, "makeBold");
            
            command.execute();
            
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it("should push itself to the command history", () => {
            const spy = jest.spyOn(history, "push");
            
            command.execute();
            
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(command);
        });
    });

    describe("#unexecute", () => {
        beforeEach(() => { 
            command.execute(); 
        });

        it("should restore document's contents", () => {
            const spy = jest.spyOn(document, "setContent");

            command.unexecute();

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith("test");
        });
    });
});
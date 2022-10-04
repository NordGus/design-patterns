import Button from "./Button";
import ICommand from "./ICommand";

class TestCommand implements ICommand {
    public execute(): void {
        console.log("this is a test");
    }
}

describe("Button", () => {
    const command = new TestCommand();
    const button = new Button(command);

    afterEach(() => { jest.clearAllMocks() })

    describe("#click", () => {
        it("should execute onClicked command", () => {
            const spy = jest.spyOn(command, "execute");
            button.click();
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it("should execute logic inside onClicked command", () => {
            const consoleSpy = jest.spyOn(console, "log");
            button.click();
            expect(consoleSpy).toHaveBeenCalledWith("this is a test");
        });
    });
    
    describe("#getLabel", () => {
        it("should return button's label", () => {
            expect(button.getLabel()).toBe("Label");
        });
    });
    
    describe("#setLabel", () => {
        it("should change button's label", () => {
            expect(button.getLabel()).toBe("Label");
            button.setLabel("test");
            expect(button.getLabel()).toBe("test");
        });
    });
});
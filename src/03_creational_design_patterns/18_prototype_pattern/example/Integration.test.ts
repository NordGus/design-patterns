import Circle from "./Circle";
import IComponent from "./interfaces/IComponent";
import ContextMenu from "./menus/ContextMenu";

describe("A presentation application like PowerPoint or Keynote", () => {
    describe("context menu duplicate action", () => {
        const document = new Array<IComponent>();
        const contextMenu = new ContextMenu(document);
        const component = new Circle();
        document.push(component);
    
        beforeAll(() => contextMenu.duplicate(component));
    
        it("should add a component to the document", () => {
            expect(document.length).toBe(2);
        });

        it("should clone the given component", () => {
            expect((document[1] as Circle).getRadius()).toBe((document[0] as Circle).getRadius());
        });
    });
});
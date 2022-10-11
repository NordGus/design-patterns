import Audio from "./components/Audio";
import Clip from "./components/Clip";
import Text from "./components/Text";
import ContextMenu from "./menus/ContextMenu";
import Timeline from "./Timeline";

describe("A video editing application like Adobe Premier", () => {
    describe("context menu duplicate action", () => {
        describe("duplicating a text component", () => {
            const timeline = new Timeline();
            const contextMenu = new ContextMenu(timeline);
            const component = new Text("Hello World");
            timeline.add(component);
            
            beforeAll(() => contextMenu.duplicate(component));

            it("should have added the cloned component to the timelime", () => {
                expect(timeline.getComponents().length).toBe(2);
            });

            it("should have cloned the given component", () => {
                expect(timeline.getComponents()[1].constructor).toBe(component.constructor);
            });

            it("should have cloned the given component", () => {
                expect((timeline.getComponents()[1] as Text).getContent()).toBe(component.getContent());
            });
        });

        describe("duplicating a audio component", () => {
            const timeline = new Timeline();
            const contextMenu = new ContextMenu(timeline);
            const component = new Audio("Test");
            timeline.add(component);
            
            beforeAll(() => contextMenu.duplicate(component));

            it("should have added the cloned component to the timelime", () => {
                expect(timeline.getComponents().length).toBe(2);
            });

            it("should have cloned the given component", () => {
                expect(timeline.getComponents()[1].constructor).toBe(component.constructor);
            });

            it("should have cloned the given component", () => {
                expect((timeline.getComponents()[1] as Audio).getMetadata()).toBe(component.getMetadata());
            });
        });

        describe("duplicating a clip component", () => {
            const timeline = new Timeline();
            const contextMenu = new ContextMenu(timeline);
            const component = new Clip("Test");
            timeline.add(component);
            
            beforeAll(() => contextMenu.duplicate(component));

            it("should have added the cloned component to the timelime", () => {
                expect(timeline.getComponents().length).toBe(2);
            });

            it("should have cloned the given component", () => {
                expect(timeline.getComponents()[1].constructor).toBe(component.constructor);
            });

            it("should have cloned the given component", () => {
                expect((timeline.getComponents()[1] as Clip).getMetadata()).toBe(component.getMetadata());
            });
        });
    });
});
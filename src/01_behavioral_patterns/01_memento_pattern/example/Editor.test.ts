import Editor from "./Editor";
import EditorState from "./EditorState";

describe("Editor", () => {
    let editor: Editor;

    beforeEach(() => { editor = new Editor() });

    describe("#getContent", () => {
        it("should return current editor content", () => {
            expect(editor.getContent()).toBe("");
        });
    });

    describe("#setContent", () => {
        it("should change current editor content", () => {
            expect(editor.getContent()).toBe("");
            editor.setContent("a");
            expect(editor.getContent()).toBe("a");
        });
    });

    describe("#createState", () => {
        beforeEach(() => { editor.setContent("a"); });

        it("should return an EditorState object", () => {
            expect(editor.createState()).toBeInstanceOf(EditorState);
        });

        it("should return an EditorState object with the current Editor's content", () => {
            const state = editor.createState();

            expect(state.getContent()).toBe(editor.getContent());
        });
    });

    describe("#restore", () => {
        it("should set Editor's content to EditorState's content", () => {
            const state = new EditorState("test");
            editor.restore(state)

            expect(editor.getContent()).toBe(state.getContent());
        });
    });
});
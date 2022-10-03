import Document from "./Document";
import DocumentState from "./DocumentState";

describe("Editor", () => {
    let document: Document;

    beforeEach(() => { document = new Document() });

    describe("#createState", () => {
        it("should return an EditorState object", () => {
            expect(document.createState()).toBeInstanceOf(DocumentState);
        });

        it("should return an EditorState object with the current Editor's content", () => {
            const state = document.createState();

            expect(state.getContent()).toBe(document.getContent());
            expect(state.getFontName()).toBe(document.getFontName());
            expect(state.getFontSize()).toBe(document.getFontSize());
        });
    });

    describe("#restore", () => {
        it("should set Editor's content to EditorState's content", () => {
            const state = new DocumentState("test", "serif", 16);
            document.restore(state)

            expect(document.getContent()).toBe(state.getContent());
            expect(document.getFontName()).toBe(state.getFontName());
            expect(document.getFontSize()).toBe(state.getFontSize());
        });
    });
});
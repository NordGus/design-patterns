import EditorState from "./EditorState";

describe("EditorState", () => {
    let state: EditorState;

    beforeEach(() => { state = new EditorState("test") });

    describe("#getContent", () => {
        it("should return current editor content", () => {
            expect(state.getContent()).toBe("test");
        });
    });
});
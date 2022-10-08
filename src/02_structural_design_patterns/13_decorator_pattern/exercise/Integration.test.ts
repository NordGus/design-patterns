import Editor from "./Editor";

describe("A code editor", () => {
    const editor = new Editor();

    beforeAll(() => {
        jest.spyOn(console, "log");
        editor.openProject("...");
    });
    afterAll(() => jest.clearAllMocks());

    describe("Opening a project", () => {
        it("should have render all artefacts", () => {
            expect(console.log).toHaveBeenCalledTimes(4);
        });

        it("should have rendered the main artefact", () => {
            expect(console.log).toHaveBeenCalledWith("Main [Main]");
        });

        it("should have rendered an artefact with an error", () => {
            expect(console.log).toHaveBeenCalledWith("EmailClient [Error]");
        });
    });
});
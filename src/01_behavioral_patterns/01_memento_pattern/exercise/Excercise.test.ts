import Exercise from "./Exercise";

describe("Exercise", () => {
    let excercise: Exercise;

    beforeEach(() => { excercise = new Exercise() });

    describe("#getContent", () => {
        it("should return current document content", () => {
            expect(excercise.getContent()).toBe("");
        });
    });
    
    describe("#setContent", () => {
        it("should change current document content", () => {
            excercise.setContent("test");
            expect(excercise.getContent()).toBe("test");
        });
    });

    describe("#getFontName", () => {
        it("should return current document font name", () => {
            expect(excercise.getFontName()).toBe("Arial");
        });
    });
    
    describe("#setFontName", () => {
        it("should change current document font name", () => {
            excercise.setFontName("test");
            expect(excercise.getFontName()).toBe("test");
        });
    });

    describe("#getFontSize", () => {
        it("should return current document font size", () => {
            expect(excercise.getFontSize()).toBe(14);
        });
    });
    
    describe("#setFontSize", () => {
        it("should change current document font size", () => {
            excercise.setFontSize(20);
            expect(excercise.getFontSize()).toBe(20);
        });
    });
    
    describe("#undo", () => {
        describe("when is empty", () => {
            it("should thow and empty stack error", () => {
                expect(() => { excercise.undo() }).toThrow("empty stack");
            });
        });

        describe("when is not empty", () => {
            beforeEach(() => { 
                excercise.setContent("test"); 
                excercise.setFontName("serif");
                excercise.setFontSize(16)
            });

            it("should restore contents to previous state", () => {
                excercise.setContent("a")
                excercise.undo();
                expect(excercise.getContent()).toBe("test");
                expect(excercise.getFontName()).toBe("serif");
                expect(excercise.getFontSize()).toBe(16);
            });
        });
    });
});
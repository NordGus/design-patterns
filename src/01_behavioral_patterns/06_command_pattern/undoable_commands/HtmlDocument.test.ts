import HtmlDocument from "./HtmlDocument";

describe("HtmlDocument", () => {
    let document: HtmlDocument;

    beforeEach(() => { document = new HtmlDocument() });

    describe("#setContent", () => {
        it("should change the contents of the Html document", () => {
            document.setContent("test");
            expect(document.getContent()).toBe("test");
        });
    });
    
    describe("#getContent", () => {
        it("should return the contents of the Html document", () => {
            document.setContent("test");
            expect(document.getContent()).toBe("test");
        });
    });
    
    describe("#makeBold", () => {
        it("should make the contents of the Html document bold", () => {
            document.setContent("test");
            document.makeBold();
            expect(document.getContent()).toBe("<b>test</b>");
        });
    });
});
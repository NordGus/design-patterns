import HtmlDocument from "./HtmlDocument";
import AnchorNode from "./nodes/AnchorNode";
import HeadingNode from "./nodes/HeadingNode";
import HighlightOperation from "./operations/HighlightOperation";
import PlainTextOperation from "./operations/PlainTextOperation";

describe("An HTML Editor", () => {
    const heading = new HeadingNode();
    const anchor = new AnchorNode();
    const document = new HtmlDocument();

    beforeAll(() => {
        document.add(heading);
        document.add(anchor);
    });
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("highlight text", () => {
        const operation = new HighlightOperation();

        beforeEach(() => {
            jest.spyOn(operation, "apply");
            document.execute(operation);
        });

        it("should have run the operation ones per node", () => {
            expect(operation.apply).toHaveBeenCalledTimes(2);
        });

        it("should highlight heading", () => {
            expect(operation.apply).toHaveBeenNthCalledWith(1, heading);
            expect(console.log).toHaveBeenNthCalledWith(1, "highlight-heading");
        });

        it("should highlight anchor", () => {
            expect(operation.apply).toHaveBeenNthCalledWith(2, anchor);
            expect(console.log).toHaveBeenNthCalledWith(2, "highlight-anchor");
        });
    });

    describe("transform to plain text", () => {
        const operation = new PlainTextOperation();

        beforeEach(() => {
            jest.spyOn(operation, "apply");
            document.execute(operation);
        });

        it("should have run the operation ones per node", () => {
            expect(operation.apply).toHaveBeenCalledTimes(2);
        });

        it("should highlight heading", () => {
            expect(operation.apply).toHaveBeenNthCalledWith(1, heading);
            expect(console.log).toHaveBeenNthCalledWith(1, "heading-plain-text");
        });

        it("should highlight anchor", () => {
            expect(operation.apply).toHaveBeenNthCalledWith(2, anchor);
            expect(console.log).toHaveBeenNthCalledWith(2, "anchor-plain-text");
        });
    });
});
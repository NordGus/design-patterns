import Document from "./Document";
import HtmlDocumentExporter from "./exporters/HtmlDocumentExporter";
import PlainTextExporter from "./exporters/PlainTextExporter";
import Image from "./Image";
import Text from "./Text";

describe("A word processor like Word", () => {
    const document = new Document();

    beforeAll(() => {
        document.add(new Text("Hello World"));
        document.add(new Image("pic1.jpg"));
    });

    describe("export as HTML Document", () => {
        let builder: HtmlDocumentExporter;
        let result: string;

        beforeEach(() => {
            builder = new HtmlDocumentExporter();
            result = document.export(builder, "test.html");
        });

        it("should export de document text", () => {
            expect(result).toContain("<p>Hello World</p>");
        });

        it("should export de document image", () => {
            expect(result).toContain("<img src=\"pic1.jpg\" />");
        });
    });

    describe("export as plain text document", () => {
        let builder: PlainTextExporter;
        let result: string;

        beforeEach(() => {
            builder = new PlainTextExporter();
            result = document.export(builder, "test.txt");
        });

        it("should export de document text", () => {
            expect(result).toBe("Hello World");
        });
    });
});
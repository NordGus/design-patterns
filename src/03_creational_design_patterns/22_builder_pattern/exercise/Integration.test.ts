import Document from "./Document";
import { ExportFormat } from "./enums/ExportFormat";
import Image from "./Image";
import Text from "./Text";

describe("A word processor like Word", () => {
    const document = new Document();

    beforeAll(() => {
        document.add(new Text("Hello World"));
        document.add(new Image("pic1.jpg"));
    });

    describe("export as HTML Document", () => {
        it("should export de document text", () => {
            expect(document.export(ExportFormat.HTML, "test.html")).toContain("<p>Hello World</p>");
        });

        it("should export de document image", () => {
            expect(document.export(ExportFormat.HTML, "test.html")).toContain("<img src=\"pic1.jpg\" />");
        });
    });

    describe("export as plain text document", () => {
        it("should export de document text", () => {
            expect(document.export(ExportFormat.TEXT, "test.html")).toBe("Hello World");
        });
    });
});
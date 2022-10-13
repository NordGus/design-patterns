import { PresentationFormat } from "./enums/PresentationFormat";
import Presentation from "./Presentation";
import Slide from "./Slide";

describe("A presentation software like PowerPoint or Keynote", () => {
    const presentation = new Presentation();
    const slide1 = new Slide("Hello");
    const slide2 = new Slide("World");

    beforeAll(() => {
        presentation.addSlide(slide1);
        presentation.addSlide(slide2);
    });
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("exporting the presentation as a PDF Document", () => {
        beforeEach(() => presentation.export(PresentationFormat.PDF));

        it("should export each slide as a PDF page", () => {
            expect(console.log).toHaveBeenCalledTimes(2);
        });

        it("should export each slide text as a PDF page's contents", () => {
            expect(console.log).toHaveBeenCalledWith("Adding page to PDF: Hello");
        });

        it("should export each slide text as a PDF page's contents", () => {
            expect(console.log).toHaveBeenCalledWith("Adding page to PDF: World");
        });
    });

    describe("exporting the presentation as a Movie", () => {
        beforeEach(() => presentation.export(PresentationFormat.Movie));

        it("should export each slide as a PDF page", () => {
            expect(console.log).toHaveBeenCalledTimes(2);
        });

        it("should export each slide text as a PDF page's contents", () => {
            expect(console.log).toHaveBeenCalledWith("Adding frame to Movie: Hello duration: 3");
        });

        it("should export each slide text as a PDF page's contents", () => {
            expect(console.log).toHaveBeenCalledWith("Adding frame to Movie: World duration: 3");
        });
    });
});
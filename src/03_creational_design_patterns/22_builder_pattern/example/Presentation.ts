import { PresentationFormat } from "./enums/PresentationFormat";
import Movie from "./formats/Movie";
import PDFDocument from "./formats/PDFDocument";
import Slide from "./Slide";

export default class Presentation {
    private slides: Array<Slide> = new Array<Slide>();

    public addSlide(slide: Slide): void {
        this.slides.push(slide);
    }

    public export(format: PresentationFormat): void {
        switch (format) {
            case PresentationFormat.PDF:
                const pdf = new PDFDocument();
                for (const slide of this.slides)
                    pdf.addPage(slide.getText());
                break;
            case PresentationFormat.Movie:
                const movie = new Movie();
                for (const slide of this.slides)
                    movie.addFrame(slide.getText(), 3);
                break;
            default:
                break;
        }
    }
}
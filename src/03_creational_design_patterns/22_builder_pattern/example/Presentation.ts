import IPresentationBuilder from "./interfaces/IPresentationBuilder";
import Slide from "./Slide";

export default class Presentation {
    private slides: Array<Slide> = new Array<Slide>();

    public addSlide(slide: Slide): void {
        this.slides.push(slide);
    }

    public export(builder: IPresentationBuilder): void {
        for (const slide of this.slides)
            builder.addSlide(slide);
    }
}
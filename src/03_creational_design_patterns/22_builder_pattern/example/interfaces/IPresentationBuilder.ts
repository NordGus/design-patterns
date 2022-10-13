import Slide from "../Slide";

export default interface IPresentationBuilder {
    addSlide(slide: Slide): void
}
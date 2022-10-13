import Movie from "../formats/Movie";
import IPresentationBuilder from "../interfaces/IPresentationBuilder";
import Slide from "../Slide";

export default class MovieBuilder implements IPresentationBuilder {
    private movie: Movie;
    private frameDuration: number;

    constructor(frameDuration: number) {
        this.movie = new Movie();
        this.frameDuration = frameDuration;
    }

    public addSlide(slide: Slide): void {
        this.movie.addFrame(slide.getText(), this.frameDuration);
    }

    public getMovie(): Movie {
        return this.movie;
    }
}
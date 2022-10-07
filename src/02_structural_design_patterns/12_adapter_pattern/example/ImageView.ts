import Image from "./Image";
import IFilter from "./interfaces/IFilter";

export default class ImageView {
    private image: Image;

    constructor(image: Image) {
        this.image = image;
    }

    public apply(filter: IFilter): void {
        filter.apply(this.image);
    }
}
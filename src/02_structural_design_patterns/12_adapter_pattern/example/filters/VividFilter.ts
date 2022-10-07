import Image from "../Image";
import IFilter from "../interfaces/IFilter";

export default class VividFilter implements IFilter {
    public apply(image: Image): void {
        console.log("Applying vivid filter");
    }
}
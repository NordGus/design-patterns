import Image from "../Image";

export default interface IFilter {
    apply(image: Image): void;
}
import Image from "../Image";
import IFilter from "../interfaces/IFilter";
import Caramel from "../third_party_filters/Caramel";

export default class CaramelFilter implements IFilter {
    private filter: Caramel;

    constructor(filter: Caramel) {
        this.filter = filter;
    }

    public apply(image: Image): void {
        this.filter.init();
        this.filter.render(image);
    }
}
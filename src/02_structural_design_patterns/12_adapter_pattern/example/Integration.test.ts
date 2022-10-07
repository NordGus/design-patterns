import CaramelFilter from "./filters/CaramelFitler";
import VividFilter from "./filters/VividFilter";
import Image from "./Image";
import ImageView from "./ImageView";
import Caramel from "./third_party_filters/Caramel";

describe("A image editor in mobile app mobile app", () => {
    const image = new Image();
    const imageView = new ImageView(image);

    afterEach(() => jest.clearAllMocks());

    describe("previewing a propiaritary filter on an image", () => {
        const filter = new VividFilter();

        beforeEach(() => {
            jest.spyOn(filter, "apply");
            imageView.apply(filter);
        });

        it("should apply the filter", () => {
            expect(filter.apply).toHaveBeenCalledTimes(1);
        });

        it("should apply the filter to the image", () => {
            expect(filter.apply).toHaveBeenCalledWith(image);
        });
    });

    describe("previewing a third-party filter on an image", () => {
        const thirdPartyFilter = new Caramel;
        const filter = new CaramelFilter(thirdPartyFilter);

        beforeEach(() => {
            jest.spyOn(filter, "apply");
            jest.spyOn(thirdPartyFilter, "init");
            jest.spyOn(thirdPartyFilter, "render");
            imageView.apply(filter);
        });

        it("should apply the filter", () => {
            expect(filter.apply).toHaveBeenCalledTimes(1);
        });

        it("should apply the filter to the image", () => {
            expect(filter.apply).toHaveBeenCalledWith(image);
        });

        it("should initialize the third-party filter", () => {
            expect(thirdPartyFilter.init).toHaveBeenCalledTimes(1);
        });

        it("should render the third-party filter", () => {
            expect(thirdPartyFilter.render).toHaveBeenCalledTimes(1);
        });

        it("should render the image with the third-party filter", () => {
            expect(thirdPartyFilter.render).toHaveBeenCalledWith(image);
        });
    });
});
import VividFilter from "./filters/VividFilter";
import Image from "./Image";
import ImageView from "./ImageView";

describe("A image editor in mobile app mobile app", () => {
    const image = new Image();
    const propFilter = new VividFilter();
    const imageView = new ImageView(image);

    afterEach(() => jest.clearAllMocks());

    describe("previewing a propiaritary filter on an image", () => {
        beforeEach(() => {
            jest.spyOn(propFilter, "apply");
            imageView.apply(propFilter);
        });

        it("should apply the filter", () => {
            expect(propFilter.apply).toHaveBeenCalledTimes(1);
        });

        it("should apply the filter to the image", () => {
            expect(propFilter.apply).toHaveBeenCalledWith(image);
        });
    });
});
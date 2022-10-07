import Group from "./Group";
import Shape from "./Shape";

describe("An object hierarchy", () => {
    describe("a single group of shapes", () => {
        const group = new Group();
        const square = new Shape();
        const circle = new Shape();

        beforeAll(() => {
            group.add(square);
            group.add(circle);
        });
        afterEach(() => jest.clearAllMocks());

        describe("rendering shapes inside a group", () => {
            beforeEach(() => {
                jest.spyOn(square, "render");
                jest.spyOn(circle, "render");

                group.render();
            });

            it("should have render the square", () => {
                expect(square.render).toHaveBeenCalledTimes(1);
            });

            it("should have render the circle", () => {
                expect(circle.render).toHaveBeenCalledTimes(1);
            });
        });

        describe("move shapes inside a group", () => {
            beforeEach(() => {
                jest.spyOn(square, "move");
                jest.spyOn(circle, "move");

                group.move();
            });

            it("should have move the square", () => {
                expect(square.move).toHaveBeenCalledTimes(1);
            });

            it("should have move the circle", () => {
                expect(circle.move).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe("a group of groups of shapes", () => {
        const group = new Group();
        const group1 = new Group();
        const group2 = new Group();

        const square1 = new Shape();
        const circle1 = new Shape();
        const square2 = new Shape();
        const circle2 = new Shape();

        beforeAll(() => {
            group1.add(square1);
            group1.add(circle1);

            group2.add(square2);
            group2.add(circle2);

            group.add(group1);
            group.add(group2);
        });
        afterEach(() => jest.clearAllMocks());

        describe("rendering groups of shapes inside a group", () => {
            beforeEach(() => {
                jest.spyOn(group1, "render");
                jest.spyOn(group2, "render");

                group.render();
            });

            it("should have render the first group", () => {
                expect(group1.render).toHaveBeenCalledTimes(1);
            });

            it("should have render the second group", () => {
                expect(group2.render).toHaveBeenCalledTimes(1);
            });
        });

        describe("moving groups of shapes inside a group", () => {
            beforeEach(() => {
                jest.spyOn(group1, "move");
                jest.spyOn(group2, "move");

                group.move();
            });

            it("should have move the first group", () => {
                expect(group1.move).toHaveBeenCalledTimes(1);
            });

            it("should have render the second group", () => {
                expect(group2.move).toHaveBeenCalledTimes(1);
            });
        });
    });
});
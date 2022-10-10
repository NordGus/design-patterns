import Demo from "./Demo";

describe("A Spreadsheet application like Excel or Numbers", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
        Demo.show();
    });
    afterAll(() => jest.clearAllMocks());

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(1, "(0, 0): Hello [Arial]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(2, "(0, 1): undefined [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(3, "(0, 2): undefined [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(4, "(1, 0): World [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(5, "(1, 1): undefined [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(6, "(1, 2): undefined [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(7, "(2, 0): undefined [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(8, "(2, 1): undefined [Times New Roman]");
    });

    it("should have a cell with the format", () => {
        expect(console.log).toHaveBeenNthCalledWith(9, "(2, 2): undefined [Times New Roman]");
    });
});
import ExcelReader from "./readers/ExcelReader";
import NumbersReader from "./readers/NumbersReader";
import QuickBooksReader from "./readers/QuickBooksReader";

describe("Import system for an accounting application", () => {
    const excel = new ExcelReader();
    const numbers = new NumbersReader();
    const quikBooks = new QuickBooksReader();

    beforeAll(() => {
        excel.setNext(numbers);
        numbers.setNext(quikBooks);
        quikBooks.setNext(null);
    });
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("Exel Import", () => {
        beforeEach(() => {
            jest.spyOn(excel, "read");
            excel.read("test.xls");
        });

        it("should execute ExcelReader", () => {
            expect(excel.read).toHaveBeenCalledTimes(1);
        });
        
        it("should read the file", () => {
            expect(console.log).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith("Reading data from an Excel spreadsheet.");
        });
    });
    
    describe("Numbers Import", () => {
        beforeEach(() => {
            jest.spyOn(numbers, "read");
            excel.read("test.numbers");
        });

        it("should execute NumbersReader", () => {
            expect(numbers.read).toHaveBeenCalledTimes(1);
        });
        
        it("should read the file", () => {
            expect(console.log).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith("Reading data from a Numbers spreadsheet.");
        });
    });
    
    describe("QuibkBooks Import", () => {
        beforeEach(() => {
            jest.spyOn(quikBooks, "read");
            excel.read("test.qbw");
        });

        it("should execute NumbersReader", () => {
            expect(quikBooks.read).toHaveBeenCalledTimes(1);
        });
        
        it("should read the file", () => {
            expect(console.log).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith("Reading data from a QuickBooks file.");
        });
    });
    
    describe("Unsupported Import", () => {
        it("should throw an error", () => {
            try {
                excel.read("test.ftw");
            } catch (error) {
                expect(error.message).toBe("File format not supported.");
            }
        });
    });
});
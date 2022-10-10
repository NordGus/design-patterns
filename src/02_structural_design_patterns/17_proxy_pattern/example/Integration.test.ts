import Library from "./Library";
import EbookProxy from "./proxies/EbookProxy";

describe("An application to read ebooks", () => {
    const ebooks = ["Starship Troopers", "Extreme Ownership", "The 48 Laws of Power"];
    let library: Library;
    
    beforeEach(() => {
        jest.spyOn(console, "log");

        library = new Library();

        for (const ebook of ebooks) {
            library.add(new EbookProxy(ebook));
        }

        library.openEbook("Starship Troopers");
    });

    afterEach(() => jest.clearAllMocks())

    it("should have only load and show the requested ebook", () => {
        expect(console.log).toHaveBeenCalledTimes(2);
    });

    it("should only load the requested ebook", () =>  {
        expect(console.log).toHaveBeenCalledWith("Loading the ebook Starship Troopers");
    });

    it("should only show the requested ebook", () =>  {
        expect(console.log).toHaveBeenCalledWith("Showing the ebook Starship Troopers");
    });
});
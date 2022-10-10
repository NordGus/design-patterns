import Ebook from "./Ebook";
import Library from "./Library";

describe("An application to read ebooks", () => {
    const ebooks = ["Starship Troopers", "Extreme Ownership", "The 48 Laws of Power"];
    let library: Library;
    
    beforeEach(() => {
        jest.spyOn(console, "log");

        library = new Library();

        for (const ebook of ebooks) {
            library.add(new Ebook(ebook));
        }

        library.openEbook("Starship Troopers");
    });

    afterEach(() => jest.clearAllMocks())

    it("should only load the required ebook", () =>  {
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("Loading the ebook Starship Troopers");
    });

    it("should only show the required ebook", () =>  {
        expect(console.log).toHaveBeenCalledWith("Showing the ebook Starship Troopers");
    });
});
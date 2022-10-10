import Demo from "./Demo";

describe("A social media management tool", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
        Demo.show();
    });
    afterAll(() => jest.clearAllMocks());

    it("should have request recent tweets from TwitterService", () => {
        expect(console.log).toHaveBeenNthCalledWith(1, "Retrieving Recent Tweets");
    });

    it("should have get request token", () => {
        expect(console.log).toHaveBeenNthCalledWith(2, "Get a request token");
    });

    it("should have get access token", () => {
        expect(console.log).toHaveBeenNthCalledWith(3, "Get an access token");
    });

    it("should have retrive the recent tweets from the TwitterClient", () => {
        expect(console.log).toHaveBeenNthCalledWith(4, "Getting recent tweets");
    });
});
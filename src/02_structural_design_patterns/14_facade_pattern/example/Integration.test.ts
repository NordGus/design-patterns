import NotificationService from "./NotificationService";

describe("A messaging app notification feature", () => {
    const service = new NotificationService();
    
    beforeAll(() => {
        jest.spyOn(console, "log");
        service.send("Hello World", "target");
    });
    afterAll(() => jest.clearAllMocks());

    it("should connect to server", () => {
        expect(console.log).toHaveBeenCalledWith("Creating connection to server");
    });

    it("should authenticate", () => {
        expect(console.log).toHaveBeenCalledWith("Creating authentication token");
    });

    it("should send the message", () => {
        expect(console.log).toHaveBeenCalledWith("Sending a message");
    });

    it("should disconnect from server", () => {
        expect(console.log).toHaveBeenCalledWith("Disconnecting from server");
    });
});
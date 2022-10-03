import ChatClient from "./ChatClient";
import DesEncryption from "./encryption_algorithms/DesEncryption";

describe("ChatClient", () => {
    let client: ChatClient;

    beforeEach(() => { client = new ChatClient(new DesEncryption()) });
    afterEach(() => { jest.clearAllMocks() });

    describe("#send", () => {
        it("should encrypt the message", () => {
            const consoleSpy = jest.spyOn(console, "log");
            client.send("test");
            expect(consoleSpy.mock.calls[0][0]).toBe("Encrypting message using DES");
        });

        it("should send the encrypted message", () => {
            const consoleSpy = jest.spyOn(console, "log");
            client.send("test");
            expect(consoleSpy.mock.calls[1][0]).toBe("Sending the encrypted message...");
        });
    });
});
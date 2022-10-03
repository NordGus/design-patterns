import ChatClient from "./ChatClient";

describe("ChatClient", () => {
    let client: ChatClient;

    afterEach(() => { jest.clearAllMocks() });

    describe("#send", () => {
        describe("with DES encryption", () => {
            beforeEach(() => { client = new ChatClient("DES") });

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
        describe("with AES encryption", () => {
            beforeEach(() => { client = new ChatClient("AES") });

            it("should encrypt the message", () => {
                const consoleSpy = jest.spyOn(console, "log");
                client.send("test");
                expect(consoleSpy.mock.calls[0][0]).toBe("Encrypting message using AES");
            });

            it("should send the encrypted message", () => {
                const consoleSpy = jest.spyOn(console, "log");
                client.send("test");
                expect(consoleSpy.mock.calls[1][0]).toBe("Sending the encrypted message...");
            });
        });
        describe("with unsupported encription", () => {
            beforeEach(() => { client = new ChatClient("BAD") });

            it("should throw an Error", () => {
                try {
                    client.send("test");
                } catch (error) {
                    expect(error.message).toBe("Unsupported encryption algorithm")
                }
            });
        });
    });
});
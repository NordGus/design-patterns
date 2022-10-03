import AesEncryption from "./AesEncryption";

describe("AesEncryption", () => {
    const algorithm = new AesEncryption();
    
    afterEach(() => { jest.clearAllMocks() });

    describe("#apply", () => {
        it("shoould apply the correct algorithm", () => {
            const consoleSpy = jest.spyOn(console, "log");
            algorithm.apply("test");
            expect(consoleSpy).toHaveBeenCalledWith("Encrypting message using AES");
        });
    });
});
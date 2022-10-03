import DesEncryption from "./DesEncryption";

describe("AesEncryption", () => {
    const algorithm = new DesEncryption();
    
    afterEach(() => { jest.clearAllMocks() });

    describe("#apply", () => {
        it("shoould apply the correct algorithm", () => {
            const consoleSpy = jest.spyOn(console, "log");
            algorithm.apply("test");
            expect(consoleSpy).toHaveBeenCalledWith("Encrypting message using DES");
        });
    });
});
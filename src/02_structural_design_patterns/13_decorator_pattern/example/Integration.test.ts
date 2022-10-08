import CloudStream from "./CloudStream";
import CompresedCloudStream from "./decorators/CompresedCloudStream";
import EncryptedCloudStream from "./decorators/EncryptedCloudStream";
import IStream from "./interfaces/IStream";

describe("A cloud services app", () => {
    const stream = new CloudStream();
    const data = "1234-1234-1234-1234"
    const store = (stream: IStream, data: string) => stream.write(data);

    afterEach(() => jest.clearAllMocks());

    describe("storing data", () => {
        beforeEach(() => {
            jest.spyOn(stream, "write");
            store(stream, data);
        });

        it("should have stored the data", () => {
            expect(stream.write).toHaveBeenCalledTimes(1);
        });
    });

    describe("storing encripted data", () => {
        const decorator = new EncryptedCloudStream(stream);

        beforeEach(() => {
            jest.spyOn(decorator, "write");
            jest.spyOn(stream, "write");
            store(decorator, data);
        });

        it("should have stored the data", () => {
            expect(stream.write).toHaveBeenCalledTimes(1);
        });

        it("should have encripted the data", () => {
            expect(decorator.write).toHaveBeenCalledTimes(1);
        });
    });

    describe("storing compressed data", () => {
        const decorator = new CompresedCloudStream(stream);

        beforeEach(() => {
            jest.spyOn(decorator, "write");
            jest.spyOn(stream, "write");
            store(decorator, data);
        });

        it("should have stored the data", () => {
            expect(stream.write).toHaveBeenCalledTimes(1);
        });

        it("should have compressed the data", () => {
            expect(decorator.write).toHaveBeenCalledTimes(1);
        });
    });

    describe("storing compressed and encrypted data", () => {
        const encryption = new EncryptedCloudStream(stream);
        const compression = new CompresedCloudStream(encryption);

        beforeEach(() => {
            jest.spyOn(compression, "write"); 
            jest.spyOn(encryption, "write"); 
            jest.spyOn(stream, "write");
            store(compression, data);
        });
        
        it("should have compressed the data", () => {
            expect(compression.write).toHaveBeenCalledTimes(1);
        });

        it("should have encrypted the data", () => {
            expect(encryption.write).toHaveBeenCalledTimes(1);
        });
        
        it("should have stored the data", () => {
            expect(stream.write).toHaveBeenCalledTimes(1);
        });
    });
});
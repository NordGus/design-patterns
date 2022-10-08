import IStream from "../interfaces/IStream";

export default class EncryptedCloudStream implements IStream {
    private stream: IStream;

    constructor(stream: IStream) {
        this.stream = stream;
    }

    public write(data: string): void {
        const encrypted = this.encrypt(data);
        this.stream.write(encrypted);
    }

    private encrypt(data: string): string {
        return "!@#$$%^#$?><$%";
    }
}
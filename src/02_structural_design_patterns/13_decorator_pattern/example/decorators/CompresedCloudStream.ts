import IStream from "../interfaces/IStream";

export default class CompresedCloudStream implements IStream {
    private stream: IStream;

    constructor(stream: IStream) {
        this.stream = stream;
    }

    public write(data: string): void {
        const compressed = this.compressed(data);
        this.stream.write(compressed);
    }

    private compressed(data: string): string {
        return data.slice(0, 5);
    }
}
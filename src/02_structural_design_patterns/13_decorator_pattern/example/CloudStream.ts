import IStream from "./interfaces/IStream";

export default class CloudStream implements IStream {
    public write(data: string): void {
        console.log("Storing " + data);
    }
}
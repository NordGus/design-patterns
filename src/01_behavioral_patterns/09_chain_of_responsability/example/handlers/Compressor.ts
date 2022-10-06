import Handler from "../Handler";
import HttpRequest from "../HttpRequest";

export default class Compressor extends Handler {
    protected override doHandle(request: HttpRequest): boolean {
        console.log("Compressed");
        return true;
    }
}
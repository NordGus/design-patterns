import Handler from "../Handler";
import HttpRequest from "../HttpRequest";

export default class Encryptor extends Handler {
    protected override doHandle(request: HttpRequest): boolean {
        console.log("Encrypted");
        return false;
    }
}
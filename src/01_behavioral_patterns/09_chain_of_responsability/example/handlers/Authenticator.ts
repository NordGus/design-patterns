import Handler from "../Handler";
import HttpRequest from "../HttpRequest";

export default class Authenticator extends Handler {
    protected override doHandle(request: HttpRequest): boolean {
        const isValid = (request.getUsername() === "admin" && request.getPassword() === "1234");

        console.log("Authenticated: " + isValid);

        return !isValid;
    }
}
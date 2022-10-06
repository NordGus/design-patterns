import Handler from "./Handler";
import HttpRequest from "./HttpRequest";

export default class WebServer {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    public handle(request: HttpRequest): void {
        this.handler.handle(request);
    }
}
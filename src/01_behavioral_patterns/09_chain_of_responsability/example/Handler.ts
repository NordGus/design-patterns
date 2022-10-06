import HttpRequest from "./HttpRequest";

export default abstract class Handler {
    private next: Handler;

    constructor(next?: Handler) {
        this.next = next ? next : null;
    }

    public handle(request: HttpRequest): void {
        if (this.doHandle(request)) return;

        if (!!this.next) this.next.handle(request);
    }

    protected abstract doHandle(request: HttpRequest): boolean;
}
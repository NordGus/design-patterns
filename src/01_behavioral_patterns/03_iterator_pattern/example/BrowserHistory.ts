import IIterator from "./IIterator";
import Stack from "./Stack";
import StackIterator from "./StackIterator";

export default class BrowserHistory {
    private urls: Stack; 

    constructor() {
        this.urls = new Stack();
    }

    public push(url: string): void {
        this.urls.push(url);   
    }

    public pop(): string {
        return this.urls.pop();
    }

    public get size(): number {
        return this.urls.getSize();
    }

    public getUrls(): IIterator<string> {
        return new StackIterator(this.urls);
    }
}
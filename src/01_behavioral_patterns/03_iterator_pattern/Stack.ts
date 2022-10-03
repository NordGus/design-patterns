interface Entry {
    url: string,
    next?: Entry
}

export default class Stack {
    private top: Entry;
    private size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }
    
    public push(value: string): void {
        this.top = { url: value, next: this.top };
        this.size++;
    }

    public pop(): string {
        if (!this.top) throw new Error("empty stack");
        
        const node = this.top;
        this.top = this.top.next;
        const value = node.url;
        node.next = null;
        this.size--;

        return value;
    }

    public peek(): string {
        if (!this.top) return null;
        
        return this.top.url;
    }

    public getSize(): number {
        return this.size;
    }
}
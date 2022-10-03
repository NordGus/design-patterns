import DocumentState from "./DocumentState";

export default class History {
    private states: Stack; 

    constructor() {
        this.states = new Stack();
    }

    public push(state: DocumentState): void {
        this.states.push(state);   
    }

    public pop(): DocumentState {
        return this.states.pop();
    }

    public get size(): number {
        return this.states.getSize();
    }
}

interface Node {
    state: DocumentState,
    next?: Node
}

class Stack {
    private top: Node;
    private size: number;

    constructor() {
        this.top = null;
        this.size = 0;
    }
    
    public push(value: DocumentState): void {
        this.top = { state: value, next: this.top };
        this.size++;
    }

    public pop(): DocumentState {
        if (!this.top) throw new Error("empty stack");
        
        const node = this.top;
        this.top = this.top.next;
        const value = node.state;
        node.next = null;
        this.size--;

        return value;
    }

    public getSize(): number {
        return this.size;
    }
}
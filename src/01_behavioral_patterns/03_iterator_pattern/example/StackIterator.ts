import IIterator from "./IIterator";
import Stack from "./Stack";

export default class StackIterator implements IIterator<string> {
    private stack: Stack;

    constructor(stack: Stack) {
        const temp = new Stack();
        this.stack = new Stack();

        while (stack.getSize() > 0)
            temp.push(stack.pop());

        while (temp.getSize() > 0) {
            const val = temp.pop()

            stack.push(val);
            this.stack.push(val);
        }
    }

    public hasNext(): boolean {
        return this.stack.getSize() > 0;
    }

    public current(): string {
        return this.stack.peek();
    }

    public next(): void {
        this.stack.pop();
    }
}
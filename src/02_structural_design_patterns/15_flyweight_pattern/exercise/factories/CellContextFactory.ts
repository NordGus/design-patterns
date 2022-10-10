import CellContext from "../CellContext";

export default class CellContextFactory {
    private contexts: Map<string, CellContext> = new Map<string, CellContext>();

    public getContext(fontFamily: string, fontSize: number, isBold: boolean): CellContext {
        const context = new CellContext(fontFamily, fontSize, isBold);

        if (!this.contexts.has(context.getHashCode()))
            this.contexts.set(context.getHashCode(), context);

        return this.contexts.get(context.getHashCode())
    }
}
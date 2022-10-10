export default class CellContext {
    private fontFamily: string;
    private fontSize: number;
    private isBold: boolean;

    constructor(fontFamily: string, fontSize: number, isBold: boolean) {
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.isBold = isBold;
    }

    public getFontFamily(): string {
        return this.fontFamily;
    }

    public getFontSize(): number {
        return this.fontSize;
    }

    public bold(): boolean {
        return this.isBold;
    }

    public getHashCode(): string {
        return `${this.fontFamily} ${this.fontSize} ${this.isBold}`;
    }
}
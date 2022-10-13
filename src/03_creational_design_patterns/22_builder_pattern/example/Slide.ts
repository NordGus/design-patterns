export default class Slide {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public getText(): string {
        return this.text;
    }
}
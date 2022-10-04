export default class VideoEditor {
    private contrast: number = 0.5;
    private text: string;

    public setText(text: string): void {
        this.text = text;
    }

    public removeText(): void {
        this.text = "";
    }

    public getContrast(): number {
        return this.contrast;
    }

    public setContrast(contrast: number): void {
        this.contrast = contrast;
    }

    public toString(): string {
        return `VideoEditor {contrast=${this.contrast}, text="${this.text}"}`
    }
}
import PointIcon from "./PointIcon";

export default class Point {
    private x: number; // 4 bytes
    private y: number; // 4 bytes
    private icon: PointIcon;

    constructor(x: number, y: number, icon: PointIcon) {
        this.x = x;
        this.y = y;
        this.icon = icon;
    }

    public draw(): void {
        console.log(`${this.icon.getPointType()} at (${this.x}, ${this.y})`);
    }
}
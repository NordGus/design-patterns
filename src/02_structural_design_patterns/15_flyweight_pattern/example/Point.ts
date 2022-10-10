import { PointType } from "./enums/PointType";

export default class Point {
    private x: number; // 4 bytes
    private y: number; // 4 bytes
    private pointType: PointType; // 4 bytes
    private icon: Int8Array; // 20 KB -> if you have 1000 points, it needs 20MB

    constructor(x: number, y: number, pointType: PointType, icon: Int8Array) {
        this.x = x;
        this.y = y;
        this.pointType = pointType;
        this.icon = icon;
    }

    public draw(): void {
        console.log(`${this.pointType} at (${this.x}, ${this.y})`);
    }
}
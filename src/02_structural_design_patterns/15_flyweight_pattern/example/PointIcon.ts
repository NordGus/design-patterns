import { PointType } from "./enums/PointType";

export default class PointIcon {
    private readonly pointType: PointType; // 4 bytes
    private readonly icon: Int8Array;      // 20 KB

    constructor(pointType: PointType, icon: Int8Array) {
        this.pointType = pointType;
        this.icon = icon;
    }

    public getPointType(): PointType {
        return this.pointType;
    }
}
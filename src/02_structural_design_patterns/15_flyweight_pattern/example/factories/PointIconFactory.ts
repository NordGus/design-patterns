import { PointType } from "../enums/PointType";
import PointIcon from "../PointIcon";

export default class PointIconFactory {
    private icons: Map<PointType, PointIcon> = new Map<PointType, PointIcon>();

    public getPointIcon(type: PointType): PointIcon {
        if (!this.icons.has(type)) {
            const icon = new PointIcon(type, null);
            this.icons.set(type, icon);
        }

        return this.icons.get(type);
    }
}
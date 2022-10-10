import { PointType } from "./enums/PointType";
import PointIconFactory from "./factories/PointIconFactory";
import Point from "./Point";

export default class PointService {
    private iconFactory: PointIconFactory;

    constructor(iconFactory: PointIconFactory) {
        this.iconFactory = iconFactory;
    }

    public getPoints(): Array<Point> {
        console.log("Retrieving Points");
        
        const points = new Array<Point>();

        points.push(new Point(1, 2, this.iconFactory.getPointIcon(PointType.Cafe)));
        points.push(new Point(7, 343, this.iconFactory.getPointIcon(PointType.Default)));
        points.push(new Point(42, 117, this.iconFactory.getPointIcon(PointType.Hospital)));
        points.push(new Point(5, 50, this.iconFactory.getPointIcon(PointType.Restaurant)));

        return points;
    }
}
import { PointType } from "./enums/PointType";
import Point from "./Point";

export default class PointService {
    public getPoints(): Array<Point> {
        console.log("Retrieving Points");
        
        const points = new Array<Point>();

        points.push(new Point(1, 2, PointType.Cafe, null));
        points.push(new Point(7, 343, PointType.Default, null));
        points.push(new Point(42, 117, PointType.Hospital, null));
        points.push(new Point(5, 50, PointType.Restaurant, null));

        return points;
    }
}
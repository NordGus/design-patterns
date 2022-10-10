import PointService from "./PointService";

export default class Demo {
    public static drawPoints(): void {
        const service = new PointService();
        const points = service.getPoints();

        for (const point of points)
            point.draw();
    }
}
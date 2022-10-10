import PointIconFactory from "./factories/PointIconFactory";
import PointService from "./PointService";

export default class Demo {
    public static drawPoints(): void {
        const iconFactory = new PointIconFactory()
        const service = new PointService(iconFactory);
        const points = service.getPoints();

        for (const point of points)
            point.draw();
    }
}
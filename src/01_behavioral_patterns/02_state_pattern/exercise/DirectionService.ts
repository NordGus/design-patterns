import ITravelMode from "./ITravelMode";
import Walking from "./TravelModes/Walnking";

export default class DirectionService {
    private travelMode: ITravelMode;

    constructor(travelMode?: ITravelMode) {
        if (!travelMode)
            this.travelMode = new Walking();
        else
            this.travelMode = travelMode;
    }

    public getEta(): any {
        return this.travelMode.getEta();
    }

    public getDirection(): any {
        return this.travelMode.getDirection();
    }

    public setTravelMode(travelMode: ITravelMode): void {
        this.travelMode = travelMode;
    }

    public getTravelMode(): ITravelMode {
        return this.travelMode;
    }
}
import ITravelMode from "../ITravelMode";

export default class Driving implements ITravelMode {
    public getEta(): any {
        console.log("Calculating ETA (driving)")
        return 1;
    }

    public getDirection(): any {
        console.log("Calculating Direction (driving)")
        return 1;
    }
}
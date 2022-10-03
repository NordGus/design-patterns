import ITravelMode from "../ITravelMode";

export default class Bicycling implements ITravelMode {
    public getEta(): any {
        console.log("Calculating ETA (bicycling)")
        return 2;
    }

    public getDirection(): any {
        console.log("Calculating Direction (bicycling)")
        return 2;
    }
}
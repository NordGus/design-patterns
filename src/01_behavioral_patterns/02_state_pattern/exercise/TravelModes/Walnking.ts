import ITravelMode from "../ITravelMode";

export default class Walking implements ITravelMode {
    public getEta(): any {
        console.log("Calculating ETA (walking)")
        return 4;
    }

    public getDirection(): any {
        console.log("Calculating Direction (walking)")
        return 4;
    }
}
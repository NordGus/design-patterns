import ITravelMode from "../ITravelMode";

export default class Transit implements ITravelMode {
    public getEta(): any {
        console.log("Calculating ETA (transit)")
        return 3;
    }

    public getDirection(): any {
        console.log("Calculating Direction (transit)")
        return 3;
    }
}
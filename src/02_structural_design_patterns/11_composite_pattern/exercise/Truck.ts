import IResource from "./interfaces/IResource";

export default class Truck implements IResource {
    public deploy(): void {
        console.log("Deploying a truck");
    }
  }
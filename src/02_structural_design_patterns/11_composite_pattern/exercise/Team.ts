import HumanResource from "./HumanResource";
import Truck from "./Truck";

export default class Team {
    private resources = new Array<unknown>();
  
    public add(resource: unknown): void {
        this.resources.push(resource);
    }
  
    public deploy(): void {
      for (var resource of this.resources) {
        if (resource.constructor === Truck)
            (resource as Truck).deploy();
        else if (resource.constructor === HumanResource)
            (resource as HumanResource).deploy();
        else
            (resource as Team).deploy();
      }
    }
  }
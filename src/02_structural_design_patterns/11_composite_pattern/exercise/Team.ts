import IResource from "./interfaces/IResource";

export default class Team implements IResource {
    private resources = new Array<IResource>();
  
    public add(resource: IResource): void {
        this.resources.push(resource);
    }
  
    public deploy(): void {
        for (var resource of this.resources) {
            resource.deploy();
        }
    }
  }
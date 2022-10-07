import IResource from "./interfaces/IResource";

export default class HumanResource implements IResource {
    public deploy(): void {
        console.log("Deploying a human resource");
    }
}
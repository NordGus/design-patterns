import CustomerService from "../CustormerService";
import ICommand from "../framework/ICommand";

export default class AddCustomerCommand implements ICommand {
    private service: CustomerService;

    constructor(service: CustomerService) {
        this.service = service;
    }

    public execute(): void {
        this.service.addCustomer();
    }
}
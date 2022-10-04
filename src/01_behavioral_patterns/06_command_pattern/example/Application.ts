import AddCustomerCommand from "./commands/AddCustomerCommand";
import CustomerService from "./CustormerService";
import Button from "./framework/Button";

export default class Application {
    public main(): void {
        const service = new CustomerService();
        const command = new AddCustomerCommand(service);
        const button = new Button(command);
        
        button.click();
    }
}
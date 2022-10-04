import CustomerService from "../CustormerService";
import AddCustomerCommand from "./AddCustomerCommand";

describe("AddCustomerCommand", () => {
    const service = new CustomerService()
    const command = new AddCustomerCommand(service);

    beforeAll(() => { jest.spyOn(service, "addCustomer") })
    afterEach(() => { jest.clearAllMocks() });

    describe("#addCustomer", () => {
        it("should class the addCustomer method from CustomerSerive", () => {
            command.execute();
            expect(service.addCustomer).toHaveBeenCalledTimes(1);
        });
    });
});
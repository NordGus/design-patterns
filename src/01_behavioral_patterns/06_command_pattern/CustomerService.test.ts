import CustomerService from "./CustormerService";

describe("CustomerService", () => {
    const service = new CustomerService();

    afterEach(() => { jest.clearAllMocks() });

    describe("#addCustomer", () => {
        it("should add a new customer", () => {
            const consoleSpy = jest.spyOn(console, "log");
            service.addCustomer();
            expect(consoleSpy).toHaveBeenCalledWith("Add customer")
        });
    });
});
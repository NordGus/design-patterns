import ContactForm from "./app/ContactForm";
import { Theme } from "./enums/Theme";

describe("A contact form in multi-theme web application", () => {
    const contactForm = new ContactForm();
    
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("render a contact form with Ant theme", () => {
        beforeEach(() => contactForm.render(Theme.Ant));

        it("should render a button with the given theme", () => {
            expect(console.log).toHaveBeenCalledWith("Ant Button");
        });

        it("should render a text box with the given theme", () => {
            expect(console.log).toHaveBeenCalledWith("Ant TextBox");
        });
    });

    describe("render a contact form with Material theme", () => {
        beforeEach(() => contactForm.render(Theme.Material));

        it("should render a button with the given theme", () => {
            expect(console.log).toHaveBeenCalledWith("Material Button");
        });

        it("should render a text box with the given theme", () => {
            expect(console.log).toHaveBeenCalledWith("Material TextBox");
        });
    });
});
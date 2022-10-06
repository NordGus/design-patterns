import SignUpDialogBox from "./mediators/SignUpDialogBox";

describe("Sign Up dialog for new users", () => {
    const dialogBox = new SignUpDialogBox();
    
    describe("sign up button behavior", () => {
        it("should be disabled", () => {
            expect(dialogBox.getSignUpButton().enabled()).toBeFalsy();
        });
    
        it("should remain disabled when only the username text box is filled", () => {
            dialogBox.getUsernameTextBox().setContent("jonhwick");
            expect(dialogBox.getSignUpButton().enabled()).toBeFalsy();
        });
    
        it("should remain disabled when terms check box remains unchecked", () => {
            dialogBox.getPasswordTextBox().setContent("doggolover");
            expect(dialogBox.getSignUpButton().enabled()).toBeFalsy();
        });
    
        it("should be enabled when username text box and password text box are filled and terms checkbox is checked", () => {
            dialogBox.getTermsCheckBox().setChecked(true);
            expect(dialogBox.getSignUpButton().enabled()).toBeTruthy();
        });
    });
});
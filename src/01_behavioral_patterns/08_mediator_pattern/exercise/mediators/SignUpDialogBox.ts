import IObserver from "../interfaces/IObserver";
import Button from "../ui_controls/Buttons";
import CheckBox from "../ui_controls/Checkbox";
import TextBox from "../ui_controls/TextBox";

export default class SignUpDialogBox implements IObserver {
    private usernameTextBox: TextBox;
    private passwordTextBox: TextBox;
    private termsCheckBox: CheckBox;
    private signUpButton: Button;

    constructor() {
        this.usernameTextBox = new TextBox();
        this.passwordTextBox = new TextBox();
        this.termsCheckBox = new CheckBox();
        this.signUpButton = new Button();

        this.usernameTextBox.attach(this);
        this.passwordTextBox.attach(this);
        this.termsCheckBox.attach(this);
    }

    public update(): void {
        const usernamePresent = !!this.usernameTextBox.getContent();
        const passwordPresent = !!this.passwordTextBox.getContent();
        const termsAccepted = this.termsCheckBox.checked();

        this.signUpButton.setEnabled(usernamePresent && passwordPresent && termsAccepted);
    }

    // Debug method
    public getUsernameTextBox(): TextBox {
        return this.usernameTextBox;
    }
    
    // Debug method
    public getPasswordTextBox(): TextBox {
        return this.passwordTextBox
    }
    
    // Debug method
    public getTermsCheckBox(): CheckBox {
        return this.termsCheckBox;
    }
    
    // Debug method
    public getSignUpButton(): Button {
        return this.signUpButton;
    }
}
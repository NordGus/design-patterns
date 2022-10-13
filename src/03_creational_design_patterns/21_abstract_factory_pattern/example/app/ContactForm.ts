import AntButton from "../ant/AntButton";
import AntTextBox from "../ant/AntTextBox";
import { Theme } from "../enums/Theme";
import MaterialButton from "../material/MaterialButton";
import MaterialTextBox from "../material/MaterialTextBox";

export default class ContactForm {
    public render(theme: Theme): void {
        if (theme === Theme.Ant) {
            new AntButton().render();
            new AntTextBox().render();
        }
        else if (theme === Theme.Material) {
            new MaterialButton().render();
            new MaterialTextBox().render();
        }
    }
}
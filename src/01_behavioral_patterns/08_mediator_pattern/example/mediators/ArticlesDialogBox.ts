import Button from "../colleagues/Button";
import ListBox from "../colleagues/ListBox";
import TextBox from "../colleagues/TextBox";
import DialogBox from "../DialogBox";
import UIControl from "../UIControl";

export default class ArticlesDialogBox extends DialogBox {
    private articlesListBox: ListBox;
    private titleTextBox: TextBox;
    private saveButton: Button;

    constructor() {
        super();
        this.articlesListBox = new ListBox(this);
        this.titleTextBox = new TextBox(this);
        this.saveButton = new Button(this);
    }

    public override changed(control: UIControl): void {
        if (control === this.articlesListBox) {
            this.titleTextBox.setContent(this.articlesListBox.getSelection());
            this.saveButton.setEnabled(true);
        }
        else if (control === this.titleTextBox) {
            this.saveButton.setEnabled(!!this.titleTextBox.getContent());
        }
    }

    // debug method
    public getArticlesList(): ListBox {
        return this.articlesListBox;
    }

    // debug method
    public getTitleTextBox(): TextBox {
        return this.titleTextBox;
    }

    // debug method
    public getSaveButton(): Button {
        return this.saveButton;
    }
}
import Button from "../colleagues/Button";
import ListBox from "../colleagues/ListBox";
import TextBox from "../colleagues/TextBox";
import IObserver from "../interfaces/IObserver";

class ArticleSelectedObserver implements IObserver {
    private articlesListBox: ListBox;
    private titleTextBox: TextBox;
    private saveButton: Button;

    constructor(articlesListBox: ListBox, titleTextBox: TextBox, saveButton: Button) {
        this.articlesListBox = articlesListBox;
        this.titleTextBox = titleTextBox;
        this.saveButton = saveButton;
    }

    public update(): void {
        this.titleTextBox.setContent(this.articlesListBox.getSelection());
        this.saveButton.setEnabled(true);
    }
}

class TitleChangedObserver implements IObserver {
    private titleTextBox: TextBox;
    private saveButton: Button;

    constructor(titleTextBox: TextBox, saveButton: Button) {
        this.titleTextBox = titleTextBox;
        this.saveButton = saveButton;
    }

    public update(): void {
        this.saveButton.setEnabled(!!this.titleTextBox.getContent());
    }
}

export default class ArticlesDialogBox {
    private articlesListBox: ListBox;
    private titleTextBox: TextBox;
    private saveButton: Button;

    constructor() {
        this.articlesListBox = new ListBox();
        this.titleTextBox = new TextBox();
        this.saveButton = new Button();

        this.articlesListBox.attach(new ArticleSelectedObserver(this.articlesListBox, this.titleTextBox, this.saveButton));
        this.titleTextBox.attach(new TitleChangedObserver(this.titleTextBox, this.saveButton));
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
import ArticlesDialogBox from "./mediators/ArticlesDialogBox";

describe("GUI app where user can select acticles and edit their titles", () => {
    const dialogBox = new ArticlesDialogBox();
    
    it("should select an article", () => {
        dialogBox.getArticlesList().setSelection("Article 1");
        expect(dialogBox.getArticlesList().getSelection()).toBe("Article 1");
    });

    it("should have changed the title textbox contents to the selected article's", () => {
        expect(dialogBox.getTitleTextBox().getContent()).toBe("Article 1");
    });

    it("should have enabled the save button", () => {
        expect(dialogBox.getSaveButton().enabled()).toBeTruthy();
    });

    it("should disable the save button when the title textbox contents change to empty", () => {
        dialogBox.getTitleTextBox().setContent("");
        expect(dialogBox.getSaveButton().enabled()).toBeFalsy();
    });

    it("should enable the save button when the title textbox contents change to not empty", () => {
        dialogBox.getTitleTextBox().setContent("Test");
        expect(dialogBox.getSaveButton().enabled()).toBeTruthy();
    });
});
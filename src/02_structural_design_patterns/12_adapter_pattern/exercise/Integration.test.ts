import EmailClient from "./EmailClient";
import GmailClient from "./gmail/GmailClient";
import GmailProvider from "./providers/GmailProvider";

describe("Email client", () => {
    const client = new EmailClient();

    afterEach(() => jest.clearAllMocks());

    describe("download emails from Gmail", () => {
        const gmailClient = new GmailClient();
        const provider = new GmailProvider(gmailClient);

        beforeAll(() => client.addProvider(provider));

        beforeEach(() => {
            jest.spyOn(gmailClient, "connect");
            jest.spyOn(gmailClient, "getEmails");
            jest.spyOn(gmailClient, "disconnect");
            jest.spyOn(provider, "downloadEmails");

            client.downloadEmails();
        });

        it("should have ask provider to download email", () => {
            expect(provider.downloadEmails).toHaveBeenCalledTimes(1);
        });

        it("should have connected to Gmail servers", () => {
            expect(gmailClient.connect).toHaveBeenCalledTimes(1);
        });

        it("should have retrieve emails from Gmail client", () => {
            expect(gmailClient.getEmails).toHaveBeenCalledTimes(1);
        });

        it("should have disconnected to Gmail servers", () => {
            expect(gmailClient.disconnect).toHaveBeenCalledTimes(1);
        });
    });
});
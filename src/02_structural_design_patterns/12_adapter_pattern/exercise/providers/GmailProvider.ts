import GmailClient from "../gmail/GmailClient";
import EmailProvider from "../interfaces/EmailProvider";

export default class GmailProvider implements EmailProvider {
    private client: GmailClient;

    constructor(client: GmailClient) {
        this.client = client
    }

    public downloadEmails(): void {
        this.client.connect();
        this.client.getEmails();
        this.client.disconnect();
    }
}
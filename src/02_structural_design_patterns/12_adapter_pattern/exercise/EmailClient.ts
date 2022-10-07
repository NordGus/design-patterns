import EmailProvider from "./interfaces/EmailProvider";

export default class EmailClient {
  private providers: Array<EmailProvider> = new Array<EmailProvider>();

  public addProvider(provider: EmailProvider): void {
    this.providers.push(provider);
  }

  public downloadEmails(): void {
    for (var provider of this.providers)
      provider.downloadEmails();
  }
}

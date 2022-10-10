import TwitterService from "./services/TwitterService";

export default class Demo {
  public static show(): void {
    const service = new TwitterService();

    const tweets = service.getRecentTweets();
  }
}

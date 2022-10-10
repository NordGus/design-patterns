import OAuth from "./OAuth";
import TwitterClient from "./TwitterClient";

export default class Demo {
  public static show(): void {
    const oauth = new OAuth();
    const requestToken = oauth.requestToken("appKey", "secret");
    const accessToken = oauth.getAccessToken(requestToken);

    const twitterClient = new TwitterClient();
    const tweets = twitterClient.getRecentTweets(accessToken);
  }
}

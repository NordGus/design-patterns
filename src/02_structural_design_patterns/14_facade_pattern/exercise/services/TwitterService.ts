import OAuth from "../OAuth";
import Tweet from "../Tweet";
import TwitterClient from "../TwitterClient";

export default class TwitterService {
    public getRecentTweets(): Array<Tweet> {
        console.log("Retrieving Recent Tweets");

        const oauth = new OAuth();
        const requestToken = oauth.requestToken("appKey", "secret");
        const accessToken = oauth.getAccessToken(requestToken);

        const twitterClient = new TwitterClient();
        return twitterClient.getRecentTweets(accessToken);
    }
}
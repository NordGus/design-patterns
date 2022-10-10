# Exercise

We’re building a social media management tool. On a few screens, we need to display the recent tweets of a given user. Look at the code in **facade/Demo**. This class shows the steps required to talk to the Twitter API.

- We need to get a request token first.
- We’ll then exchange the request token with an access token.
- To get the recent tweets, we need to send the access token to Twitter API.

We have to repeat similar steps for other operations such as composing a new tweet, liking a tweet, etc.

What are the problems with the current implementation? Use the facade pattern to solve these problems.

*This implementation is super verbose and it needs to be repeated in every instance we want to operate with tweets*
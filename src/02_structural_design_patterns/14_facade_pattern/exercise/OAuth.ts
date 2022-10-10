export default class OAuth {
  public requestToken(appKey: string, appSecret: string): string {
    console.log("Get a request token");
    return "requestToken";
  }

  public getAccessToken(requestToken: string): string {
    console.log("Get an access token");
    return "accessToken";
  }
}

import AuthenticationToken from "./AuthenticationToken";
import Connection from "./Connections";
import Message from "./Message";

export default class NotificationServer {
    // connect() -> Connection
    // authenticate(appID, key) -> AuthenticationToken
    // send(authenticationToken, message, target)
    // conn.disconnect()

    public connect(ipAddress: string): Connection {
        console.log("Creating connection to server");
        
        return new Connection();
    }

    public authenticate(appID: string, key: string): AuthenticationToken {
        console.log("Creating authentication token");

        return new AuthenticationToken();
    }

    public send(authenticationToken: AuthenticationToken, message: Message, target: string): void {
        console.log("Sending a message");
    }
}
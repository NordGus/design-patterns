import Message from "./Message";
import NotificationServer from "./NotificationServer";

export default class NotificationService {
    public send(message: string, target: string) {
        const server = new NotificationServer();
        const connection = server.connect("ip");
        const authToken = server.authenticate("app", "key");
        server.send(authToken, new Message(message), target);
        connection.disconnect();
    }
}
import IEncryptionAlgorithm from "./IEncrytionAlgorithm";

export default class ChatClient {
    private encryptionAlgorithm: IEncryptionAlgorithm;

    constructor(encryptionAlgorithm: IEncryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
    }

    public send(message: string) {
        this.encryptionAlgorithm.apply(message);

        console.log("Sending the encrypted message...");
    }
}
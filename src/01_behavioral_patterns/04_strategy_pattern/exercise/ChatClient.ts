export default class ChatClient {
    private encryptionAlgorithm: string;

    constructor(encryptionAlgorithm: string) {
        this.encryptionAlgorithm = encryptionAlgorithm;
    }

    public send(message: string) {
        if (this.encryptionAlgorithm === "DES")
            console.log("Encrypting message using DES");
        else if (this.encryptionAlgorithm === "AES")
            console.log("Encrypting message using AES");
        else
            throw new Error("Unsupported encryption algorithm");

        console.log("Sending the encrypted message...");
    }
}
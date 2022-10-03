import IEncryptionAlgorithm from "../IEncrytionAlgorithm";

export default class AesEncryption implements IEncryptionAlgorithm {
    apply(text: string): void {
        console.log("Encrypting message using AES");
    }
}
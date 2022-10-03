import IEncryptionAlgorithm from "../IEncrytionAlgorithm";

export default class DesEncryption implements IEncryptionAlgorithm {
    apply(text: string): void {
        console.log("Encrypting message using DES");
    }
}
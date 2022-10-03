export default interface IEncryptionAlgorithm {
    apply(text: string): void;
}
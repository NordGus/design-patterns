export default class Logger {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public write(message: string): void {
        console.log("Writing a message to the log.");
    }
}

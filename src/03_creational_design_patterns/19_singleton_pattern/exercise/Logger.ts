export default class Logger {
    private static instances: Map<string, Logger> = new Map<string, Logger>();
    private fileName: string;

    private constructor(fileName: string) {
        this.fileName = fileName;
    }

    public static getInstance(fileName: string): Logger {
        if (!this.instances.has(fileName))
            this.instances.set(fileName, new Logger(fileName))

        return this.instances.get(fileName);
    }

    public write(message: string): void {
        console.log("Writing a message to the log.");
    }
}

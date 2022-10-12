import Logger from "./Logger";

describe("An application Logger", () => {
    const logger1 = Logger.getInstance("hello.log");
    const logger2 = Logger.getInstance("world.log");

    it("should return different loggers for each log file", () => {
        expect(Logger.getInstance("world.log")).not.toBe(Logger.getInstance("hello.log"));
    });

    it("should return the same logger instance for the given file", () => {
        expect(Logger.getInstance("hello.log")).toBe(logger1);
    });
});
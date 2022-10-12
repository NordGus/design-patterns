import ConfigManager from "./ConfigManager";

describe("A application settings manager", () => {
    const config = ConfigManager.getInstance();
    
    beforeAll(() => config.set("Hello", "World"));

    it("should return the same instance", () => {
        expect(ConfigManager.getInstance()).toBe(config);
    });

    it("should maintains the same settings map", () => {
        const instance = ConfigManager.getInstance();
        expect(instance.get("Hello")).toBe(config.get("Hello"));
    });
});
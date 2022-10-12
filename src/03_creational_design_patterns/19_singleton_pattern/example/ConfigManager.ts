export default class ConfigManager {
    private static instance: ConfigManager;
    private settings: Map<string, any>;

    private constructor() {
        this.settings = new Map<string, any>();
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }

        return ConfigManager.instance;
    }

    public set(key: string, value: any): void {
        this.settings.set(key, value);
    }

    public get(key: string): any {
        return this.settings.get(key);
    }
}
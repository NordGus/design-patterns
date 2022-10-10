import AdvancedRemoteControl from "./features/AdvancedRemoteControl";
import RemoteControl from "./features/RemoteControl";
import SamsungTV from "./implementations/SamsungTV";
import SonyTV from "./implementations/SonyTV";

describe("A Remote Control Application for TVs", () => {
    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("Sony TV", () => {
        const tv = new SonyTV();
        
        describe("basic remote control", () => {
            const remote = new RemoteControl(tv);

            it("should turn on", () => {
                remote.turnOn();
                expect(console.log).toHaveBeenCalledWith("Sony Turn On");
            });

            it("should turn off", () => {
                remote.turnOff();
                expect(console.log).toHaveBeenCalledWith("Sony Turn Off");
            });
        });

        describe("advanced remote control", () => {
            const remote = new AdvancedRemoteControl(tv);

            it("should turn on", () => {
                remote.turnOn();
                expect(console.log).toHaveBeenCalledWith("Sony Turn On");
            });

            it("should turn off", () => {
                remote.turnOff();
                expect(console.log).toHaveBeenCalledWith("Sony Turn Off");
            });

            it("should set channel", () => {
                remote.setChannel(42);
                expect(console.log).toHaveBeenCalledWith("Sony Set channel 42");
            });
        });
    });

    describe("Samsung TV", () => {
        const tv = new SamsungTV();
        
        describe("basic remote control", () => {
            const remote = new RemoteControl(tv);

            it("should turn on", () => {
                remote.turnOn();
                expect(console.log).toHaveBeenCalledWith("Samsung Turn On");
            });

            it("should turn off", () => {
                remote.turnOff();
                expect(console.log).toHaveBeenCalledWith("Samsung Turn Off");
            });
        });

        describe("advanced remote control", () => {
            const remote = new AdvancedRemoteControl(tv);

            it("should turn on", () => {
                remote.turnOn();
                expect(console.log).toHaveBeenCalledWith("Samsung Turn On");
            });

            it("should turn off", () => {
                remote.turnOff();
                expect(console.log).toHaveBeenCalledWith("Samsung Turn Off");
            });

            it("should set channel", () => {
                remote.setChannel(42);
                expect(console.log).toHaveBeenCalledWith("Samsung Set channel 42");
            });
        });
    });
});
import AddReverbOperation from "./operations/AddReverbOperation";
import NormalizeOperation from "./operations/NormalizeOperation";
import ReduceNoiseOperation from "./operations/ReduseNoiseOperation";
import WavFile from "./WavFile";

describe("An Audio editor for wave (.wav) files", () => {
    const file = WavFile.read("test.wav");

    beforeEach(() => jest.spyOn(console, "log"));
    afterEach(() => jest.clearAllMocks());

    describe("adding reverb to the file", () => {
        const operation = new AddReverbOperation();

        beforeEach(() => {
            jest.spyOn(operation, "apply");
            file.execute(operation);
        });

        it("should have apply the operation once per segment", () => {
            expect(operation.apply).toHaveBeenCalledTimes(4);
        });

        it("should have apply the operation to the FormatSegment", () => {
            expect(console.log).toHaveBeenCalledWith("Add Reverb to FormatSegment");
        });

        it("should have apply the operation to the FactSegment", () => {
            expect(console.log).toHaveBeenCalledWith("Add Reverb to FactSegment");
        });
    });

    describe("normalizing the file", () => {
        const operation = new NormalizeOperation();

        beforeEach(() => {
            jest.spyOn(operation, "apply");
            file.execute(operation);
        });

        it("should have apply the operation once per segment", () => {
            expect(operation.apply).toHaveBeenCalledTimes(4);
        });

        it("should have apply the operation to the FormatSegment", () => {
            expect(console.log).toHaveBeenCalledWith("Normalize FormatSegment");
        });

        it("should have apply the operation to the FactSegment", () => {
            expect(console.log).toHaveBeenCalledWith("Normalize FactSegment");
        });
    });

    describe("reducing file noise", () => {
        const operation = new ReduceNoiseOperation();

        beforeEach(() => {
            jest.spyOn(operation, "apply");
            file.execute(operation);
        });

        it("should have apply the operation once per segment", () => {
            expect(operation.apply).toHaveBeenCalledTimes(4);
        });

        it("should have apply the operation to the FormatSegment", () => {
            expect(console.log).toHaveBeenCalledWith("Reduce Noise of FormatSegment");
        });

        it("should have apply the operation to the FactSegment", () => {
            expect(console.log).toHaveBeenCalledWith("Reduce Noise of FactSegment");
        });
    });
});
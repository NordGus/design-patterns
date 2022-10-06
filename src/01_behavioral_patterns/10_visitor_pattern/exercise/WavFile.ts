import FactSegment from "./segments/FactSegment";
import ISegment from "./interfaces/ISegment";
import FormatSegment from "./segments/FormatSegment";
import IOperation from "./interfaces/IOperation";

export default class WavFile {
    private segments = new Array<ISegment>();

    public static read(fileName: string): WavFile {
        // Simulate reading a wav file and building the segments
        var wavFile = new WavFile();
        wavFile.segments.push(new FormatSegment());
        wavFile.segments.push(new FactSegment());
        wavFile.segments.push(new FactSegment());
        wavFile.segments.push(new FactSegment());

        return wavFile;
    }

    public execute(operation: IOperation): void {
        for (var segment of this.segments)
            segment.execute(operation);
    }
}
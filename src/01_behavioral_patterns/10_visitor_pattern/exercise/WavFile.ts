import FactSegment from "./FactSegment";
import FormatSegment from "./FormatSegment";
import Segment from "./Segment";

export default class WavFile {
    private segments = new Array<Segment>();

    public static read(fileName: string): WavFile {
        // Simulate reading a wav file and building the segments
        var wavFile = new WavFile();
        wavFile.segments.push(new FormatSegment());
        wavFile.segments.push(new FactSegment());
        wavFile.segments.push(new FactSegment());
        wavFile.segments.push(new FactSegment());

        return wavFile;
    }

    public reduceNoise(): void {
        for (var segment of this.segments)
            segment.reduceNoise();
    }

    public addReverb(): void {
        for (var segment of this.segments)
            segment.addReverb();
    }

    public normalize(): void {
        for (var segment of this.segments)
            segment.normalize();
    }
}
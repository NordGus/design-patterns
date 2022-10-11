import Audio from "../components/Audio";
import Clip from "../components/Clip";
import Text from "../components/Text";
import IComponent from "../interfaces/IComponent";
import Timeline from "../Timeline";

export default class ContextMenu {
    private timeline: Timeline;

    constructor(timeline: Timeline) {
        this.timeline = timeline;
    }

    public duplicate(component: IComponent): void {
        if (component instanceof Text) {
            const source = component as Text;
            const target = new Text(source.getContent());
            this.timeline.add(target);
        }
        else if (component instanceof Audio) {
            const source = component as Audio;
            const target = new Audio(source.getMetadata());
            this.timeline.add(target);
        }
        else if (component instanceof Clip) {
            const source = component as Clip;
            const target = new Clip(source.getMetadata());
            this.timeline.add(target);
        }
    }
}

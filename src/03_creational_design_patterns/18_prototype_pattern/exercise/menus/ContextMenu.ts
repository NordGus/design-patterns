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
        const clone = component.clone();
        this.timeline.add(clone);
    }
}

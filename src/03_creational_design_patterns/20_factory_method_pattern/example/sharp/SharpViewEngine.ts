import IViewEngine from "../matcha/interfaces/IViewEngine";

export default class SharpViewEngine implements IViewEngine {
    public render(viewName: string, context: Map<string, any>): string {
        return "View rendered by Sharp";
    }
}
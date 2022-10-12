import IViewEngine from "./interfaces/IViewEngine";

export default class MatchaViewEngine implements IViewEngine {
    public render(viewName: string, context: Map<string, any>): string {
        return "View rendered by Matcha";
    }
}
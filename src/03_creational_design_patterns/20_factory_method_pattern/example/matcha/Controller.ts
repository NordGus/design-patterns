import IViewEngine from "./interfaces/IViewEngine";

export default class Controller {
    public render(viewName: string, context: Map<string, any>, engine: IViewEngine): void {
        const html = engine.render(viewName, context);
        console.log(html);
    }
}
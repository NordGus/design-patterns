import IViewEngine from "./interfaces/IViewEngine";
import MatchaViewEngine from "./MatchaViewEngine";

export default class Controller {
    public render(viewName: string, context: Map<string, any>): void {
        const engine = this.createViewEngine();
        const html = engine.render(viewName, context);
        console.log(html);
    }

    protected createViewEngine(): IViewEngine {
        return new MatchaViewEngine();
    }

    // Alternativily
    // protected abstract createViewEngine(): IViewEngine;
}
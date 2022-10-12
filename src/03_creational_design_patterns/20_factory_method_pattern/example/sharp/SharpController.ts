import Controller from "../matcha/Controller";
import IViewEngine from "../matcha/interfaces/IViewEngine";
import SharpViewEngine from "./SharpViewEngine";

export default class SharpController extends Controller {
    protected override createViewEngine(): IViewEngine {
        return new SharpViewEngine();
    }
}
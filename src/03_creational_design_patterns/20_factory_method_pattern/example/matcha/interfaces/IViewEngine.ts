export default interface IViewEngine {
    render(viewName: string, context: Map<string, any>): string;
}
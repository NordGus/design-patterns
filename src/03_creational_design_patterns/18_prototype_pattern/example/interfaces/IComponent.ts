export default interface IComponent {
    render(): void;
    clone(): IComponent;
}
export default class Product {
  private id: number;
  private name: string;

  constructor(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

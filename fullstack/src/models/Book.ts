export class Book {
    // id - number - Unique identifier for the book
    // title - string - Title of the book
    // category - string - Category of the book
    // price - number - Price of the book
    // stock - number - Available amount in inventory
    constructor(
        public id: number,
        public title: string,
        public category: string,
        public price: number,
        public stock: number
    ) {}

    // Getters

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getCategory(): string {
        return this.category;
    }

    public getPrice(): number {
        return this.price;
    }

    public getStock(): number {
        return this.stock;
    }

    // Setters

    public setTitle(title: string): void {
        this.title = title;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }
}

import {ProductItem} from "./types";

export class Product {
    private id: number;
    private name: string;
    private vendorName: string;
    private description: string;
    private price: number;
    private rating: number;

    constructor({id, name, vendorName, description, price, rating}: ProductItem) {
        this.id = id;
        this.name = name;
        this.vendorName = vendorName;
        this.description = description;
        this.price = price;
        this.rating = rating;
    }

    /* Создаём карточку товара */
    createProductCard(): ProductItem {
        return {
            id: this.id,
            name: this.name,
            vendorName: this.vendorName,
            description: this.description,
            price: this.price,
            rating: this.rating,
        }
    }
}

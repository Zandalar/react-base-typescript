import {ProductItem, ProductsList} from "./types";
import {INITIAL_PRODUCTS_LIST} from "./constants";

export class ProductManager {
    private productsList: ProductsList = INITIAL_PRODUCTS_LIST;

    /* Получаем список товаров */
    getProductsList(): ProductsList {
        return this.productsList;
    }

    /* Получаем товар по айдишнику */
    getProductById(id: number): ProductItem | undefined {
        return this.productsList.find((product) => product.id === id);
    }

    /* Добавляем новый товар в список */
    addNewProduct(product: ProductItem): void {
        this.productsList = [...this.productsList, product];
    }
}

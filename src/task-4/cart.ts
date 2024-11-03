import {ProductItem, ProductsList} from "./types";
import {ProductManager} from "./product-manager";
import {OrderManager} from "./order-manager";

export class Cart {
    private cartList: ProductsList = [];
    private productManager: ProductManager;
    private orderManager: OrderManager;
    private balance: number = 0;

    constructor(initialBalance?: number) {
        this.productManager = new ProductManager();
        this.orderManager = new OrderManager();
        this.balance = initialBalance ?? 0;
    }

    /* Получаем список товаров в корзине */
    getCartList(): ProductsList {
        return this.cartList;
    }

    /* ПОлучаем сумму баланса */
    getBalanceAmount(): number {
        return this.balance;
    }

    /* Увеличиваем баланс */
    increaseBalance(amount: number) {
        this.balance = this.balance + amount;
    }

    /* Добавляем товар в корзину */
    addProductToBasket(productId: number): ProductItem | null {
        const product = this.productManager.getProductById(productId);

        if (!product) {
            return null;
        }

        this.cartList.push(product);

        return product;
    }

    /* Создаём новый заказ */
    createNewOrder(productId: number) {
        this.orderManager.createOrder(productId);
    }
}

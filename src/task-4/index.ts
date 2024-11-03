import {ProductItem} from "./types";
import {ProductManager} from "./product-manager";
import {OrderManager} from "./order-manager";
import {Product} from "./product";
import {Cart} from "./cart";

const productManager = new ProductManager();
const orderManager = new OrderManager();
const cart = new Cart();
const product = new Product({
    id: 4,
    name: "Очки",
    vendorName: "ОАО Очко",
    description: "Очки солнцезащитные",
    price: 19999,
    rating: 4.2,
});
const newProduct: ProductItem = product.createProductCard();

/* Получаем список товаров */
console.log(productManager.getProductsList());
/* Добавляем продукт в список */
productManager.addNewProduct(newProduct);
/* Получаем добавленный товар */
console.log("Добавлен товар:", productManager.getProductById(4));
/* Получаем список товаров */
console.log(productManager.getProductsList());

/* Получаем список заказов */
console.log(orderManager.getOrdersList());
/* Создаём заказ */
console.log(orderManager.createOrder(3));
/* Получаем список заказов */
console.log(orderManager.getOrdersList());

/* Получаем список товаров в корзине */
console.log(cart.getCartList());
/* Добавляем товар в корзину */
cart.addProductToBasket(2);
/* Получаем список товаров в корзине */
console.log(cart.getCartList());
/* Создаём новый заказ из корзины по айдишнику товара */
cart.createNewOrder(2);
/* Получаем список заказов */
console.log(orderManager.getOrdersList());
/* Получаем баланс */
console.log(cart.getBalanceAmount());
/* Увеличиваем баланс */
cart.increaseBalance(3333);
/* Получаем баланс */
console.log(cart.getBalanceAmount());


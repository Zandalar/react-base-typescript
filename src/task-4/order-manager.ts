import {OrdersList, OrderItem} from "./types";
import {INITIAL_ORDERS_LIST, ORDER_DELIVERY_STATUSES, ORDER_PAYMENT_STATUSES} from "./constants";
import {ProductManager} from "./product-manager";
import {Order} from "./order";

export class OrderManager {
    private ordersList: OrdersList = INITIAL_ORDERS_LIST;
    private productManager: ProductManager = new ProductManager();

    /* Создаём заказ */
    createOrder(productId: number): OrderItem | null {
        const product = this.productManager.getProductById(productId);

        if (!product) {
            return null;
        }

        const order = new Order(productId, product);

        order.changeOrderPaymentStatus(ORDER_PAYMENT_STATUSES.AWAITING_PAYMENT);
        order.changeOrderDeliveryStatus(ORDER_DELIVERY_STATUSES.IN_TRANSIT);

        const orderItem = order.getOrder();

        this.ordersList = [...this.ordersList, orderItem];

        return orderItem;
    }

    /* Получаем список заказов */
    getOrdersList(): OrdersList {
        return this.ordersList;
    }
}

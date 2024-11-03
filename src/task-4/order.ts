import {OrderDeliveryStatuses, OrderItem, OrderPaymentStatuses, ProductItem} from "./types";
import {ORDER_DELIVERY_STATUSES, ORDER_PAYMENT_STATUSES} from "./constants";

export class Order {
    private id: number;
    private productItem: ProductItem;
    private orderDeliveryStatus: OrderDeliveryStatuses = ORDER_DELIVERY_STATUSES.IN_STOCK;
    private orderPaymentStatus: OrderPaymentStatuses = ORDER_PAYMENT_STATUSES.POSTAGE;

    constructor(id: number, productItem: ProductItem) {
        this.id = id;
        this.productItem = productItem;
    }

    /* Меняем статус доставки заказа */
    changeOrderDeliveryStatus(deliveryStatus: OrderDeliveryStatuses): void {
        this.orderDeliveryStatus = deliveryStatus;

        console.log(`Статус доставки заказа изменён на: ${this.orderDeliveryStatus}`);
        return;
    }

    /* Меняем статус оплаты заказа */
    changeOrderPaymentStatus(paymentStatus: OrderPaymentStatuses): void {
        this.orderPaymentStatus = paymentStatus;

        console.log(`Статус оплаты заказа изменён на: ${this.orderPaymentStatus}`);
        return;
    }

    /* Получаем инфо о заказе */
    getOrder(): OrderItem {
        return {
            id: this.id,
            product: this.productItem,
            orderDeliveryStatus: this.orderDeliveryStatus,
            orderPaymentStatus: this.orderPaymentStatus,
        }
    }
}

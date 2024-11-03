import {ORDER_DELIVERY_STATUSES, ORDER_PAYMENT_STATUSES} from "./constants";

type Values<T> = T[keyof T];

/* Статусы доставки */
export type OrderDeliveryStatuses = Values<typeof ORDER_DELIVERY_STATUSES>;

/* Статусы оплаты */
export type OrderPaymentStatuses = Values<typeof ORDER_PAYMENT_STATUSES>;

/* Продукт */
export type ProductItem = {
    /* Id продукта */
    id: number;

    /* Наименование товара */
    name: string;

    /* Наименование продавца */
    vendorName: string;

    /* Описание товара */
    description: string;

    /* Стоимость товара */
    price: number;

    /* Рейтинг товара */
    rating: number;
}

/* Список товаров */
export type ProductsList = ProductItem[];

/* Заказ */
export type OrderItem = {
    /* Id заказа */
    id: number;

    /* Инфо о заказанном продукте */
    product: ProductItem;

    /* Статус доставки заказа */
    orderDeliveryStatus: OrderDeliveryStatuses;

    /* Статус оплаты заказа */
    orderPaymentStatus: OrderPaymentStatuses;
}

/* Список заказов */
export type OrdersList = OrderItem[];

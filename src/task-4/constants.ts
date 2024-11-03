import {OrdersList, ProductsList} from "./types";

/* Статусы доставки */
export const ORDER_DELIVERY_STATUSES = {
    IN_STOCK: "Собран",
    IN_TRANSIT: "В пути",
    DELIVERED: "Доставлен",
} as const;

/* Статусы оплаты */
export const ORDER_PAYMENT_STATUSES = {
    PAID: "Оплачен",
    AWAITING_PAYMENT: "Ожидает оплаты",
    POSTAGE: "Оплата при получении",
} as const;

/* Дефолтный список товаров */
export const INITIAL_PRODUCTS_LIST: ProductsList = [
    {
        id: 1,
        name: "Конструктор",
        vendorName: "Lego",
        description: "Набор 123456",
        price: 9999,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Видеокарта",
        vendorName: "Gigabyte",
        description: "RTX 4070 Ti Super",
        price: 75000,
        rating: 4.9,
    },
    {
        id: 3,
        name: "Огнетушитель",
        vendorName: "ООО Пожар",
        description: "ОУ-7",
        price: 20000,
        rating: 3.9,
    }
]

/* Дефолтный список заказов */
export const INITIAL_ORDERS_LIST: OrdersList = [
    {
        id: 11,
        product: INITIAL_PRODUCTS_LIST[0],
        orderDeliveryStatus: ORDER_DELIVERY_STATUSES.IN_STOCK,
        orderPaymentStatus: ORDER_PAYMENT_STATUSES.AWAITING_PAYMENT,
    },
    {
        id: 22,
        product: INITIAL_PRODUCTS_LIST[1],
        orderDeliveryStatus: ORDER_DELIVERY_STATUSES.IN_STOCK,
        orderPaymentStatus: ORDER_PAYMENT_STATUSES.PAID,
    },
]


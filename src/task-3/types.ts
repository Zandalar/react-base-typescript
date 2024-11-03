import { BANK_NAMES, CURRENCIES } from "./constants";

type Values<T> = T[keyof T];

/* Валюты */
export type Currency = Values<typeof CURRENCIES>;

/* Названия банков */
export type BankNames = Values<typeof BANK_NAMES>;

interface Account {
  /* Номер счёта */
  number: number;

  /* Id счёта */
  id: number;

  /* Валюта счёта */
  currency: Currency;

  /* Баланс */
  balance: number;

  /* Задолженность */
  debt?: number;
}

export interface CreditAccountProps extends Account {
  /* Название банка для оплаты */
  refundBankName: BankNames;

  /* Дата оплаты */
  refundDate: Date;

  /* Сумма оплаты */
  refundAmount: number;
}

export interface DebitAccountProps extends Account {
  /* Название банка для пополнения */
  depositBankName: BankNames;
}

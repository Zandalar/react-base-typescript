import {BankNames, Currency, DebitAccountProps} from "./types";
import {BANK_NAMES, CURRENCIES} from "./constants";

export class DebitAccount {
    number: number;
    id: number;
    currency: Currency;
    balance: number;
    depositBankName: BankNames;

    constructor({
                    number,
                    id,
                    currency,
                    balance,
                    depositBankName,
                }: DebitAccountProps
    ) {
        this.number = number;
        this.id = id;
        this.currency = currency;
        this.balance = balance;
        this.depositBankName = depositBankName;
    }

    /* Получаем сумму на счёте */
    getBalance(): string {
        return `Ваш баланс составляет: ${this.balance} ${this.currency}`;
    }

    /* Кладём деньги */
    addMoney(amount: number, bankName?: BankNames): string {
        this.balance = this.balance + amount;

        return `Зачисление: +${amount} ${this.currency} на счёт в банке ${bankName ?? this.depositBankName}. Ваш баланс составляет: ${this.balance} ${this.currency}`
    }

    /* Снимаем деньги */
    takeMoney(amount: number): string {
        /* Если сумма превышает сумму на счёте, не даём снять деньги */
        if (amount > this.balance) {
            return `Недостаточно средств. Ваш баланс составляет ${this.balance} ${this.currency}`
        }

        /* Уменьшаем баланс и отдаём деньги */
        this.balance = this.balance - amount;

        return `Снятие наличных: -${amount} ${this.currency}. Ваш баланс составляет: ${this.balance} ${this.currency}`;
    }
}

const debitAccount = new DebitAccount({number: 1234567890, id: 1, currency: CURRENCIES.RUR, balance: 1234, debt: 222, depositBankName: BANK_NAMES.SBER })

console.log(debitAccount);
console.log(debitAccount.getBalance());
console.log(debitAccount.addMoney(266, BANK_NAMES.VTB));
console.log(debitAccount.addMoney(266));
console.log(debitAccount.takeMoney(1800));
console.log(debitAccount.takeMoney(1400));
